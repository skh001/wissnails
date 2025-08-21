import React from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Réservation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Réservez votre rendez-vous en ligne et laissez-nous prendre soin de vos ongles 
            avec notre expertise professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Disponibilités flexibles
                </h3>
                <p className="text-gray-600">
                  Réservez selon vos disponibilités avec notre système de réservation en ligne.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Confirmation immédiate
                </h3>
                <p className="text-gray-600">
                  Recevez une confirmation instantanée de votre rendez-vous par email.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Service premium
                </h3>
                <p className="text-gray-600">
                  Profitez d'un service personnalisé dans un environnement luxueux et relaxant.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Système de réservation Calendly
              </h3>
              <p className="text-gray-600 mb-6">
                Cliquez sur le bouton ci-dessous pour accéder à notre calendrier de réservation.
              </p>
            </div>
            
<div className="bg-white rounded-xl p-8 text-center border-2 border-dashed border-rose-200">
  <Calendar className="w-16 h-16 text-rose-400 mx-auto mb-4" />
  <h4 className="text-lg font-semibold text-gray-700 mb-2">
    Widget Calendly
  </h4>
  <p className="text-gray-500 mb-6">
    Intégrez ici votre widget Calendly pour permettre aux clients de réserver directement.
  </p>
  <a 
    href="https://calendly.com/yourname" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors duration-300 inline-block"
  >
    Ouvrir Calendly
  </a>
</div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Vous pouvez également nous appeler au <strong>07 60 85 43 29</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;