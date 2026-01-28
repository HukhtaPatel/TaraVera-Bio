import React from 'react';
import { Dna, Users, Target, ShieldCheck } from 'lucide-react';

const ScientificMoat = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            Our Scientific Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The USP11-Tau Axis:
            <br />
            <span className="text-blue-600">A Precision Target</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            While traditional approaches focus on blocking plaques, we restore the brain's natural protein clearance system
          </p>
        </div>

        {/* The Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Problem */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              USP11, a deubiquitinase enzyme, removes the "clearance tag" (ubiquitin) from Tau protein. Without this tag, toxic Tau accumulates and misfolds into neurofibrillary tangles, driving synaptic loss and neurodegeneration.
            </p>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-sm font-medium text-red-900">
                Result: Uncontrolled Tau aggregation and progressive cognitive decline
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Dna className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              TaraVera's USP11 inhibitors block the deubiquitination process, keeping Tau properly tagged for proteasomal degradation. This restores the brain's natural clearance mechanism.
            </p>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-medium text-green-900">
                Result: Restored protein clearance, reduced pathology, and preserved cognition
              </p>
            </div>
          </div>
        </div>

        {/* Female-Specific Vulnerability */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-10 shadow-lg border border-pink-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Women Are More Vulnerable
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  USP11 is encoded on the X chromosome and <span className="font-semibold text-pink-600">escapes X-inactivation</span>, resulting in higher enzyme levels in females. This leads to increased Tau burden and explains the female predominance in Alzheimer's disease.
                </p>
                <div className="bg-white rounded-lg p-6 border border-pink-200">
                  <p className="text-gray-800 font-medium mb-2">🔬 The Market Differentiator:</p>
                  <p className="text-gray-600">
                    TaraVera is the <span className="font-semibold">first company</span> to specifically target this sex-specific vulnerability, addressing a massive underserved patient population with precision medicine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Precision Targeting</h4>
            <p className="text-gray-600">Mechanism selected based on human genetic evidence and disease-relevant biomarkers</p>
          </div>

          <div className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Dna className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Proteasomal Clearance</h4>
            <p className="text-gray-600">Restores natural protein quality control rather than blocking aggregation</p>
          </div>

          <div className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Female-First Design</h4>
            <p className="text-gray-600">Addresses the X-linked escape mechanism driving female vulnerability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificMoat;