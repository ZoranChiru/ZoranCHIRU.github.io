import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjetBDE = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue].bde }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goPrev() { this.$router.push('/projets/robot') }
// pas de goNext
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/bde/foot.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ T.badge }}</div>
          <h1 class="projet-h1">{{ T.h1_1 }}<br><em>{{ T.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Rôle</strong> — Président du Bureau des Étudiants</span>
            <span class="meta-item"><strong>Département</strong> — GEII · IUT Cherbourg</span>
            <span class="meta-item"><strong>Période</strong> — 2022 – 2023</span>
          </div>
          <div class="projet-tags">
            <span class="tag">Leadership</span>
            <span class="tag">Organisation événements</span>
            <span class="tag">Gestion d'équipe</span>
            <span class="tag">Communication</span>
          </div>
        </div>
      </div>

      <div class="projet-body">

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.contexte_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.contexte_titre }}</h2>
          <p>{{ T.contexte_p1 }}</p>
          <p>{{ T.contexte_p2 }}</p>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.ev1_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.ev1_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.ev1_p1 }}</p>
              <p>{{ T.ev1_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/bde/foot.png')">
                <img src="assets/images/bde/foot.png" alt="Tournoi football" />
                <div class="media-caption">{{ T.ev1_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.ev2_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.ev2_titre }}</h2>
          <div class="projet-split reverse">
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/bde/bbq.png')">
                <img src="assets/images/bde/bbq.png" alt="BBQ" />
                <div class="media-caption">{{ T.ev2_caption }}</div>
              </div>
            </div>
            <div class="projet-split-text">
              <p>{{ T.ev2_p1 }}</p>
              <p>{{ T.ev2_p2 }}</p>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.ev3_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.ev3_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.ev3_p1 }}</p>
              <p>{{ T.ev3_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/bde/acceuil.png')">
                <img src="assets/images/bde/acceuil.png" alt="Accueil" />
                <div class="media-caption">{{ T.ev3_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.presse_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.presse_titre }}</h2>
          <div class="media-item clickable-img" style="max-width:600px;" @click="openLightbox('assets/images/autres/journal.png')">
            <img src="assets/images/autres/journal.png" alt="Article journal" />
            <div class="media-caption">{{ T.presse_caption }}</div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">← Projet Pilomo</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Projets</button>
        </div>

      </div>
    </div>
  `
}

export default ProjetBDE