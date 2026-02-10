import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

const Programme = () => {
  const developmentSteps = [
    'Target\nValidation\n(Genetic)',
    'Assay\nreadiness /\npilot screen',
    'Lead\ngeneration',
    'Lead\nOptimisation',
    'In-vivo proof\nof\nmechanism',
    'Therapeutic\nWindow\nassessment',
    'Safety /\nTolerability in\nhuman',
    'POC in\nHuman',
  ];

  const fundingStages = [
    { label: 'PreSeed', span: 2 },
    { label: 'Seed', span: 4 },
    { label: 'Series A', span: 2 },
  ];

  return (
    <section className="pt-28 pb-24 bg-white dark:bg-gray-900 min-h-screen" data-testid="programme-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Programme
          </h1>
        </div>

        {/* Lead Programme Section */}
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Development Pathway
          </h2>
          
          {/* Development Pathway Graphic */}
          <div 
            className="w-full"
            role="img"
            aria-label="Programme development pathway from target validation to proof of concept, with funding stages PreSeed, Seed, and Series A."
          >
            {/* Desktop/Tablet: Horizontal Layout */}
            <div className="hidden md:block">
              {/* Steps Row */}
              <div className="flex items-center justify-center gap-1 lg:gap-2 mb-8">
                {developmentSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    {/* Step Box */}
                    <div 
                      className="flex-shrink-0 w-[100px] lg:w-[120px] h-[140px] lg:h-[160px] bg-[#1a5f7a] dark:bg-[#1a5f7a] rounded-xl flex items-center justify-center p-3"
                    >
                      <span className="text-white text-xs lg:text-sm font-semibold text-center leading-tight whitespace-pre-line italic">
                        {step}
                      </span>
                    </div>
                    
                    {/* Arrow (not after last item) */}
                    {index < developmentSteps.length - 1 && (
                      <div className="flex-shrink-0 w-4 lg:w-6">
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className="w-full h-6 text-gray-300 dark:text-gray-500"
                        >
                          <path 
                            d="M9 6l6 6-6 6" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Funding Stages Row */}
              <div className="flex justify-center gap-4 lg:gap-6 mt-12">
                {fundingStages.map((stage, index) => (
                  <div 
                    key={index}
                    className="bg-[#1a5f7a] dark:bg-[#1a5f7a] rounded-xl flex items-center justify-center px-8 lg:px-12 py-6 lg:py-8"
                    style={{ 
                      width: `${(stage.span / 8) * 100}%`,
                      maxWidth: stage.span === 2 ? '200px' : stage.span === 4 ? '400px' : '200px',
                      minWidth: stage.span === 2 ? '140px' : stage.span === 4 ? '280px' : '140px'
                    }}
                  >
                    <span className="text-white text-lg lg:text-xl font-semibold italic">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical Layout */}
            <div className="md:hidden">
              {/* Steps Column */}
              <div className="flex flex-col items-center gap-3 mb-8">
                {developmentSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    {/* Step Box */}
                    <div 
                      className="w-full max-w-[280px] h-[80px] bg-[#1a5f7a] dark:bg-[#1a5f7a] rounded-xl flex items-center justify-center p-4"
                    >
                      <span className="text-white text-sm font-semibold text-center leading-tight italic">
                        {step.replace(/\n/g, ' ')}
                      </span>
                    </div>
                    
                    {/* Arrow (not after last item) */}
                    {index < developmentSteps.length - 1 && (
                      <div className="h-4">
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className="w-6 h-full text-gray-300 dark:text-gray-500"
                        >
                          <path 
                            d="M6 9l6 6 6-6" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Funding Stages - Vertical on Mobile */}
              <div className="flex flex-col items-center gap-3 mt-8">
                {fundingStages.map((stage, index) => (
                  <div 
                    key={index}
                    className="w-full max-w-[280px] bg-[#1a5f7a] dark:bg-[#1a5f7a] rounded-xl flex items-center justify-center px-6 py-5"
                  >
                    <span className="text-white text-lg font-semibold italic">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programme;
