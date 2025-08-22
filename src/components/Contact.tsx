<form action="https://formsubmit.co/sofiancegrafic@gmail.com" method="POST" class="contact-form">
  <!-- Nom complet -->
  <div class="form-group">
    <input type="text" name="Nom complet" required placeholder="Votre nom">
  </div>

  <!-- Email -->
  <div class="form-group">
    <input type="email" name="Email" required placeholder="Votre email">
  </div>

  <!-- Téléphone -->
  <div class="form-group">
    <input type="tel" name="Téléphone" placeholder="01 23 45 67">
  </div>

  <!-- Sujet -->
  <div class="form-group">
    <select name="Sujet" required>
      <option value="">Choisir un sujet</option>
      <option value="Prendre rendez-vous">Prendre rendez-vous</option>
      <option value="Informations">Informations</option>
      <option value="Autre">Autre</option>
    </select>
  </div>

  <!-- Message -->
  <div class="form-group">
    <textarea name="Message" required placeholder="Décrivez votre demande..."></textarea>
  </div>

  <!-- Options cachées -->
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_next" value="https://skh001.github.io/wissnails/merci.html">

  <!-- Bouton -->
  <button type="submit" class="btn-submit">✈️ Envoyer le message</button>
</form>
