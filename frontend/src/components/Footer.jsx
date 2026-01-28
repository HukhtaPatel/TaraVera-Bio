import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src={isDarkMode 
                ? "https://customer-assets.emergentagent.com/job_brain-restore/artifacts/zd5gepdr_image.png"
                : "https://customer-assets.emergentagent.com/job_brain-restore/artifacts/zd5gepdr_image.png"
              }
              alt="TaraVera Bio Logo" 
              className="h-10 w-auto mb-4 transition-opacity duration-300"
            />
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed mb-6">
              Transforming Alzheimer's treatment through precision neurobiology. 
              Targeting the USP11-Tau axis to restore protein clearance and address 
              female-specific disease vulnerability.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#science" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  Our Science
                </a>
              </li>
              <li>
                <a href="#platform" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  Drug Discovery
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400 dark:text-gray-500">
              <li>
                <a href="mailto:partners@taraverabio.com" className="hover:text-white transition-colors duration-200">
                  partners@taraverabio.com
                </a>
              </li>
              <li>
                <a href="mailto:investors@taraverabio.com" className="hover:text-white transition-colors duration-200">
                  investors@taraverabio.com
                </a>
              </li>
              <li className="pt-4">
                <a href="#" className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg text-white font-medium transition-colors duration-300">
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-gray-600 text-sm">
              © 2025 TaraVera Bio. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 dark:text-gray-600 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-600 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-600 hover:text-white transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;