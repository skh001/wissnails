import React from 'react';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/973405/pexels-photo-973405.jpeg",
      alt: "Manucure française élégante"
    },
    {
      url: "https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg",
      alt: "Nail art créatif avec motifs floraux"
    },
    {
      url: "https://images.pexels.com/photos/7755653/pexels-photo-7755653.jpeg",
      alt: "Manucure gel rose poudré"
    },
    {
      url: "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg",
      alt: "Nail art géométrique moderne"
    },
    {
      url: "https://images.pexels.com/photos/5922482/pexels-photo-5922482.jpeg",
      alt: "Manucure nude avec brillants"
    },
    {
      url: "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg",
      alt: "Extensions ongles avec nail art"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Galerie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos plus belles créations. Chaque ongle raconte 
            une histoire unique d'élégance et de savoir-faire artisanal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Suivez-nous sur nos réseaux sociaux pour voir plus de nos créations
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
            >
              Suivre sur Instagram
            </a>
            <a
              href="https://tiktok.com"
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Suivre sur TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;