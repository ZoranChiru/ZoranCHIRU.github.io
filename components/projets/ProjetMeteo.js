import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjetMeteo = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue].meteo },
    specs() {
      const lang = this.store.langue
      return {
        fr: [
          { label: 'Mesures', value: 'Température & Humidité' },
          { label: 'Traitement', value: 'Filtrage analogique/numérique' },
          { label: 'Affichage', value: 'IHM intégrée' },
          { label: 'Données', value: 'Réelles + synthétiques' }
        ],
        en: [
          { label: 'Measurements', value: 'Temperature & Humidity' },
          { label: 'Processing', value: 'Analog/digital filtering' },
          { label: 'Display', value: 'Integrated HMI' },
          { label: 'Data', value: 'Real + synthetic' }
        ],
        ro: [
          { label: 'Măsurători', value: 'Temperatură & Umiditate' },
          { label: 'Procesare', value: 'Filtrare analogică/digitală' },
          { label: 'Afișare', value: 'IHM integrat' },
          { label: 'Date', value: 'Reale + sintetice' }
        ]
      }[lang] || []
    },
    filtreTexte() {
      const lang = this.store.langue
      return {
        fr: {
          p1: 'Les capteurs renvoient des signaux analogiques bruts, température, humidité, qui contiennent du bruit. On applique des filtres pour stabiliser les mesures avant de les afficher.',
          p2: 'Pour éviter d\'avoir à aller relever des données en extérieur à chaque TP, le système peut aussi générer des données synthétiques paramétrables. Une petite astuce qui a bien rendu service.'
        },
        en: {
          p1: 'Sensors return raw analog signals, temperature, humidity, that contain noise. Filters are applied to stabilize measurements before display.',
          p2: 'To avoid having to collect outdoor data for each lab session, the system can also generate configurable synthetic data. A handy trick that saved a lot of time.'
        },
        ro: {
          p1: 'Senzorii returnează semnale analogice brute, temperatură, umiditate, care conțin zgomot. Se aplică filtre pentru a stabiliza măsurătorile înainte de afișare.',
          p2: 'Pentru a evita colectarea datelor în exterior la fiecare lucrare practică, sistemul poate genera și date sintetice configurabile. Un truc util care a economisit mult timp.'
        }
      }[lang] || {}
    }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goPrev() { this.$router.push('/projets/automatismes') },
    goNext() { this.$router.push('/projets/grafcet') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/station meteo/station_meteo.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ T.badge }}</div>
          <h1 class="projet-h1">{{ T.h1_1 }}<br><em>{{ T.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Formation</strong> — BUT GEII 2ème année</span>
            <span class="meta-item"><strong>Affichage</strong> — IHM intégrée</span>
            <span class="meta-item"><strong>Lieu</strong> — IUT Cherbourg</span>
          </div>
          <div class="projet-tags">
            <span class="tag">Traitement du signal</span>
            <span class="tag">Filtrage</span>
            <span class="tag">IHM</span>
            <span class="tag">Capteurs</span>
            <span class="tag">Embarqué</span>
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
              <div class="media-item clickable-img" @click="openLightbox('assets/images/station meteo/station_meteo.png')">
                <img src="assets/images/station meteo/station_meteo.png" alt="Station météo" />
                <div class="media-caption">{{ T.photo1_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- IHM -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.archi_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.archi_titre }}</h2>
          <div class="projet-split reverse">
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/station meteo/interface.png')">
                <img src="assets/images/station meteo/interface.png" alt="Interface IHM" />
                <div class="media-caption">{{ T.photo2_caption }}</div>
              </div>
            </div>
            <div class="projet-split-text">
              <p>{{ T.archi_p1 }}</p>
              <p>{{ T.archi_p2 }}</p>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- FILTRAGE -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.galerie_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.galerie_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ filtreTexte.p1 }}</p>
              <p>{{ filtreTexte.p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/station meteo/filtration_signaux.png')">
                <img src="assets/images/station meteo/filtration_signaux.png" alt="Filtration signaux" />
                <div class="media-caption">{{ T.photo3_caption }}</div>
              </div>
            </div>
          </div>
          <div class="specs-grid" style="margin-top:2rem;">
            <div v-for="spec in specs" :key="spec.label" class="spec-item">
              <div class="spec-label">{{ spec.label }}</div>
              <div class="spec-value">{{ spec.value }}</div>
            </div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">← Automatismes</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Projets</button>
          <button class="projet-nav-btn" @click="goNext()">Feu tricolore →</button>
        </div>

      </div>
    </div>
  `
}

export default ProjetMeteo