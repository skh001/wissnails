import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  // Google Maps link
  const googleMapsLink = "https://share.google/ujmd3Zt3bQwkOP2TJ";

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Nous Trouver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visitez notre salon dans un cadre élégant et relaxant, 
            idéalement situé au cœur de la ville.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Informations Pratiques
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Adresse</h4>
                    <p className="text-gray-600">
                      Avenue Besnardiere<br />
                      49100 Angers, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Horaires</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Vendredi: 9h00 - 19h00</p>
                      <p>Samedi: 9h00 - 18h00</p>
                      <p>Dimanche: 10h00 - 17h00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Téléphone</h4>
                    <a href="tel:+33123456789" className="text-rose-600 hover:text-rose-800">
                      07 60 85 43 29
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                    <a href="mailto:contact@wissima.fr" className="text-rose-600 hover:text-rose-800">
                      contact@wissima.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Accès & Parking
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>• Tram: Ligne A vers Avrillé, Ligne B vers Belle Beille</p>
                <p>• Bus: Lignes 10, 9, 3</p>
                <p>• Parking public </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-rose-400" />
                <h4 className="text-xl font-semibold mb-2">Carte Google Maps</h4>
                <p className="text-sm">
                  Avenue Besnardiere<br />
                  49100 Angers, France
                </p>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;