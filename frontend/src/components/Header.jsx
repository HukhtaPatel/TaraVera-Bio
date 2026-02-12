import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'science', 'about', 'news'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Science', href: '#science' },
    { name: 'About Us', href: '#about' },
    { name: 'News', href: '#news' }
  ];

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
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (href) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4" data-testid="header">
      {/* Desktop Pill Navigation */}
      <nav className="hidden md:flex max-w-4xl mx-auto">
        <div className={`flex items-center justify-between w-full px-2 py-2 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/50 dark:border-gray-700/50' 
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}>
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center pl-3" 
            data-testid="logo-link"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_taravera-bio/artifacts/g11plfz5_High%20Resolution%20Logo.png"
              alt="TaraVera Bio Logo" 
              className={`h-12 w-auto transition-all duration-300 ${
                !isScrolled || isDarkMode ? 'brightness-0 invert' : ''
              }`}
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-1" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? isScrolled 
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      : 'bg-white/20 text-white'
                    : isScrolled 
                      ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                data-testid={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="flex items-center gap-2 pr-1">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className={`font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className={`flex items-center justify-between px-4 py-3 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50' 
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}>
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center" 
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_taravera-bio/artifacts/g11plfz5_High%20Resolution%20Logo.png"
              alt="TaraVera Bio Logo" 
              className={`h-10 w-auto transition-all duration-300 ${
                !isScrolled || isDarkMode ? 'brightness-0 invert' : ''
              }`}
            />
          </a>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-btn"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-5 w-5 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
              ) : (
                <Menu className={`h-5 w-5 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 mx-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden" data-testid="mobile-menu">
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`font-body block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActiveLink(link.href)
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="font-body block px-4 py-3 mt-2 text-sm font-semibold text-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
