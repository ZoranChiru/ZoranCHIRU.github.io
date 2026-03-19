import store from './store.js'
import t from './i18n.js'

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
    T() { return t[this.store.langue] }
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
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            nom: this.nom,
            email: this.email,
            message: this.message
          })
        })
        if (res.ok) {
          this.envoye = true
        } else {
          alert('Erreur lors de l\'envoi. Réessaie.')
        }
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
    <section id="contact">
      <div class="eyebrow fade-in">{{ T.contact.eyebrow }}</div>
      <div class="contact-grid">

        <div class="fade-in">
          <div class="contact-dispo">
            <span class="dispo-dot"></span>
            {{ T.contact.dispo }}
          </div>
          <div class="contact-intro">{{ T.contact.intro }}</div>
          <p class="contact-sub">{{ T.contact.sub }}</p>
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

        <div class="fade-in">
          <div v-if="envoye" class="form-success">
            <div class="form-success-icon">✓</div>
            <h3>{{ T.contact.success }}</h3>
            <p>{{ T.contact.success_sub }}</p>
            <button class="btn-nav btn-outline" @click="reset()">↩</button>
          </div>

          <form v-else @submit.prevent="envoyer" class="contact-form">
            <div class="form-group">
              <label class="form-label">{{ T.contact.nom }}</label>
              <input
                v-model="nom"
                type="text"
                class="form-input"
                :class="{ error: erreurs.nom }"
                :placeholder="T.contact.nom"
              />
              <span v-if="erreurs.nom" class="form-error">{{ erreurs.nom }}</span>
            </div>
            <div class="form-group">
              <label class="form-label">{{ T.contact.email }}</label>
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
              <label class="form-label">{{ T.contact.message }}</label>
              <textarea
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
              <span v-if="loading">⏳</span>
              <span v-else>{{ T.contact.envoyer }}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  `
}

export default ContactForm