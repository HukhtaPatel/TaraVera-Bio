import React from 'react';
import { Workflow, Beaker, Database, Brain } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const DrugDiscovery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-4">
            <Workflow className="w-4 h-4" />
            Our Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Drug Discovery Engine:
            <br />
            <span className="text-purple-600">Multi-Pathway Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge screening technologies to generate differentiated First-in-Class molecules
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1707944745860-4615eb585a41" 
            alt="Drug Discovery Laboratory"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Inhibitor Strategy */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                <Beaker className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">USP11 Inhibitors</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Small molecules that block USP11's catalytic activity, preventing Tau deubiquitination and maintaining proteasomal clearance tags.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Allosteric pocket targeting</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>High selectivity for USP11</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>CNS-penetrant design</span>
              </div>
            </div>
          </div>

          {/* Degrader Strategy */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Targeted Degraders</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              PROTAC and molecular glue strategies to eliminate USP11 protein entirely, offering an alternative modality with potential for enhanced efficacy.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>E3 ligase recruitment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Sustained target knockdown</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Sub-stoichiometric dosing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-2xl p-10 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Screening Technologies</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fragment-Based Screening</h4>
              <p className="text-sm text-gray-600">~2,000 CNS-compliant fragments for allosteric pockets</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">DNA-Encoded Libraries</h4>
              <p className="text-sm text-gray-600">Billions of compounds for non-catalytic binders</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">AI-Powered Virtual Screening</h4>
              <p className="text-sm text-gray-600">AlphaFold models for ultra-large chemical space</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Cellular Validation</h4>
              <p className="text-sm text-gray-600">iPSC-derived neurons for disease-relevant testing</p>
            </div>
          </div>
        </div>

        {/* Timeline Accordion */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Discovery Timeline</h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="tier1" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                Tier 1: Diversity & Discovery (4-6 months)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4 pb-6">
                <ul className="space-y-2">
                  <li>• Fragment-Based Screening with CNS-compliant fragments</li>
                  <li>• DNA-Encoded Library screening (billions of compounds)</li>
                  <li>• Traditional HTS with Ub-AMC assay</li>
                  <li>• AI-powered Virtual Screening</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tier2" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-purple-600">
                Tier 2: Validation & Triage (7-12 months)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4 pb-6">
                <ul className="space-y-2">
                  <li>• Crystallography for structure confirmation</li>
                  <li>• SPR binding affinity measurements</li>
                  <li>• Thiol reactivity and aggregation gates</li>
                  <li>• Orthogonal FP Ub-FAM assay validation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tier3" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-pink-600">
                Tier 3: Precision & Selectivity (10-15 months)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4 pb-6">
                <ul className="space-y-2">
                  <li>• ABPP-MS DUBome mapping for selectivity profiling</li>
                  <li>• K48-linkage assay for mechanism confirmation</li>
                  <li>• Lead optimization for CNS penetration</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tier4" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-orange-600">
                Tier 4: Cellular & Disease-Relevant (16-18 months)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4 pb-6">
                <ul className="space-y-2">
                  <li>• Cellular target engagement (CETSA, MS-CETSA)</li>
                  <li>• Tau reduction in iPSC-derived neurons</li>
                  <li>• Quantitative proteomics and Tau PTM mapping</li>
                  <li>• Functional rescue in disease models</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DrugDiscovery;