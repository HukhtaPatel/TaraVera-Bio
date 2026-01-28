import React from 'react';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Radha Desai',
      title: 'Chief Scientific Officer',
      image: 'https://images.unsplash.com/photo-1707944745891-922795a805dd',
      credentials: [
        'Elite academic training (TIFR, Oxford, UCL, Crick Institute)',
        'Led discovery programs from target ID to IND',
        'Full-stack neuroscientist with translational expertise',
        'Previously: MSD, UCL, Pfizer'
      ],
      color: 'blue'
    },
    {
      name: 'Sian Lewis',
      title: 'Head of Drug Discovery',
      image: 'https://images.unsplash.com/photo-1707944745891-922795a805dd',
      credentials: [
        '25+ years drug discovery leadership (15+ in CNS)',
        'Pioneered novel screening modalities (DEL/Covalent fragment)',
        'Led multiple high-impact pharma partnerships',
        'Previously: MSD, GSK, Eisai, Takeda'
      ],
      color: 'purple'
    }
  ];

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
            Pharma-Proven Expertise
            <br />
            <span className="text-orange-600 dark:text-orange-400">25+ Years at MSD, GSK & Takeda</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our leadership team has successfully moved CNS programs from discovery to IND at leading pharmaceutical companies
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
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{member.name}</h3>
                  <p className={`text-lg font-medium text-${member.color}-600 dark:text-${member.color}-400`}>{member.title}</p>
                </div>
              </div>
              <div className="space-y-3">
                {member.credentials.map((credential, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400">{credential}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 mx-auto bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Proven Track Record</h4>
            <p className="text-gray-600 dark:text-gray-400">Multiple programs advanced from discovery to clinical phases at Big Pharma</p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 mx-auto bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Industry Connections</h4>
            <p className="text-gray-600 dark:text-gray-400">Established relationships with key decision-makers at major pharmaceutical companies</p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 mx-auto bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Scientific Excellence</h4>
            <p className="text-gray-600 dark:text-gray-400">Elite academic credentials combined with real-world pharma execution</p>
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-10 border border-blue-200 dark:border-blue-800">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Capital-Efficient Execution Model</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Strategic Approach</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">CRO-led execution to minimize overhead and maximize efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Broad IP generation (composition of matter patents) on USP11 targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Data-gated milestones to de-risk investment at each stage</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Partnership Strategy</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Early partnership to leverage Big Pharma infrastructure and expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Active engagement with pharma companies investing in neurodegeneration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Sector-specific VC relationships for optimal funding strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;