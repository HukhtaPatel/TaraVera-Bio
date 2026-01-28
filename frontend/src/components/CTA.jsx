import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section className="py-24 bg-blue-600 dark:bg-blue-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Transforming Alzheimer's Treatment
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Partner with a team developing first-in-class, disease-modifying small-molecule therapeutics for neurodegenerative diseases.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Investment CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Investment Opportunity</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in our Pre-Seed funding round? Connect with us to learn more about our approach and timeline.
            </p>
            <Button 
              size="lg" 
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-lg py-6 rounded-lg transition-all duration-300"
            >
              Contact for Investment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Partnership CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Partnership Inquiries</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Exploring strategic partnerships in neurodegeneration? Let's discuss collaboration opportunities.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-lg py-6 rounded-lg transition-all duration-300"
            >
              Partner With Us
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <p className="text-white/80 mb-4 text-lg">Contact our founding team:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <a href="mailto:Radha@TaraVera.bio" className="hover:text-white/80 transition-colors">
              <span className="font-medium">Radha Desai, CEO/CSO:</span> Radha@TaraVera.bio
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:Sian@TaraVera.bio" className="hover:text-white/80 transition-colors">
              <span className="font-medium">Sian Lewis, Head of Discovery:</span> Sian@TaraVera.bio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;