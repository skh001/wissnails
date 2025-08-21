import React from 'react';
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-rose-400 mb-4">
              Wissnails
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre salon de manucure haut de gamme à Angers. Brillez jusqu'au bout des ongles 
              avec nos services experts et notre savoir-faire artisanal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span className="text-gray-300 text-sm">
                  Avenue besnardiere<br />49100 Angers
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-rose-400" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-rose-400 transition-colors">
                  07 60 85 43 29
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-rose-400" />
                <a href="mailto:contact@wissima.fr" className="text-gray-300 hover:text-rose-400 transition-colors">
                  contact@wissima.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Wissnails. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-rose-400" />
              <span>à Angers par SKH </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;