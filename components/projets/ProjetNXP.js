import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjetNXP = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue].nxp }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goPrev() { this.$router.push('/projets/distributeur') },
    goNext() { this.$router.push('/projets/automatismes') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/autres/desk2.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ T.badge }}</div>
          <h1 class="projet-h1">{{ T.h1_1 }}<br><em>{{ T.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Rôle</strong> — Alternant Développement Firmware</span>
            <span class="meta-item"><strong>Période</strong> — 2024 / 2025</span>
            <span class="meta-item"><strong>Lieu</strong> — Caen, Normandie</span>
          </div>
          <div class="projet-tags">
            <span class="tag">Python</span>
            <span class="tag">UWB</span>
            <span class="tag">NFC</span>
            <span class="tag">Git</span>
            <span class="tag">Jira</span>
            <span class="tag">Agile</span>
          </div>
        </div>
      </div>

      <div class="projet-body">

        <!-- CONTEXTE -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.contexte_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.contexte_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.contexte_p1 }}</p>
              <p>{{ T.contexte_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/autres/desk2.png')">
                <img src="assets/images/autres/desk2.png" alt="Environnement de travail" />
                <div class="media-caption">{{ T.photo_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- MISSION -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.mission_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.mission_titre }}</h2>
          <p>{{ T.mission_p1 }}</p>
          <p>{{ T.mission_p2 }}</p>
        </div>

        <div class="projet-divider"></div>

        <!-- OUTILS -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.archi_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.archi_titre }}</h2>
          <p>{{ T.archi_p }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Langage</div><div class="spec-value">Python (PyCharm)</div></div>
            <div class="spec-item"><div class="spec-label">Technologies</div><div class="spec-value">UWB · NFC</div></div>
            <div class="spec-item"><div class="spec-label">Versionnage</div><div class="spec-value">Git</div></div>
            <div class="spec-item"><div class="spec-label">Suivi projet</div><div class="spec-value">Jira · Agile/Scrum</div></div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">← Distributeur</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Projets</button>
          <button class="projet-nav-btn" @click="goNext()">Automatismes →</button>
        </div>

      </div>
    </div>
  `
}

export default ProjetNXP