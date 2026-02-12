import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_taravera-bio/artifacts/g11plfz5_High%20Resolution%20Logo.png"
              alt="TaraVera Bio Logo" 
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-body text-gray-400 dark:text-gray-500 leading-relaxed mb-6">
              Precision where biology diverges. Developing small-molecule medicines for neurodegeneration with a clear line of sight to the clinic.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@taravera.bio" 
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="font-body space-y-3">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#science" 
                  onClick={(e) => scrollToSection(e, '#science')}
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Science
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#news" 
                  onClick={(e) => scrollToSection(e, '#news')}
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">About Us</h4>
            <ul className="font-body space-y-3 text-gray-400 dark:text-gray-500">
              <li>
                <a 
                  href="#vision" 
                  onClick={(e) => scrollToSection(e, '#vision')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Vision and Values
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => scrollToSection(e, '#team')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Management Team
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-gray-500 dark:text-gray-600 text-sm">
              © 2026 TaraVera Bio. All rights reserved.
            </p>
            <div className="font-body flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 dark:text-gray-600 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-600 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
