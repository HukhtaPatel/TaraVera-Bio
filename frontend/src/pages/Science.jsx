import React from 'react';
import { Brain, Activity, Heart } from 'lucide-react';

const Science = () => {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Science
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
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
