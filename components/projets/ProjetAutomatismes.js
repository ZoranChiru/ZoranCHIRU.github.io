import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjetAutomatismes = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue].automatismes }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goPrev() { this.$router.push('/projets/nxp') },
    goNext() { this.$router.push('/projets/meteo') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/automatismes/asservissement.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ T.badge }}</div>
          <h1 class="projet-h1">{{ T.h1_1 }}<br><em>{{ T.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Formation</strong> — BUT GEII · Spécialité Automatisme</span>
            <span class="meta-item"><strong>Lieu</strong> — IUT Cherbourg</span>
          </div>
          <div class="projet-tags">
            <span class="tag">Automate industriel</span>
            <span class="tag">Asservissement</span>
            <span class="tag">IHM</span>
            <span class="tag">Réseau maître/esclave</span>
            <span class="tag">Grafcet</span>
          </div>
        </div>
      </div>

      <div class="projet-body">

        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.contexte_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.contexte_titre }}</h2>
          <p>{{ T.contexte_p }}</p>
        </div>

        <div class="projet-divider"></div>

        <!-- PROJET 1 — ASSERVISSEMENT -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.p1_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.p1_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.p1_p1 }}</p>
              <p>{{ T.p1_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/automatismes/asservissement.png')">
                <img src="assets/images/automatismes/asservissement.png" alt="Asservissement" />
                <div class="media-caption">{{ T.p1_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- PROJET 2 — IHM -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.p2_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.p2_titre }}</h2>
          <div class="projet-split reverse">
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/automatismes/interface_automate.png')">
                <img src="assets/images/automatismes/interface_automate.png" alt="IHM" />
                <div class="media-caption">{{ T.p2_caption1 }}</div>
              </div>
            </div>
            <div class="projet-split-text">
              <p>{{ T.p2_p1 }}</p>
              <p>{{ T.p2_p2 }}</p>
            </div>
          </div>
          <div style="margin:1.5rem auto 0; max-width:480px;">
            <div class="media-item clickable-img" @click="openLightbox('assets/images/automatismes/interface_automate2.png')">
              <img src="assets/images/automatismes/interface_automate2.png" alt="IHM 2" />
              <div class="media-caption">{{ T.p2_caption2 }}</div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- PROJET 3 — RÉSEAU -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.p3_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.p3_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.p3_p1 }}</p>
              <p>{{ T.p3_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/automatismes/reseau_automatismes.png')">
                <img src="assets/images/automatismes/reseau_automatismes.png" alt="Réseau maître/esclave" />
                <div class="media-caption">{{ T.p2_caption3 }}</div>
              </div>
            </div>
          </div>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Architecture</div><div class="spec-value">Maître / Esclave</div></div>
            <div class="spec-item"><div class="spec-label">Protocole</div><div class="spec-value">Réseau industriel</div></div>
            <div class="spec-item"><div class="spec-label">Supervision</div><div class="spec-value">SCADA / IHM</div></div>
            <div class="spec-item"><div class="spec-label">Application</div><div class="spec-value">Industrie & Énergie</div></div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">← NXP</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Projets</button>
          <button class="projet-nav-btn" @click="goNext()">Station météo →</button>
        </div>

      </div>
    </div>
  `
}

export default ProjetAutomatismes