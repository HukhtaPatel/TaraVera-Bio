import React from 'react';
import { ArrowRight, Mail, FileText, Calendar } from 'lucide-react';
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
            Ready to Transform Alzheimer's Treatment?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join us in bringing precision neurobiology to patients who need it most.
            <br />
            Partner with a team that has successfully advanced CNS programs from discovery to clinic.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Primary CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Partner With Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in investment opportunities or pharmaceutical partnerships? Let's discuss how we can work together.
            </p>
            <Button 
              size="lg" 
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-lg py-6 rounded-lg transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">View Our Science</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore our scientific approach, pipeline, and the evidence supporting USP11 as a therapeutic target.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 text-lg py-6 rounded-lg transition-all duration-300"
            >
              Download Deck
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-16 text-center">
          <p className="text-white/80 mb-6 text-lg">Prefer to schedule a meeting?</p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-900 px-8 py-6 text-lg rounded-lg transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Call
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$2M</div>
            <div className="text-white/80">Pre-Seed Round</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">48 Mo</div>
            <div className="text-white/80">To Proof of Concept</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">First-in-Class</div>
            <div className="text-white/80">Differentiated Molecules</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;