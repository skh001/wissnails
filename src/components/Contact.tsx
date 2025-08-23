import React, { useState } from "react";
import { Phone, Mail, MessageCircle, Send, User } from "lucide-react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await fetch("https://formsubmit.co/ggbrocs@gmail.com", {
        method: "POST",
        body: new FormData(form),
      });

      form.reset();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT PANEL */}
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-8 lg:p-12 text-white flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-semibold">Parlons de vos ongles</h2>
            <p className="opacity-90">
              Que vous souhaitiez un rendez-vous, des informations sur nos services
              ou des conseils personnalisés, nous sommes là pour vous accompagner.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="opacity-90">07 60 85 43 29</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="opacity-90">contact@wissima.fr</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Réponse garantie</p>
                  <p className="opacity-90">Sous 24h ouvrées</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - FORM */}
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name + Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  required
                  className="w-full border border-pink-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border border-pink-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Téléphone"
                  className="w-full border border-pink-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Subject */}
              <select
                name="subject"
                required
                className="w-full border border-pink-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="">Choisir un sujet</option>
                <option value="rendez-vous">Prise de rendez-vous</option>
                <option value="information">Demande d'information</option>
                <option value="tarif">Question sur les tarifs</option>
                <option value="autre">Autre</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Décrivez votre demande..."
                rows={6}
                required
                className="w-full border border-pink-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>

              {/* Hidden */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-bounce">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">
                Merci 💖
              </h3>
              <p className="text-gray-600">
                Votre message a bien été envoyé !  
                Nous revenons vers vous très vite ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
