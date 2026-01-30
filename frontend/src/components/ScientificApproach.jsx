import React from 'react';
import { Brain, Target, Pill, TrendingUp } from 'lucide-react';

const ScientificApproach = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-800 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1647613561332-3d88a6a0048e" 
          alt="Neuroscience Research Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium mb-4">
            <Brain className="w-4 h-4" />
            Our Approach
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Precision Neurobiology:
            <br />
            <span className="text-blue-600 dark:text-blue-400">Targeting Tau Pathology</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tau pathology is more tightly correlated with neurodegeneration and cognitive decline than amyloid
          </p>
        </div>

        {/* Key Scientific Rationale */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Disease-Modifying Focus</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Tau reduction is central to next-generation disease-modifying therapies. Our lead program uses enzymatic inhibition to ameliorate tau accumulation and misfolding in early Alzheimer's pathology.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500 dark:border-blue-600">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-300">
                Grounded in the A/T/N framework for target selection and translational strategy
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Pill className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Small-Molecule Advantage</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Oral, brain-penetrant small molecules that reduce tau burden. Current programs are dominated by biologics with limitations in brain exposure, scalability, and cost.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500 dark:border-purple-600">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-300">
                Positioning for first-in-class tau-lowering small molecule assets
              </p>
            </div>
          </div>
        </div>

        {/* Target Validation */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 rounded-2xl p-10 shadow-lg border border-pink-200 dark:border-pink-900/50 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
              Robust Target Validation
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
              Human genetic and tissue evidence supports the published mechanism as a disease-modifying target, with relevance to sex-linked differences in tau pathology.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2">Human Evidence</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Genetic & tissue validation</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Mechanism</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enzymatic inhibition</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Precision</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sex-linked pathology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Strategy */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Pipeline Strategy</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
            Restoring homeostasis on disease-relevant molecular pathways
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
              <TrendingUp className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Enhance Degradation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pathways that enhance tau degradation</p>
            </div>
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
              <Target className="w-8 h-8 mx-auto text-purple-600 dark:text-purple-400 mb-4" />
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Reduce Toxic Species</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Reduce formation of toxic tau species</p>
            </div>
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300">
              <Brain className="w-8 h-8 mx-auto text-pink-600 dark:text-pink-400 mb-4" />
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Rebalance Homeostasis</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Rebalance protein homeostasis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificApproach;