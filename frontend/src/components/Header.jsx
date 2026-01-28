import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Science', href: '#science' },
    { name: 'Platform', href: '#platform' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_brain-restore/artifacts/jjnhb7md_image.png" 
              alt="TaraVera Bio Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 transition-all duration-300 hover:scale-105"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white mt-4"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;