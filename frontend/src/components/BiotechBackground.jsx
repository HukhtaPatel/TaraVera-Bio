import React, { useEffect, useRef } from 'react';

const BiotechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dataPoints = [];
    let dataStreams = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Data Point class (representing biotech data being collected)
    class DataPoint {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.targetX = canvas.width * 0.8 + Math.random() * 100;
        this.targetY = Math.random() * canvas.height;
        
        // Create mix of small, medium, and large data points
        const sizeType = Math.random();
        if (sizeType < 0.5) {
          // Small data points (50%)
          this.size = Math.random() * 1.5 + 1;
          this.opacity = Math.random() * 0.3 + 0.3;
        } else if (sizeType < 0.8) {
          // Medium data points (30%)
          this.size = Math.random() * 2 + 3;
          this.opacity = Math.random() * 0.4 + 0.5;
        } else {
          // Large data points (20%)
          this.size = Math.random() * 3 + 5;
          this.opacity = Math.random() * 0.5 + 0.6;
        }
        
        this.speed = Math.random() * 0.3 + 0.1;
        this.isGathering = Math.random() > 0.5;
        this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246' : 'rgba(147, 51, 234';
      }

      update() {
        if (this.isGathering) {
          // Move towards target (gathering phase)
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          this.x += dx * this.speed * 0.02;
          this.y += dy * this.speed * 0.02;

          // If close to target, mark for sorting
          if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
            this.isGathering = false;
          }
        } else {
          // Drift slowly (sorting phase)
          this.x += (Math.random() - 0.5) * 0.3;
          this.y += (Math.random() - 0.5) * 0.3;
        }

        // Wrap around
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Data Stream class (flowing data lines)
    class DataStream {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.3 + 0.2; // Increased from 0.2+0.1 to 0.3+0.2
        this.segments = [];
        
        // Create segments for the stream
        for (let i = 0; i < 8; i++) {
          this.segments.push({
            offset: i * 15,
            char: Math.random() > 0.5 ? '0' : '1'
          });
        }
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + this.length) {
          this.y = -this.length;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.font = '14px monospace'; // Increased from 10px to 14px
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        
        this.segments.forEach((segment, i) => {
          const segmentY = this.y - segment.offset;
          if (segmentY > 0 && segmentY < canvas.height) {
            ctx.fillText(segment.char, this.x, segmentY);
          }
        });
      }
    }

 

    // Initialize elements
    const dataPointCount = 60;
    for (let i = 0; i < dataPointCount; i++) {
      dataPoints.push(new DataPoint());
    }

    const streamCount = 15;
    for (let i = 0; i < streamCount; i++) {
      dataStreams.push(new DataStream());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw data streams
      dataStreams.forEach(stream => {
        stream.update();
        stream.draw();
      });

      // Draw data points
      dataPoints.forEach(point => {
        point.update();
        point.draw();
      });

      // Draw connections between nearby gathered points
      for (let i = 0; i < dataPoints.length; i++) {
        if (!dataPoints[i].isGathering) {
          for (let j = i + 1; j < dataPoints.length; j++) {
            if (!dataPoints[j].isGathering) {
              const dx = dataPoints[i].x - dataPoints[j].x;
              const dy = dataPoints[i].y - dataPoints[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) { // Increased from 80 to 100
                const opacity = (1 - distance / 100) * 0.15; // Increased from 0.1 to 0.15
                ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
                ctx.lineWidth = 1.5; // Increased from 1 to 1.5
                ctx.beginPath();
                ctx.moveTo(dataPoints[i].x, dataPoints[i].y);
                ctx.lineTo(dataPoints[j].x, dataPoints[j].y);
                ctx.stroke();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50 dark:opacity-35"
      style={{ background: 'transparent' }}
    />
  );
};

export default BiotechBackground;
