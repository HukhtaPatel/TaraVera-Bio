import React from 'react';
import { Users, Award, Network } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 font-medium mb-4">
            <Users className="w-4 h-4" />
            Leadership Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Proven Drug Discovery Execution
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deep scientific expertise combined with proven execution advancing CNS programs from target identification through IND-enabling stages
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1707944746042-e4c81c191812" 
            alt="Research Team"
            className="w-full h-96 object-cover dark:opacity-80"
          />
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-600 dark:to-blue-700 flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Radha Desai</h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">CEO / CSO / Co-founder</p>
                <a href="mailto:Radha@TaraVera.bio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Radha@TaraVera.bio
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-600 dark:to-purple-700 flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Sian Lewis</h3>
                <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">Head of Drug Discovery / Co-founder</p>
                <a href="mailto:Sian@TaraVera.bio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  Sian@TaraVera.bio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Strengths */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 mx-auto bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Scientific Expertise</h4>
            <p className="text-gray-600 dark:text-gray-400">Deep expertise in CNS drug discovery from major pharmaceutical organizations</p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 mx-auto bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Proven Execution</h4>
            <p className="text-gray-600 dark:text-gray-400">Track record advancing programs from target ID through IND-enabling stages</p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 mx-auto bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-4">
              <Network className="w-7 h-7 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Strong Networks</h4>
            <p className="text-gray-600 dark:text-gray-400">External advisors in chemistry, biology, and translational science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;