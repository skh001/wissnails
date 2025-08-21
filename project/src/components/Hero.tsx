import React from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img 
            src={logo}
            alt="Wissnails Logo" 
            className="max-h-55 h-auto w-auto"
          />
        </div>
        
        <p className="text-xl md:text-2xl text-rose-700 font-light mb-8 italic">
          Brillez jusqu'au bout des ongles
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Découvrez l'excellence en manucure et nail art dans notre salon haut de gamme. 
          Chaque ongle est une œuvre d'art, chaque détail compte pour votre beauté.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Réserver maintenant
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-50 transition-all duration-300"
          >
            Découvrir nos services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;