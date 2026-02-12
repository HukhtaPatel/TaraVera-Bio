import React from 'react';
import { 
  ArrowRight, 
  Brain, 
  Microscope, 
  Users, 
  Heart, 
  FlaskConical,
  CheckCircle,
  Shield,
  Handshake,
  Globe,
  Mail,
  Newspaper,
  Calendar
} from 'lucide-react';

const Home = () => {
  // Feature cards data
  const featureCards = [
    {
      icon: Brain,
      title: 'Biology',
      description: 'Targeting the mechanisms that regulate tau turnover to restore homeostatic control.',
      link: '#science',
      color: 'blue'
    },
    {
      icon: Microscope,
      title: 'Biomarkers',
      description: 'Leveraging advances in tau detection for clear translation to the clinic.',
      link: '#science',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'About Us',
      description: 'Deep pharmaceutical experience with the agility of a precision biotech.',
      link: '#about',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/10 dark:bg-blue-500/20',
      icon: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:border-blue-500/50 dark:hover:border-blue-400/50',
      glow: 'group-hover:shadow-blue-500/20'
    },
    purple: {
      bg: 'bg-purple-500/10 dark:bg-purple-500/20',
      icon: 'text-purple-600 dark:text-purple-400',
      hover: 'hover:border-purple-500/50 dark:hover:border-purple-400/50',
      glow: 'group-hover:shadow-purple-500/20'
    },
    orange: {
      bg: 'bg-orange-500/10 dark:bg-orange-500/20',
      icon: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:border-orange-500/50 dark:hover:border-orange-400/50',
      glow: 'group-hover:shadow-orange-500/20'
    }
  };

  // Development pathway steps
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

  // Values data
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

  // Team members data
  const teamMembers = [
    {
      name: 'Radha Desai, PhD',
      title: 'Co-Founder and CEO/CSO',
      photo: 'https://customer-assets.emergentagent.com/job_taravera-landing/artifacts/hp7wtiw9_image.png',
      bio: 'Radha is a biotech entrepreneur and experienced drug discovery leader with over 20 years of academic and industry experience in neurodegeneration and mitochondrial biology.',
      highlights: 'Distinctive ability to bridge bold scientific innovation with disciplined execution.',
      background: 'PhD in Neuroscience from UCL. Career at Pfizer, most recently as drug hunter at MSD UK.',
      color: 'blue'
    },
    {
      name: 'Sian Lewis',
      title: 'Co-Founder and Head of Drug Discovery',
      photo: 'https://customer-assets.emergentagent.com/job_taravera-landing/artifacts/djz001mn_image.png',
      bio: 'Sian is a seasoned pharmacologist with over 25 years of experience leading early-stage drug discovery teams across major Pharma and biotech organisations.',
      highlights: 'Deep expertise in pharmacology, screening strategy, and external collaboration.',
      background: 'Experience at GSK, Eisai, Millennium and most recently at MSD UK.',
      color: 'purple'
    }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative" data-testid="home-page">
      
      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source 
              src="https://customer-assets.emergentagent.com/job_taravera-landing/artifacts/f9ga34hf_u4641913973_Seamless_looping_video_5_seconds._Abstract_neural_60a1068f-55bb-419a-a71c-5f79bb97f327_0.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90 dark:from-black/85 dark:via-black/75 dark:to-black/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
            Precision where
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              biology diverges.
            </span>
          </h1>

          <p className="font-body text-xl sm:text-2xl md:text-3xl text-gray-300 dark:text-gray-400 mb-12 font-light tracking-wide">
            Small-molecule medicines for neurodegeneration.
          </p>

          <a 
            href="#science"
            onClick={(e) => scrollToSection(e, '#science')}
            className="font-body group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-lg font-semibold transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:scale-105 cursor-pointer"
            data-testid="explore-science-btn"
          >
            Explore Our Science
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* ==================== MISSION SECTION ==================== */}
      <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <p className="font-body text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              By intervening earlier and more precisely in the biology that drives disease, we aim to change the trajectory of brain disorders — from inevitable to hopeful.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
            <p className="font-body text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Guided by robust scientific data and a clear line of sight to the clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE CARDS SECTION ==================== */}
      <section className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Approach
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Precision science meets disciplined execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => {
              const IconComponent = card.icon;
              const colors = colorClasses[card.color];
              
              return (
                <a 
                  key={index}
                  href={card.link}
                  onClick={(e) => scrollToSection(e, card.link)}
                  className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-500 ${colors.hover} hover:shadow-2xl ${colors.glow} hover:-translate-y-2 cursor-pointer`}
                  data-testid={`feature-card-${card.title.toLowerCase()}`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
                    <IconComponent className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  
                  <div className={`font-body flex items-center gap-2 ${colors.icon} text-sm font-medium`}>
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SCIENCE SECTION ==================== */}
      <section id="science" className="relative py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Science
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Understanding the biology that drives neurodegeneration.
            </p>
          </div>

          {/* Biology */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Biology — What drives disease progression
              </h3>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <p className="font-body text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                Pathological tau accumulation tracks with neurodegeneration and clinical decline.
              </p>
              <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed">
                Under healthy conditions, tau levels are tightly controlled. In disease, this balance breaks down: pathogenic tau species accumulate and propagate toxicity across neural circuits. TaraVera Bio targets the mechanisms that regulate tau turnover to restore homeostatic control.
              </p>
            </div>
          </div>

          {/* Biomarker */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Biomarker — Improved measures of Tau
              </h3>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <p className="font-body text-lg text-purple-600 dark:text-purple-400 font-medium mb-4">
                Tau is now a dynamic, measurable signal of disease.
              </p>
              <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Advances in tau detection allow sensitive tracking of tau pathology over time, enabling:
              </p>
              <ul className="font-body list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                <li>Direct assessment of disease progression</li>
                <li>Pharmacodynamic readouts of tau modulation</li>
                <li>Clear translation from preclinical models to the clinic</li>
              </ul>
            </div>
          </div>

          {/* Patient Benefit */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/50 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Patient Benefit — Why tau clearance matters
              </h3>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <p className="font-body text-lg text-pink-600 dark:text-pink-400 font-medium mb-4">
                Reducing pathogenic tau addresses a root driver of neurodegeneration.
              </p>
              <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed">
                Enhancing clearance of toxic tau species relieves cellular stress, preserves synaptic integrity, and disrupts the cycle of neuronal damage. By intervening upstream, tau reduction has the potential to meaningfully alter outcomes for patients.
              </p>
            </div>
          </div>

          {/* Lead Programme */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
                <Beaker className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Lead Programme
              </h3>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 mb-8">
              <h4 className="font-display text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Restoring Tau Homeostasis Through Enzymatic Control
              </h4>
              <p className="font-body text-gray-700 dark:text-gray-300 leading-relaxed">
                Our lead programme is centred on enzymatic inhibition to re-establish healthy tau homeostasis. The approach benefits from strong precedent in chemical, pharmacological, and clinical tractability — supporting a clear, biomarker-enabled path to the clinic.
              </p>
            </div>

            {/* Outcome Callout */}
            <div className="bg-blue-600 dark:bg-blue-700 rounded-xl p-6 mb-12">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-white flex-shrink-0" />
                <p className="font-display text-lg font-bold text-white">
                  Outcome: a first-in-class, disease-modifying programme with a clear line of sight to clinical impact.
                </p>
              </div>
            </div>
          </div>

          {/* Development Pathway */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10 text-center">
              Development Pathway
            </h3>
            
            {/* Desktop: Horizontal */}
            <div className="hidden md:block max-w-[1100px] mx-auto">
              {/* Steps Row */}
              <div className="flex items-stretch justify-between mb-8">
                {developmentSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex-1 min-h-[160px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <span className="font-body text-white text-[11px] lg:text-xs xl:text-sm font-medium text-center leading-tight whitespace-pre-line">
                        {step}
                      </span>
                    </div>
                    {index < developmentSteps.length - 1 && (
                      <div className="flex-shrink-0 w-4 lg:w-5 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-5 text-blue-300">
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Funding Stages Row - Same width as steps */}
              <div className="flex gap-4">
                {/* PreSeed - 2/8 = 25% */}
                <div className="flex-[2] bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700 rounded-2xl py-6 text-center shadow-md">
                  <span className="font-display text-gray-800 dark:text-gray-200 text-lg font-semibold">PreSeed</span>
                </div>
                {/* Seed - 4/8 = 50% */}
                <div className="flex-[4] bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-700 rounded-2xl py-6 text-center shadow-md">
                  <span className="font-display text-gray-800 dark:text-gray-200 text-lg font-semibold">Seed</span>
                </div>
                {/* Series A - 2/8 = 25% */}
                <div className="flex-[2] bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/30 dark:to-blue-900/30 border border-pink-200 dark:border-pink-700 rounded-2xl py-6 text-center shadow-md">
                  <span className="font-display text-gray-800 dark:text-gray-200 text-lg font-semibold">Series A</span>
                </div>
              </div>
            </div>

            {/* Mobile: Vertical */}
            <div className="md:hidden">
              <div className="flex flex-col items-center gap-3 mb-8">
                {developmentSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="w-full max-w-[280px] min-h-[70px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center p-4 shadow-lg">
                      <span className="font-body text-white text-sm font-medium text-center">{step.replace(/\n/g, ' ')}</span>
                    </div>
                    {index < developmentSteps.length - 1 && (
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-4 text-blue-300">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-col items-center gap-3">
                {['PreSeed', 'Seed', 'Series A'].map((stage) => (
                  <div key={stage} className="w-full max-w-[280px] bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700 rounded-xl py-4 text-center shadow-md">
                    <span className="font-display text-gray-800 dark:text-gray-200 font-semibold">{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Us
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building first-in-class therapeutics that target disease-modifying pathways in neurodegeneration.
            </p>
          </div>

          {/* Vision */}
          <div id="vision" className="mb-16 scroll-mt-24">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Vision
            </h3>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="font-body text-lg text-gray-700 dark:text-gray-300 italic">
                Innovating with integrity to improve the lives of people affected by neurodegenerative disease.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Values
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const bgColors = {
                  pink: 'bg-pink-100 dark:bg-pink-900/30 border-pink-200 dark:border-pink-800',
                  blue: 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
                  purple: 'bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800',
                  green: 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800'
                };
                const iconColors = {
                  pink: 'text-pink-600 dark:text-pink-400',
                  blue: 'text-blue-600 dark:text-blue-400',
                  purple: 'text-purple-600 dark:text-purple-400',
                  green: 'text-green-600 dark:text-green-400'
                };
                
                return (
                  <div key={index} className={`rounded-xl p-6 border ${bgColors[value.color]} transition-all duration-300 hover:shadow-lg`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${bgColors[value.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${iconColors[value.color]}`} />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{value.title}</h4>
                        <p className="font-body text-gray-600 dark:text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div id="team" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Management Team
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => {
                const gradientClasses = { blue: 'from-blue-600 to-purple-600', purple: 'from-purple-600 to-pink-600' };
                const accentClasses = { blue: 'text-blue-600 dark:text-blue-400', purple: 'text-purple-600 dark:text-purple-400' };

                return (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className={`bg-gradient-to-r ${gradientClasses[member.color]} p-6 text-white`}>
                      <div className="flex items-center gap-4">
                        <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full object-cover border-2 border-white/30"/>
                        <div>
                          <h4 className="font-display text-xl font-bold">{member.name}</h4>
                          <p className="font-body text-white/90">{member.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <p className="font-body text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
                      <p className={`font-body ${accentClasses[member.color]} font-medium text-sm`}>{member.highlights}</p>
                      <p className="font-body text-gray-500 dark:text-gray-500 text-xs">{member.background}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="scroll-mt-24">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Contact Us
              </h3>
              <p className="font-body text-gray-600 dark:text-gray-400 mb-8">
                Interested in learning more or exploring partnership opportunities?
              </p>
              <a 
                href="mailto:info@taravera.bio"
                className="font-body inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="font-body mt-4 text-gray-500 text-sm">info@taravera.bio</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NEWS SECTION ==================== */}
      <section id="news" className="relative py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              News
            </h2>
          </div>

          <article className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="font-body flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">January 2026</span>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              TaraVera Bio formation
            </h3>
            
            <div className="font-body space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Neurodegenerative disease has too often been treated as an inevitable consequence of ageing, rather than a biological problem that can be understood — and changed.
              </p>
              <p>
                TaraVera Bio was founded on the belief that better outcomes will come not from louder promises, but from deeper science. We are building TaraVera Bio to focus on the mechanisms that truly drive disease progression, and to turn that understanding into medicines that are both effective and reachable.
              </p>
            </div>
          </article>
        </div>
      </section>

    </div>
  );
};

export default Home;
