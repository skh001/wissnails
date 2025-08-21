import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-rose-700">
            WissNails
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Galerie
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Localisation
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+33123456789" className="flex items-center text-rose-600 hover:text-rose-800 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              07 60 85 43 29
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50">
                Galerie
              </button>
              <button onClick={() => scrollToSection('location')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50">
                Localisation
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50">
                Contact
              </button>
              <a href="tel:+33123456789" className="flex items-center px-4 py-2 text-rose-600">
                <Phone className="w-4 h-4 mr-2" />
                07 60 85 43 29
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;