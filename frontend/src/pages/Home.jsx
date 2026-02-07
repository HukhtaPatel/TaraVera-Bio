import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900" data-testid="home-page">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30"></div>
        {/* Visual placeholder for brain cells and aged human faces */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
                Precision where biology diverges.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-6 font-medium">
              Small-molecule medicines for neurodegeneration.
            </p>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <p className="leading-relaxed">
                TaraVera Bio is building first-in-class therapeutics that target disease-modifying pathways in neurodegeneration.
              </p>
              <p className="leading-relaxed">
                We focus on compelling human biology and translate it into safe, differentiated small-molecule medicines, guided by robust scientific data and a clear line of sight to the clinic.
              </p>
              <p className="leading-relaxed">
                Our team brings deep pharmaceutical experience across discovery, development, and partnering, combining the rigour of big pharma with the agility of a precision biotech.
              </p>
              <p className="leading-relaxed">
                By intervening earlier and more precisely in the biology that drives disease, we aim to change the trajectory of brain disorders — from inevitable to hopeful.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link to="/programme">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-6 text-base rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  data-testid="learn-more-btn"
                >
                  Our Programme
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 dark:text-gray-300 px-8 py-6 text-base rounded-lg transition-all duration-300 hover:shadow-lg"
                  data-testid="about-us-btn"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop"
                alt="Illustration combining brain cells and ageing human faces"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
