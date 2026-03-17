const ContactForm = {
  data() {
    return {
      nom: '',
      email: '',
      message: '',
      envoye: false,
      erreurs: {}
    }
  },
  mounted() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100)
      }
    })
  }, { threshold: 0.1 })
  this.$el.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
},
  methods: {
    valider() {
      this.erreurs = {}
      if (!this.nom.trim()) this.erreurs.nom = 'Le nom est requis'
      if (!this.email.trim()) this.erreurs.email = "L'email est requis"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email))
        this.erreurs.email = "Format email invalide"
      if (!this.message.trim()) this.erreurs.message = 'Le message est requis'
      return Object.keys(this.erreurs).length === 0
    },
    envoyer() {
      if (!this.valider()) return
      // Ici tu brancheras un vrai service (Formspree, EmailJS...)
      // Pour l'instant on simule l'envoi
      this.envoye = true
    },
    reset() {
      this.nom = ''
      this.email = ''
      this.message = ''
      this.envoye = false
      this.erreurs = {}
    }
  },
  template: `
    <section id="contact">
      <div class="eyebrow fade-in">Travaillons ensemble</div>

      <div class="contact-grid">

        <!-- INFOS GAUCHE -->
        <div class="fade-in">
          <div class="contact-dispo">
            <span class="dispo-dot"></span>
            Disponible en alternance jusqu'en 2027
          </div>
          <div class="contact-intro">Une opportunité à me proposer ?</div>
          <p class="contact-sub">
            Basé à Caen, Normandie. Ouvert aux opportunités en France
            et à l'international, notamment dans les pays nordiques.
          </p>

          <!-- LIENS -->
          <div class="contact-links" style="margin-top:2rem;">
            <a class="contact-link" href="mailto:zoranchiru@gmail.com">
              Email <span>zoranchiru@gmail.com →</span>
            </a>
            <a class="contact-link" href="https://www.linkedin.com/in/zoran-chiru/" target="_blank">
              LinkedIn <span>Voir le profil →</span>
            </a>
            <a class="contact-link" href="https://github.com/ZoranCHIRU" target="_blank">
              GitHub <span>ZoranCHIRU →</span>
            </a>
            <a class="contact-link" href="pages/cv.html">
              CV & Recommandations <span>Voir →</span>
            </a>
          </div>
        </div>

        <!-- FORMULAIRE DROITE -->
        <div class="fade-in">

          <!-- SUCCESS -->
          <div v-if="envoye" class="form-success">
            <div class="form-success-icon">✓</div>
            <h3>Message envoyé !</h3>
            <p>Je te répondrai dans les plus brefs délais.</p>
            <button class="btn-nav btn-outline" @click="reset()">
              Envoyer un autre message
            </button>
          </div>

          <!-- FORM -->
          <form v-else @submit.prevent="envoyer" class="contact-form">

            <div class="form-group">
              <label class="form-label">Nom</label>
              <input
                v-model="nom"
                type="text"
                class="form-input"
                :class="{ error: erreurs.nom }"
                placeholder="Votre nom"
              />
              <span v-if="erreurs.nom" class="form-error">{{ erreurs.nom }}</span>
            </div>

            <div class="form-group">
              <label class="form-label">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-input"
                :class="{ error: erreurs.email }"
                placeholder="votre@email.com"
              />
              <span v-if="erreurs.email" class="form-error">{{ erreurs.email }}</span>
            </div>

            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea
                v-model="message"
                class="form-input"
                :class="{ error: erreurs.message }"
                placeholder="Votre message..."
                rows="5"
              ></textarea>
              <span v-if="erreurs.message" class="form-error">{{ erreurs.message }}</span>
            </div>

            <button type="submit" class="btn-nav btn-primary" style="width:100%;">
              Envoyer le message
            </button>

          </form>
        </div>

      </div>
    </section>
  `
}

export default ContactForm