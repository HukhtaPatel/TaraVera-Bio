import React from 'react';
import { ArrowRight, Target } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549925245-f20a1bac6454" 
          alt="Neuroscience Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-100 dark:border-blue-800 mb-8 animate-fade-in">
          <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Precision Neurobiology Company</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
            Transforming
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Alzheimer's Disease Treatment
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
          Developing disease-modifying small-molecule therapeutics through precision neurobiology
        </p>

        <p className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto">
          Targeting tau pathology with oral, brain-penetrant small molecules
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 dark:text-gray-300 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Investment Opportunity
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 animate-float" style={{animationDelay: '0s'}}>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Pre-Seed</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Funding Stage</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">18-24 Mo</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">To lead compound generation</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">$10-15B</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Global tau therapeutics market</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;