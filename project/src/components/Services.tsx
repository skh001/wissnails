import React, { useState } from 'react';
import { Sparkles, Palette, Crown, Heart } from 'lucide-react';

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const initialServices = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Manucure Classique",
      description: "Soin complet des ongles avec pose de vernis premium",
      price: "055€",
      duration: "45 min",
      bookingLink: "https://calendly.com/"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Manucure de Luxe",
      description: "Traitement premium avec massage des mains et soins intensifs",
      price: "55€",
      duration: "60 min",
      bookingLink: "https://calendly.com/"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Nail Art Créatif",
      description: "Créations artistiques personnalisées sur vos ongles",
      price: "65€",
      duration: "75 min",
      bookingLink: "https://calendly.com/"
    }
  ];

  const additionalServices = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pose de Gel",
      description: "Extensions et renforcement au gel pour des ongles parfaits",
      price: "75€",
      duration: "90 min",
      bookingLink: "https://calendly.com/"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "French Manucure",
      description: "L'élégance intemporelle de la french manucure",
      price: "45€",
      duration: "50 min",
      bookingLink: "https://calendly.com/"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Soin Réparateur",
      description: "Traitement intensif pour ongles abîmés et cuticules",
      price: "40€",
      duration: "45 min",
      bookingLink: "https://calendly.com/"
    },
    // New additional services
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Américaine Pose",
      description: "Pose de vernis avec technique américaine pour un fini parfait",
      price: "50€",
      duration: "50 min",
      bookingLink: "https://calendly.com/"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Gel",
      description: "Application de gel pour des ongles résistants et brillants",
      price: "50€",
      duration: "50 min",
      bookingLink: "https://calendly.com/"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Décolle",
      description: "Service professionnel de décollement de gel ou vernis",
      price: "50€",
      duration: "50 min",
      bookingLink: "https://calendly.com/"
    }
  ];

  const handleBooking = (link) => {
    window.open(link, '_blank');
  };

  const toggleShowAllServices = () => {
    setShowAllServices(!showAllServices);
  };

  // Combine initial and additional services if showAllServices is true
  const displayedServices = showAllServices 
    ? [...initialServices, ...additionalServices] 
    : initialServices;

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de manucure et nail art, 
            conçus pour sublimer vos ongles avec expertise et raffinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-rose-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-full text-rose-600 mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-rose-600">
                  {service.price}
                </span>
                <button 
                  onClick={() => handleBooking(service.bookingLink)}
                  className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors duration-300"
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* "Plus de Services" Button - Only show if not all services are displayed */}
        {!showAllServices && (
          <div className="text-center">
            <button 
              onClick={toggleShowAllServices}
              className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Plus de Services
            </button>
          </div>
        )}

        {/* "Moins de Services" Button - Show when all services are displayed */}
        {showAllServices && (
          <div className="text-center">
            <button 
              onClick={toggleShowAllServices}
              className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Moins de Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;