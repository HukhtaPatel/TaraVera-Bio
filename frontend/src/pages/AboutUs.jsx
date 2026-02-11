import React from 'react';
import { Users, Heart, Shield, Handshake, Globe, Mail, Linkedin } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      title: 'Patients First',
      description: 'Working on areas of highest unmet need with a focus on disease-modifying impact.',
      icon: Heart,
      color: 'pink'
    },
    {
      title: 'Integrity-Driven Science',
      description: 'Holding ourselves to the highest standards of rigour, transparency, and responsibility.',
      icon: Shield,
      color: 'blue'
    },
    {
      title: 'Collaborative by Design',
      description: 'Teamwork fuelled by collaboration, respect, and diverse perspectives.',
      icon: Handshake,
      color: 'purple'
    },
    {
      title: 'Access-Minded Innovation',
      description: 'Developing therapies that are designed for patients and built for real-world access.',
      icon: Globe,
      color: 'green'
    }
  ];

  const teamMembers = [
    {
      name: 'Radha Desai, PhD',
      title: 'Co-Founder and CEO/CSO',
      photo: 'https://customer-assets.emergentagent.com/job_taravera-landing/artifacts/hp7wtiw9_image.png',
      bio: 'Radha is a biotech entrepreneur and experienced drug discovery leader with over 20 years of academic and industry experience in neurodegeneration and mitochondrial biology. She has led multidisciplinary research programmes, translating complex biological insights into viable therapeutic candidates. Her scientific work has been published in leading journals including Science Advances and Brain.',
      highlights: 'Radha brings a distinctive ability to bridge bold scientific innovation with disciplined execution, building capital-efficient programmes with a clear focus on patient impact.',
      background: 'PhD in Neuroscience from UCL, postdoctoral training from NIMR (Mill Hill) and Royal Veterinary College. Started her Pharma career at Pfizer, most recently as drug hunter at MSD UK.',
      personal: 'Passionate about advocating for women in STEM. Outside of work, enjoys experimenting in the kitchen and spending time with her daughter.',
      email: 'Radha@TaraVera.bio',
      color: 'blue'
    },
    {
      name: 'Sian Lewis',
      title: 'Co-Founder and Head of Drug Discovery',
      photo: 'https://customer-assets.emergentagent.com/job_taravera-landing/artifacts/djz001mn_image.png',
      bio: 'Sian is a seasoned pharmacologist with over 25 years of experience leading early-stage drug discovery teams across major Pharma and biotech organisations. She is recognised for building inclusive, high-performing teams and for guiding complex programmes through clear scientific governance and milestone-driven decision making.',
      highlights: 'Sian brings deep expertise in pharmacology, screening strategy, and external collaboration, with a leadership style grounded in mentorship, clarity, and delivery.',
      background: 'Built her experience in drug discovery at GSK, Eisai, Millennium and most recently as head of cellular pharmacology at MSD UK.',
      personal: 'At TaraVera Bio, Sian leads drug discovery, creating a collaborative culture that translates strong biology into high-quality drug candidates.',
      email: 'Sian@TaraVera.bio',
      color: 'purple'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-24 bg-white dark:bg-gray-900 min-h-screen" data-testid="about-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Us
          </h1>
        </div>

        {/* Sub-navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('vision-and-values')}
            className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
            data-testid="nav-vision-values"
          >
            Vision and Values
          </button>
          <button
            onClick={() => scrollToSection('management-team')}
            className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
            data-testid="nav-management-team"
          >
            Management Team
          </button>
        </div>

        {/* Intro Copy */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 md:p-10 border border-blue-200 dark:border-blue-800">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                TaraVera Bio is building first-in-class therapeutics that target disease-modifying pathways in neurodegeneration.
              </p>
              <p>
                We focus on compelling human biology and translate it into safe, differentiated small-molecule medicines, guided by robust scientific data and a clear line of sight to the clinic.
              </p>
              <p>
                Our team brings deep pharmaceutical experience across discovery, development, and partnering, combining the rigour of big pharma with the agility of a precision biotech.
              </p>
            </div>
          </div>
        </div>

        {/* Vision and Values Section */}
        <div id="vision-and-values" className="mb-24 scroll-mt-28">
          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Vision
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Innovating with integrity to improve the lives of people affected by neurodegenerative disease.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const colorClasses = {
                  pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800',
                  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
                  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
                  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800'
                };
                const iconBgClasses = {
                  pink: 'bg-pink-100 dark:bg-pink-900/50',
                  blue: 'bg-blue-100 dark:bg-blue-900/50',
                  purple: 'bg-purple-100 dark:bg-purple-900/50',
                  green: 'bg-green-100 dark:bg-green-900/50'
                };
                const iconColorClasses = {
                  pink: 'text-pink-600 dark:text-pink-400',
                  blue: 'text-blue-600 dark:text-blue-400',
                  purple: 'text-purple-600 dark:text-purple-400',
                  green: 'text-green-600 dark:text-green-400'
                };
                
                return (
                  <div 
                    key={index} 
                    className={`rounded-xl p-6 border ${colorClasses[value.color]} transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${iconBgClasses[value.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${iconColorClasses[value.color]}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Management Team Section */}
        <div id="management-team" className="scroll-mt-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Management Team
            </h2>
          </div>

          {/* Team Member Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              const gradientClasses = {
                blue: 'from-blue-600 to-purple-600',
                purple: 'from-purple-600 to-pink-600'
              };
              const borderClasses = {
                blue: 'hover:border-blue-400 dark:hover:border-blue-500',
                purple: 'hover:border-purple-400 dark:hover:border-purple-500'
              };
              const accentClasses = {
                blue: 'text-blue-600 dark:text-blue-400',
                purple: 'text-purple-600 dark:text-purple-400'
              };

              return (
                <div 
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 ${borderClasses[member.color]} transition-all duration-300 hover:shadow-xl`}
                  data-testid={`team-member-${index}`}
                >
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${gradientClasses[member.color]} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      {member.photo ? (
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-white/30"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-white/90 font-medium">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <p className={`${accentClasses[member.color]} font-medium leading-relaxed`}>
                      {member.highlights}
                    </p>

                    <div className="pt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="font-semibold">Background:</span> {member.background}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-500 italic leading-relaxed">
                        {member.personal}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="pt-4 flex items-center gap-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className={`inline-flex items-center gap-2 ${accentClasses[member.color]} hover:underline font-medium text-sm`}
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
