import React from 'react';
import { Brain, Activity, Heart, Target, CheckCircle, Beaker } from 'lucide-react';

const Science = () => {
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

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen" data-testid="science-page">
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="https://customer-assets.emergentagent.com/job_taravera-landing/artifacts/84j4ak63_u4641913973_Minimal_scientific_infographic_of_a_protein_amino_563f1493-d7df-494f-9730-deb499f3244a_0.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80 dark:from-black/75 dark:via-black/65 dark:to-black/85"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Science
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            Understanding the biology that drives neurodegeneration
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Section 1: Biology */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Biology — What drives disease progression
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="font-body text-lg text-blue-600 dark:text-blue-400 font-medium mb-6">
              Pathological tau accumulation tracks with neurodegeneration and clinical decline.
            </p>
            <div className="font-body space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Under healthy conditions, tau levels are tightly controlled through post-translational modifications that regulate stability, localization, and clearance. In disease, this balance breaks down: pathogenic tau species accumulate, evade clearance pathways, and propagate toxicity across vulnerable neural circuits.
              </p>
              <p>
                TaraVera Bio targets the mechanisms that regulate tau turnover, with the aim of restoring homeostatic control and selectively clearing disease-relevant tau species.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Biomarker */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Biomarker — Improved measures of Tau
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="font-body text-lg text-purple-600 dark:text-purple-400 font-medium mb-6">
              Tau is now a dynamic, measurable signal of disease.
            </p>
            <div className="font-body space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Advances in tau detection — including fluid biomarkers and imaging technologies — allow sensitive tracking of tau pathology over time. These tools link molecular mechanism to patient biology, enabling:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Direct assessment of disease progression</li>
                <li>Pharmacodynamic readouts of tau modulation</li>
                <li>Clear translation from preclinical models to the clinic</li>
              </ul>
              <p className="mt-4">
                This biomarker maturity creates a rare opportunity to align mechanism, measurement, and clinical decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Patient Benefit */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/50 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Patient Benefit — Why tau clearance matters
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="font-body text-lg text-pink-600 dark:text-pink-400 font-medium mb-6">
              Reducing pathogenic tau addresses a root driver of neurodegeneration.
            </p>
            <div className="font-body space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Enhancing clearance of toxic tau species relieves cellular stress, preserves synaptic integrity, and disrupts the self-reinforcing cycle of neuronal damage. By intervening upstream — before irreversible loss accumulates — tau reduction has the potential to slow progression and meaningfully alter outcomes for patients.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-16"></div>

        {/* Programme Section (merged from Programme page) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
              <Beaker className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Lead Programme
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 md:p-10 border border-blue-200 dark:border-blue-800 mb-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Restoring Tau Homeostasis Through Enzymatic Control
            </h3>
            
            <div className="font-body space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
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
              <p className="font-display text-lg md:text-xl font-bold text-white">
                Outcome: a first-in-class, disease-modifying programme with a clear line of sight to clinical impact.
              </p>
            </div>
          </div>
        </div>

        {/* Development Pathway */}
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
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
              <div className="flex items-stretch justify-center gap-2 lg:gap-3 mb-10">
                {developmentSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    {/* Step Box */}
                    <div 
                      className="flex-shrink-0 w-[90px] lg:w-[110px] xl:w-[130px] min-h-[160px] lg:min-h-[180px] bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl flex items-center justify-center p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="font-body text-white text-[11px] lg:text-xs xl:text-sm font-medium text-center leading-tight whitespace-pre-line">
                        {step}
                      </span>
                    </div>
                    
                    {/* Arrow (not after last item) */}
                    {index < developmentSteps.length - 1 && (
                      <div className="flex-shrink-0 w-4 lg:w-5 flex items-center">
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className="w-full h-5 text-blue-300 dark:text-blue-400"
                        >
                          <path 
                            d="M9 6l6 6-6 6" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Funding Stages Row - Aligned with steps */}
              <div className="flex justify-center">
                <div className="flex gap-4 lg:gap-6">
                  {/* PreSeed - spans steps 1-2 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700 rounded-2xl flex items-center justify-center py-6 lg:py-8 w-[180px] lg:w-[230px] xl:w-[280px] shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="font-display text-gray-800 dark:text-gray-200 text-base lg:text-lg xl:text-xl font-semibold">
                      PreSeed
                    </span>
                  </div>
                  {/* Seed - spans steps 3-6 */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-700 rounded-2xl flex items-center justify-center py-6 lg:py-8 w-[360px] lg:w-[460px] xl:w-[560px] shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="font-display text-gray-800 dark:text-gray-200 text-base lg:text-lg xl:text-xl font-semibold">
                      Seed
                    </span>
                  </div>
                  {/* Series A - spans steps 7-8 */}
                  <div className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/30 dark:to-blue-900/30 border border-pink-200 dark:border-pink-700 rounded-2xl flex items-center justify-center py-6 lg:py-8 w-[180px] lg:w-[230px] xl:w-[280px] shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="font-display text-gray-800 dark:text-gray-200 text-base lg:text-lg xl:text-xl font-semibold">
                      Series A
                    </span>
                  </div>
                </div>
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
                      className="w-full max-w-[280px] min-h-[70px] bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center p-4 shadow-lg"
                    >
                      <span className="font-body text-white text-sm font-medium text-center leading-tight">
                        {step.replace(/\n/g, ' ')}
                      </span>
                    </div>
                    
                    {/* Arrow (not after last item) */}
                    {index < developmentSteps.length - 1 && (
                      <div className="h-4">
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className="w-5 h-full text-blue-300 dark:text-blue-400"
                        >
                          <path 
                            d="M6 9l6 6 6-6" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
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
                <div className="w-full max-w-[280px] bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700 rounded-xl flex items-center justify-center px-6 py-4 shadow-md">
                  <span className="font-display text-gray-800 dark:text-gray-200 text-base font-semibold">
                    PreSeed
                  </span>
                </div>
                <div className="w-full max-w-[280px] bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-700 rounded-xl flex items-center justify-center px-6 py-4 shadow-md">
                  <span className="font-display text-gray-800 dark:text-gray-200 text-base font-semibold">
                    Seed
                  </span>
                </div>
                <div className="w-full max-w-[280px] bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/30 dark:to-blue-900/30 border border-pink-200 dark:border-pink-700 rounded-xl flex items-center justify-center px-6 py-4 shadow-md">
                  <span className="font-display text-gray-800 dark:text-gray-200 text-base font-semibold">
                    Series A
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
