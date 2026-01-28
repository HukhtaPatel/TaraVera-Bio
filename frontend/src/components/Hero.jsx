import React from 'react';
import { ArrowRight, Microscope } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549925245-f20a1bac6454" 
          alt="Neuroscience Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-8 animate-fade-in">
          <Microscope className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Precision Neurobiology Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Transforming
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Alzheimer's Treatment
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
          Restoring protein clearance through precision targeting of the USP11-Tau axis
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          The first small-molecule approach designed to address the female-predominant Tau burden in Alzheimer's disease
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-gray-300 hover:border-blue-500 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            View Our Science
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-blue-300 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">X-Linked</div>
            <div className="text-sm text-gray-600">USP11 genetic vulnerability</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-purple-300 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">18-24 Mo</div>
            <div className="text-sm text-gray-600">To lead molecule generation</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-pink-300 transition-all duration-300">
            <div className="text-4xl font-bold text-pink-600 mb-2">25+ Years</div>
            <div className="text-sm text-gray-600">Combined pharma expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;