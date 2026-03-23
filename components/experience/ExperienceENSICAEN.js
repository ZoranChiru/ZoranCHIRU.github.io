import store from '../core/store.js'
import t from '../core/i18n.js'

const ExperienceENSICAEN = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue] },
    content() {
      return {
        fr: {
          badge: 'École d\'ingénieur · ENSICAEN · 2024 – 2027',
          h1_1: 'ENSICAEN',
          h1_2: 'Génie Physique & Systèmes Embarqués',
          intro_eyebrow: 'Formation en cours',
          intro_titre: 'Ingénieur GPSE — de la physique au firmware',
          intro_p1: 'Depuis septembre 2024, je suis en deuxième année du cursus ingénieur GPSE à l\'ENSICAEN — Génie Physique et Systèmes Embarqués. C\'est une formation qui couvre un spectre large : de l\'électronique hyperfréquence à la programmation temps réel, en passant par l\'instrumentation et la conception de systèmes embarqués.',
          intro_p2: 'Le cursus est en alternance, ce qui m\'a permis d\'appliquer directement les compétences acquises en cours dans un contexte industriel réel, d\'abord chez NXP Semiconductors.',
          competences_eyebrow: 'Compétences développées',
          competences_titre: 'Ce qu\'on apprend concrètement',
          competences_p: 'Les cours couvrent l\'électronique HF avec simulation sur ADS, les systèmes temps réel avec FreeRTOS sur STM32, l\'instrumentation et le traitement du signal, mais aussi la conception de cartes électroniques de A à Z — schématique, routage, assemblage et validation.',
          projet_eyebrow: 'Projet marquant',
          projet_titre: 'Distributeur automatique de croquettes',
          projet_p: 'Mon projet personnel en cours depuis la première année : un distributeur automatique de nourriture pour chat, entièrement conçu et développé par mes soins. Ce projet couvre la conception PCB, la programmation ESP32, la gestion d\'énergie solaire et la communication sans fil.',
          photo_caption: 'Campus ENSICAEN — Caen, Calvados',
          nav_suivant: 'NXP →'
        },
        en: {
          badge: 'Engineering school · ENSICAEN · 2024 – 2027',
          h1_1: 'ENSICAEN',
          h1_2: 'Physical Engineering & Embedded Systems',
          intro_eyebrow: 'Current education',
          intro_titre: 'GPSE Engineer — from physics to firmware',
          intro_p1: 'Since September 2024, I\'ve been in my second year of the GPSE engineering program at ENSICAEN — Physical Engineering and Embedded Systems. It\'s a broad program covering everything from microwave electronics to real-time programming, instrumentation and embedded system design.',
          intro_p2: 'The program is work-study based, which allowed me to directly apply skills from class in a real industrial context, first at NXP Semiconductors.',
          competences_eyebrow: 'Skills developed',
          competences_titre: 'What we actually learn',
          competences_p: 'Coursework covers RF electronics with ADS simulation, real-time systems with FreeRTOS on STM32, instrumentation and signal processing, and full PCB design — from schematic to routing, assembly and validation.',
          projet_eyebrow: 'Key project',
          projet_titre: 'Automatic cat food dispenser',
          projet_p: 'My personal project since the first year: an automatic cat food dispenser, fully designed and developed by me. This project covers PCB design, ESP32 programming, solar energy management and wireless communication.',
          photo_caption: 'ENSICAEN campus — Caen, Calvados',
          nav_suivant: 'NXP →'
        },
        ro: {
          badge: 'Școală de inginerie · ENSICAEN · 2024 – 2027',
          h1_1: 'ENSICAEN',
          h1_2: 'Inginerie Fizică & Sisteme Incorporate',
          intro_eyebrow: 'Formare în curs',
          intro_titre: 'Inginer GPSE — de la fizică la firmware',
          intro_p1: 'Din septembrie 2024, sunt în al doilea an al programului de inginerie GPSE la ENSICAEN — Inginerie Fizică și Sisteme Incorporate. Este un program vast care acoperă electronica de înaltă frecvență, programarea în timp real, instrumentarea și proiectarea sistemelor incorporate.',
          intro_p2: 'Programul este în alternance, ceea ce mi-a permis să aplic direct competențele dobândite în cursuri într-un context industrial real, mai întâi la NXP Semiconductors.',
          competences_eyebrow: 'Competențe dezvoltate',
          competences_titre: 'Ce învățăm concret',
          competences_p: 'Cursurile acoperă electronica RF cu simulare ADS, sisteme în timp real cu FreeRTOS pe STM32, instrumentare și procesarea semnalelor, și proiectarea completă a plăcilor electronice — schemă, rutare, asamblare și validare.',
          projet_eyebrow: 'Proiect principal',
          projet_titre: 'Distribuitor automat de hrană pentru pisică',
          projet_p: 'Proiectul meu personal în curs din primul an: un distribuitor automat de hrană pentru pisică, proiectat și dezvoltat integral de mine. Acoperă proiectarea PCB, programarea ESP32, gestionarea energiei solare și comunicarea wireless.',
          photo_caption: 'Campus ENSICAEN — Caen, Calvados',
          nav_suivant: 'NXP →'
        }
      }[this.store.langue] || {}
    }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goDistributeur() { this.$router.push('/projets/distributeur') },
    goNext() { this.$router.push('/experience/nxp') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/autres/ENSICAEN.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ content.badge }}</div>
          <h1 class="projet-h1">{{ content.h1_1 }}<br><em>{{ content.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Campus</strong> — Caen, Calvados</span>
            <span class="meta-item"><strong>Statut</strong> — En cours · 2ème année</span>
            <span class="meta-item"><strong>Rythme</strong> — Alternance</span>
          </div>
          <div class="projet-tags">
            <span class="tag">STM32 / FreeRTOS</span>
            <span class="tag">Électronique HF</span>
            <span class="tag">PCB Design</span>
            <span class="tag">C / C++</span>
            <span class="tag">Python</span>
            <span class="tag">Instrumentation</span>
          </div>
        </div>
      </div>

      <div class="projet-body">

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.intro_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.intro_titre }}</h2>
          <p>{{ content.intro_p1 }}</p>
          <p>{{ content.intro_p2 }}</p>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.competences_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.competences_titre }}</h2>
          <p>{{ content.competences_p }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Électronique</div><div class="spec-value">HF · Instrumentation · PCB</div></div>
            <div class="spec-item"><div class="spec-label">Temps réel</div><div class="spec-value">FreeRTOS · STM32</div></div>
            <div class="spec-item"><div class="spec-label">Langages</div><div class="spec-value">C / C++ · Python · VHDL</div></div>
            <div class="spec-item"><div class="spec-label">Protocoles</div><div class="spec-value">I2C · UART · SPI · UWB · NFC</div></div>
            <div class="spec-item"><div class="spec-label">Outils</div><div class="spec-value">ADS · Proteus · KiCad · Git</div></div>
            <div class="spec-item"><div class="spec-label">Simulation</div><div class="spec-value">ADS · LTspice</div></div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.projet_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.projet_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ content.projet_p }}</p>
              <div style="margin-top:1.5rem;">
                <button class="btn-nav btn-outline" @click="goDistributeur()" style="font-size:13px;">
                  Voir le projet →
                </button>
              </div>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/croquettes/3D_distributeur.png')">
                <img src="assets/images/croquettes/3D_distributeur.png" alt="Distributeur 3D" />
                <div class="media-caption">Modélisation 3D du distributeur automatique</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goBack()">↑ Expériences</button>
          <button class="projet-nav-btn" @click="goNext()">{{ content.nav_suivant }}</button>
        </div>

      </div>
    </div>
  `
}

export default ExperienceENSICAEN
