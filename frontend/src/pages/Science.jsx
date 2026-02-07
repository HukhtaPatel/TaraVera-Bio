import React from 'react';
import { Brain, Activity, Heart } from 'lucide-react';

const Science = () => {
  return (
    <section className="pt-28 pb-24 bg-white dark:bg-gray-900 min-h-screen" data-testid="science-page">
      {/* Background diagram placeholder */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Simplified tau pathology loop diagram */}
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" className="text-blue-500" />
          <circle cx="500" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" className="text-purple-500" />
          <circle cx="500" cy="500" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400" />
          {/* Arrows indicating cycle */}
          <path d="M500 200 L520 220 L480 220 Z" fill="currentColor" className="text-blue-500" />
          <path d="M800 500 L780 520 L780 480 Z" fill="currentColor" className="text-purple-500" />
          <path d="M500 800 L480 780 L520 780 Z" fill="currentColor" className="text-blue-500" />
          <path d="M200 500 L220 480 L220 520 Z" fill="currentColor" className="text-purple-500" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Science
          </h1>
        </div>

        {/* Section 1: Biology */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Biology — What drives disease progression
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-6">
              Pathological tau accumulation tracks with neurodegeneration and clinical decline.
            </p>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Biomarker — How we measure and translate biology
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-6">
              Tau is now a dynamic, measurable signal of disease.
            </p>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
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
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/50 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Patient Benefit — Why tau clearance matters
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-pink-600 dark:text-pink-400 font-medium mb-6">
              Reducing pathogenic tau addresses a root driver of neurodegeneration.
            </p>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Enhancing clearance of toxic tau species relieves cellular stress, preserves synaptic integrity, and disrupts the self-reinforcing cycle of neuronal damage. By intervening upstream — before irreversible loss accumulates — tau reduction has the potential to slow progression and meaningfully alter outcomes for patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
