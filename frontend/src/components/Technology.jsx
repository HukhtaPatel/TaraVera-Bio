import React from 'react';
import { Beaker, Search, Layers, Microscope } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const Technology = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-medium mb-4">
            <Layers className="w-4 h-4" />
            Technology Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Diversified Discovery Strategy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            CRO-driven model leveraging best-in-class partners for capital-efficient drug discovery
          </p>
        </div>

        {/* Discovery Approaches */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Fragment-Based Screening</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">High-quality starting points</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">DNA-Encoded Libraries</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Billions of compounds</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-pink-100 dark:bg-pink-900/50 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Virtual Screening</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered exploration</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-4">
              <Flask className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Structure-Guided Design</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Rational optimization</p>
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-10 mb-16 border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Platform Advantages</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Multiple Shots on Goal</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Diversified discovery strategy enables parallel exploration of chemical space, increasing probability of success and generating broad composition of matter IP.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Reusable Assets</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Platform approach enables reuse of assays, models, and biomarkers across programs, maximizing efficiency and reducing development timelines.
              </p>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Development Milestones</h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="phase1" className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                Phase 1: Initial Efforts (6-9 months)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 pt-4 pb-6">
                <ul className="space-y-2">
                  <li>• Target validation and biological characterization</li>
                  <li>• Assay development and readiness</li>
                  <li>• Generating early chemical leads</li>
                  <li>• Initial IP strategy development</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase2" className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400">
                Phase 2: Screening Campaign (18-24 months total)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 pt-4 pb-6">
                <ul className="space-y-2">
                  <li>• Launch diversified screening campaigns</li>
                  <li>• Generate selective, brain-penetrant lead compounds</li>
                  <li>• Secure broad composition of matter IP on target</li>
                  <li>• Hit-to-lead optimization</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase3" className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400">
                Phase 3: Proof of Concept (~4 years)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 pt-4 pb-6">
                <ul className="space-y-2">
                  <li>• Demonstrate tau reduction linked to target engagement</li>
                  <li>• Favorable pharmacokinetics and brain exposure</li>
                  <li>• Functional rescue in relevant tau models</li>
                  <li>• Preclinical proof of concept</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Technology;