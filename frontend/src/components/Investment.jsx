import React from 'react';
import { TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

const Investment = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Investment Opportunity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Market Opportunity & Strategy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Significant opportunity in an underserved $10-15B market with a capital-efficient approach
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Market Size</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Global market for tau-reducing therapeutics projected to exceed <span className="font-bold text-green-600 dark:text-green-400">$10–15B annually</span>.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span>Current programs dominated by biologics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span>Limited brain exposure & scalability issues</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span>High unmet need for oral small molecules</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Competitive Positioning</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Targeting protein homeostasis through enzymatic modulation with orally deliverable small molecules.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <span>No clinically advanced molecules on lead target</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <span>Early mover advantage</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <span>Aligned with recent partnering trends</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-10 border border-purple-200 dark:border-purple-800 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Business Model & Strategy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Virtual Biotech Model
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">CRO-driven execution for capital efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Lean operations with specialist partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Maximized R&D efficiency</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                Partnership Strategy
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Early partnership with pharma interested in neurodegeneration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Leverage development infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Asset-centric deals to retain upside</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Funding Details */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Pre-Seed Funding</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">$500K</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">Phase 1 (6-9 months)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Target validation, assay readiness, early leads</div>
            </div>
            <div className="text-center p-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">$2M</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">Phase 2 (18-24 months total)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Screening campaign & IP generation</div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Seeking seed investors who complement expertise, expand scientific/clinical networks, and help shape & scale the company's vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;