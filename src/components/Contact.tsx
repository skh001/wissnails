// src/components/Contact.tsx

export default function Contact() {
  return (
    <form
      action="https://formsubmit.co/sofiancegrafic@gmail.com"
      method="POST"
      className="contact-form"
    >
      {/* Nom complet */}
      <div className="form-group">
        <input
          type="text"
          name="Nom complet"
          required
          placeholder="Votre nom"
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <input
          type="email"
          name="email"
          required
          placeholder="Votre email"
        />
      </div>

      {/* Message */}
      <div className="form-group">
        <textarea
          name="message"
          required
          placeholder="Votre message"
        ></textarea>
      </div>

      {/* Redirection vers la page "merci" après l'envoi */}
      <input
        type="hidden"
        name="_next"
        value="https://skh001.github.io/wissnails/merci.html"
      />

      <button type="submit">Envoyer le message</button>
    </form>
  );
}
