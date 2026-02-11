import React from 'react';
import { ArrowRight, Brain, Microscope, FlaskConical, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featureCards = [
    {
      icon: Brain,
      title: 'Biology',
      description: 'Targeting the mechanisms that regulate tau turnover to restore homeostatic control.',
      link: '/science',
      color: 'blue'
    },
    {
      icon: Microscope,
      title: 'Biomarkers',
      description: 'Leveraging advances in tau detection for clear translation to the clinic.',
      link: '/science',
      color: 'purple'
    },
    {
      icon: FlaskConical,
      title: 'Programme',
      description: 'First-in-class enzymatic inhibition to re-establish healthy tau homeostasis.',
      link: '/programme',
      color: 'teal'
    },
    {
      icon: Users,
      title: 'About Us',
      description: 'Deep pharmaceutical experience with the agility of a precision biotech.',
      link: '/about',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/10 dark:bg-blue-500/20',
      icon: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:border-blue-500/50 dark:hover:border-blue-400/50',
      glow: 'group-hover:shadow-blue-500/20'
    },
    purple: {
      bg: 'bg-purple-500/10 dark:bg-purple-500/20',
      icon: 'text-purple-600 dark:text-purple-400',
      hover: 'hover:border-purple-500/50 dark:hover:border-purple-400/50',
      glow: 'group-hover:shadow-purple-500/20'
    },
    teal: {
      bg: 'bg-teal-500/10 dark:bg-teal-500/20',
      icon: 'text-teal-600 dark:text-teal-400',
      hover: 'hover:border-teal-500/50 dark:hover:border-teal-400/50',
      glow: 'group-hover:shadow-teal-500/20'
    },
    orange: {
      bg: 'bg-orange-500/10 dark:bg-orange-500/20',
      icon: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:border-orange-500/50 dark:hover:border-orange-400/50',
      glow: 'group-hover:shadow-orange-500/20'
    }
  };

  return (
    <div className="relative" data-testid="home-page">
      {/* Hero Section - Full Screen with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1920&q=80"
            alt="Scientific research background showing neural connections"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90 dark:from-black/85 dark:via-black/75 dark:to-black/95"></div>
          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse-slow"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          {/* Large Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
            Precision where
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              biology diverges.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 dark:text-gray-400 mb-12 font-light tracking-wide">
            Small-molecule medicines for neurodegeneration.
          </p>

          {/* CTA Button */}
          <Link to="/science">
            <button 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-lg font-medium transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:scale-105"
              data-testid="explore-science-btn"
            >
              Explore Our Science
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>

        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              TaraVera Bio is building first-in-class therapeutics that target disease-modifying pathways in neurodegeneration.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We focus on compelling human biology and translate it into safe, differentiated small-molecule medicines, guided by robust scientific data and a clear line of sight to the clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Card-Based Feature Section */}
      <section className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Combining the rigour of big pharma with the agility of a precision biotech.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => {
              const IconComponent = card.icon;
              const colors = colorClasses[card.color];
              
              return (
                <Link 
                  key={index}
                  to={card.link}
                  className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-500 ${colors.hover} hover:shadow-2xl ${colors.glow} hover:-translate-y-2`}
                  data-testid={`feature-card-${card.title.toLowerCase()}`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
                    <IconComponent className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className={`flex items-center gap-2 ${colors.icon} text-sm font-medium`}>
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500 to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Changing the trajectory of brain disorders
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our team brings deep pharmaceutical experience across discovery, development, and partnering, combining the rigour of big pharma with the agility of a precision biotech.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  By intervening earlier and more precisely in the biology that drives disease, we aim to change the trajectory of brain disorders — <span className="text-gray-900 dark:text-gray-100 font-medium">from inevitable to hopeful.</span>
                </p>
              </div>
              <Link to="/about">
                <button 
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
                  data-testid="meet-team-btn"
                >
                  Meet Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                  alt="Scientific laboratory research"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">2026</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Latest News
            </h2>
          </div>
          
          <Link 
            to="/news"
            className="group block bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30"
            data-testid="news-preview-card"
          >
            <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
              <span>January 2026</span>
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span>Company News</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              TaraVera Bio formation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              TaraVera Bio was founded on the belief that better outcomes will come not from louder promises, but from deeper science.
            </p>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
              Read more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
