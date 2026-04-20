import store from '../core/store.js'
import t from '../core/i18n.js'

const ContactForm = {
  data() {
    return {
      store,
      nom: '',
      email: '',
      message: '',
      envoye: false,
      erreurs: {},
      loading: false,
      FORM_ID: 'mreyjbnp'
    }
  },
  computed: {
    T() { return t[this.store.langue] },
    cvUrl() { return t[this.store.langue].cv_url }
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100)
        }
      })
    }, { threshold: 0.1 })
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  },
  methods: {
    valider() {
      this.erreurs = {}
      if (!this.nom.trim()) this.erreurs.nom = '!'
      if (!this.email.trim()) this.erreurs.email = '!'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email))
        this.erreurs.email = '!'
      if (!this.message.trim()) this.erreurs.message = '!'
      return Object.keys(this.erreurs).length === 0
    },
    async envoyer() {
      if (!this.valider()) return
      this.loading = true
      try {
        const res = await fetch('https://formspree.io/f/' + this.FORM_ID, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ nom: this.nom, email: this.email, message: this.message })
        })
        if (res.ok) { this.envoye = true }
        else { alert('Erreur lors de l\'envoi. Réessaie.') }
      } catch(e) {
        alert('Erreur réseau. Réessaie.')
      } finally {
        this.loading = false
      }
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
    <section id="contact" class="bg-alt">

      <!-- Headline -->
      <div class="reveal">
        <div class="contact-dispo">
          <span class="dispo-dot"></span>
          {{ T.contact.dispo }}
        </div>
        <h2 class="contact-headline">{{ T.contact.intro }}</h2>
        <p class="contact-sub-text">{{ T.contact.sub }}</p>
      </div>

      <!-- Three links -->
      <div class="contact-links-row reveal">
        <a href="https://github.com/ZoranCHIRU" target="_blank" class="contact-link-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/zoran-chiru/" target="_blank" class="contact-link-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        <a href="mailto:zoranchiru@gmail.com" class="contact-link-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Email
        </a>
      </div>

      <!-- CV link -->
      <div class="reveal" style="margin-bottom: 3rem;">
        <a :href="cvUrl" target="_blank" class="contact-cv-link">
          Télécharger mon CV →
        </a>
      </div>

      <!-- Contact form -->
      <div class="contact-form-wrap reveal">
        <div v-if="envoye" class="form-success">
          <div class="form-success-icon">✓</div>
          <h3>{{ T.contact.success }}</h3>
          <p>{{ T.contact.success_sub }}</p>
          <button class="btn-nav btn-outline" @click="reset()">↩</button>
        </div>
        <form v-else @submit.prevent="envoyer" class="contact-form">
          <div class="form-group">
            <label class="form-label" :for="'f-nom'">{{ T.contact.nom }}</label>
            <input
              id="f-nom"
              v-model="nom"
              type="text"
              class="form-input"
              :class="{ error: erreurs.nom }"
              :placeholder="T.contact.nom"
            />
            <span v-if="erreurs.nom" class="form-error">{{ erreurs.nom }}</span>
          </div>
          <div class="form-group">
            <label class="form-label" :for="'f-email'">{{ T.contact.email }}</label>
            <input
              id="f-email"
              v-model="email"
              type="email"
              class="form-input"
              :class="{ error: erreurs.email }"
              placeholder="votre@email.com"
            />
            <span v-if="erreurs.email" class="form-error">{{ erreurs.email }}</span>
          </div>
          <div class="form-group">
            <label class="form-label" :for="'f-msg'">{{ T.contact.message }}</label>
            <textarea
              id="f-msg"
              v-model="message"
              class="form-input"
              :class="{ error: erreurs.message }"
              rows="5"
            ></textarea>
            <span v-if="erreurs.message" class="form-error">{{ erreurs.message }}</span>
          </div>
          <button
            type="submit"
            class="btn-nav btn-primary"
            style="width:100%;"
            :disabled="loading"
          >
            <span v-if="loading">...</span>
            <span v-else>{{ T.contact.envoyer }}</span>
          </button>
        </form>
      </div>

      <!-- Footer bar -->
      <div class="contact-footer reveal">
        <p>© 2026 Zoran Chiru — ENSICAEN GPSE</p>
        <p>Built with Vue.js</p>
      </div>

    </section>
  `
}

export default ContactForm
