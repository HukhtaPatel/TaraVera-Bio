import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_brain-restore/artifacts/zd5gepdr_image.png"
              alt="TaraVera Bio Logo" 
              className="h-10 w-auto mb-4"
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
                <Link to="/" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/science" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">About Us</h4>
            <ul className="font-body space-y-3 text-gray-400 dark:text-gray-500">
              <li>
                <Link to="/about#vision-and-values" className="hover:text-white transition-colors duration-200">
                  Vision and Values
                </Link>
              </li>
              <li>
                <Link to="/about#management-team" className="hover:text-white transition-colors duration-200">
                  Management Team
                </Link>
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
