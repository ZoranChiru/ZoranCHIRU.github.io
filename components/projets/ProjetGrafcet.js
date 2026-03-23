import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjetGrafcet = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue].grafcet }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goPrev() { this.$router.push('/projets/meteo') },
    goNext() { this.$router.push('/projets/robot') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/feu_tricolore/feu_tricolore.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ T.badge }}</div>
          <h1 class="projet-h1">{{ T.h1_1 }}<br><em>{{ T.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Formation</strong> — BUT GEII 2ème année</span>
            <span class="meta-item"><strong>Automate</strong> — Schneider Electric</span>
            <span class="meta-item"><strong>Lieu</strong> — IUT Cherbourg</span>
          </div>
          <div class="projet-tags">
            <span class="tag">Grafcet</span>
            <span class="tag">Automate Schneider</span>
            <span class="tag">PCB</span>
            <span class="tag">Soudage</span>
            <span class="tag">Logique séquentielle</span>
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
              <div class="media-item clickable-img" @click="openLightbox('assets/images/feu_tricolore/feu_tricolore.png')">
                <img src="assets/images/feu_tricolore/feu_tricolore.png" alt="Feu tricolore complet" />
                <div class="media-caption">{{ T.photo1_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- CARTE & AUTOMATE -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.realisation_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.realisation_titre }}</h2>
          <div class="projet-split reverse">
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/feu_tricolore/carte_feu.png')">
                <img src="assets/images/feu_tricolore/carte_feu.png" alt="Carte LED" />
                <div class="media-caption">{{ T.photo2_caption }}</div>
              </div>
            </div>
            <div class="projet-split-text">
              <p>{{ T.realisation_p1 }}</p>
              <p>{{ T.realisation_p2 }}</p>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- GRAFCET & VIDÉO -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.modelisation_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.modelisation_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.modelisation_p1 }}</p>
              <p>{{ T.modelisation_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/feu_tricolore/tests_feu_tricolore.png')">
                <img src="assets/images/feu_tricolore/tests_feu_tricolore.png" alt="Tests" />
                <div class="media-caption">{{ T.photo3_caption }}</div>
              </div>
            </div>
          </div>
          <div style="margin:1.5rem auto 0; max-width:580px;">
            <div class="media-item">
              <video src="assets/videos/feu_tricolore/feu_tricolore_auto.mp4" controls muted playsinline style="width:100%;height:280px;object-fit:cover;"></video>
              <div class="media-caption">{{ T.video_caption }}</div>
            </div>
          </div>
          <div class="specs-grid" style="margin-top:2rem;">
            <div class="spec-item"><div class="spec-label">Automate</div><div class="spec-value">Schneider Electric</div></div>
            <div class="spec-item"><div class="spec-label">Formalisme</div><div class="spec-value">Grafcet / SFC</div></div>
            <div class="spec-item"><div class="spec-label">Alimentation</div><div class="spec-value">24V DC</div></div>
            <div class="spec-item"><div class="spec-label">Sorties</div><div class="spec-value">LED Rouge / Orange / Vert</div></div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">← Station météo</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Projets</button>
          <button class="projet-nav-btn" @click="goNext()">Projet Pilomo →</button>
        </div>

      </div>
    </div>
  `
}

export default ProjetGrafcet