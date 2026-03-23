import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjetDistributeur = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue].distributeur }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goPrev() { this.$router.push('/') },
    goNext() { this.$router.push('/projets/nxp') }
  },
  template: `
    <div class="projet-page">

      <div v-if="lightbox" class="lightbox" @click="closeLightbox()">
        <div class="lightbox-inner" @click.stop>
          <img :src="lightbox" alt="Photo agrandie" />
          <button class="lightbox-close" @click="closeLightbox()">✕</button>
        </div>
      </div>

      <div class="projet-hero">
        <div class="projet-hero-bg" style="background-image:url('assets/images/croquettes/3D_distributeur.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ T.badge }}</div>
          <h1 class="projet-h1">{{ T.h1_1 }}<br><em>{{ T.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Formation</strong> — ENSICAEN GPSE 1ère année</span>
            <span class="meta-item"><strong>Microcontrôleur</strong> — ESP32</span>
            <span class="meta-item"><strong>Statut</strong> — En cours ✦</span>
          </div>
          <div class="projet-tags">
            <span class="tag">ESP32</span>
            <span class="tag">C / C++</span>
            <span class="tag">PCB Design</span>
            <span class="tag">Énergie autonome</span>
            <span class="tag">I2C / UART</span>
          </div>
        </div>
      </div>

      <div class="projet-body">

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.contexte_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.contexte_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.contexte_p1 }}</p>
              <p>{{ T.contexte_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/croquettes/3D_distributeur.png')">
                <img src="assets/images/croquettes/3D_distributeur.png" alt="Distributeur 3D" />
                <div class="media-caption">{{ T.photo1_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.archi_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.archi_titre }}</h2>
          <p>{{ T.archi_p }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Microcontrôleur</div><div class="spec-value">ESP32</div></div>
            <div class="spec-item"><div class="spec-label">Pesée</div><div class="spec-value">Cellules de charge + ADS1234</div></div>
            <div class="spec-item"><div class="spec-label">Alimentation</div><div class="spec-value">Panneau solaire + batterie AGM</div></div>
            <div class="spec-item"><div class="spec-label">Régulateur</div><div class="spec-value">LM317 + LM2596 Buck</div></div>
            <div class="spec-item"><div class="spec-label">Communication</div><div class="spec-value">I2C / UART / WiFi</div></div>
            <div class="spec-item"><div class="spec-label">Statut</div><div class="spec-value">En cours ✦</div></div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goBack()">↑ Projets</button>
          <button class="projet-nav-btn" @click="goNext()">NXP →</button>
        </div>

      </div>
    </div>
  `
}

export default ProjetDistributeur