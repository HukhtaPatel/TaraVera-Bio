import React from 'react';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';

const Programme = () => {
  const developmentSteps = [
    'Target validation (genetic)',
    'Assay readiness / pilot screen',
    'Lead generation',
    'Lead optimisation',
    'In vivo proof of mechanism',
    'Therapeutic window assessment',
    'Safety / tolerability in human',
    'Proof of concept in human',
  ];

  const fundingStages = ['Pre-seed', 'Seed', 'Series A'];

  return (
    <section className="pt-28 pb-24 bg-white dark:bg-gray-900 min-h-screen" data-testid="programme-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Programme
          </h1>
        </div>

        {/* Lead Programme Section (merged from Lead page) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Lead Programme
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 md:p-10 border border-blue-200 dark:border-blue-800 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Restoring Tau Homeostasis Through Enzymatic Control
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                TaraVera Bio's lead programme is centred on enzymatic inhibition to re-establish healthy tau homeostasis. By precisely modulating an upstream enzymatic pathway, the programme enhances endogenous clearance mechanisms to selectively reduce pathogenic tau species while preserving normal physiological function.
              </p>
              <p>
                The approach benefits from strong precedent in chemical, pharmacological, and clinical tractability. Enzymatic targets enable rational small-molecule design, predictable dose–response relationships, and direct linkage between target engagement and biological effect — supporting a clear, biomarker-enabled path to the clinic.
              </p>
              <p>
                Risk is actively managed at every stage of the lifecycle through mechanism-driven validation, stepwise optimisation, and biomarker-based go/no-go decisions. This disciplined de-risking strategy is paired with a robust intellectual property moat spanning the biological mechanism, chemical matter, and therapeutic application.
              </p>
            </div>
          </div>

          {/* Outcome Callout */}
          <div className="bg-blue-600 dark:bg-blue-700 rounded-xl p-6 md:p-8 mb-16">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-white flex-shrink-0" />
              <p className="text-lg md:text-xl font-bold text-white">
                Outcome: a first-in-class, disease-modifying programme with a clear line of sight to clinical impact.
              </p>
            </div>
          </div>
        </div>

        {/* Development Pathway */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Development Pathway
          </h2>
          
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              
              {/* Steps */}
              <div className="grid grid-cols-8 gap-2">
                {developmentSteps.map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    <div className="w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 rounded-full z-10 mb-4"></div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md border border-gray-200 dark:border-gray-700 text-center min-h-[80px] flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              
              {/* Steps */}
              <div className="space-y-4">
                {developmentSteps.map((step, index) => (
                  <div key={index} className="relative flex items-center gap-4 pl-12">
                    <div className="absolute left-2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 rounded-full"></div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Funding Stages */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {fundingStages.map((stage, index) => (
              <React.Fragment key={stage}>
                <div className="px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full border border-green-200 dark:border-green-800">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{stage}</span>
                </div>
                {index < fundingStages.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600 self-center" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Visual Direction Note - Simplified pathway graphic */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
          <p className="italic">
            Alt text: "Simplified programme development pathway from target validation to proof of concept."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programme;
