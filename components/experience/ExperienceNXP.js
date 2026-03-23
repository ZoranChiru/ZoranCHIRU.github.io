import store from '../core/store.js'
import t from '../core/i18n.js'

const ExperienceNXP = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue] },
    content() {
      return {
        fr: {
          badge: 'Alternance · NXP Semiconductors · 2024–2025',
          h1_1: 'NXP Semiconductors',
          h1_2: 'Développement Firmware',
          intro_eyebrow: 'Contexte',
          intro_titre: 'Dans les coulisses des puces sans fil',
          intro_p1: 'NXP Semiconductors est l\'un des grands noms de l\'industrie des semi-conducteurs — leurs puces équipent des systèmes de paiement sans contact, des voitures connectées et des infrastructures industrielles partout dans le monde. J\'ai rejoint leur équipe de validation firmware à Caen dans le cadre de ma première année d\'alternance à l\'ENSICAEN.',
          intro_p2: 'Le travail consistait à tester et valider le bon fonctionnement du firmware sur des puces UWB (Ultra Wide Band) et NFC (Near Field Communication), deux technologies de communication sans fil aux applications très différentes — le NFC pour les transactions courte portée, l\'UWB pour la localisation précise.',
          mission_eyebrow: 'Mission principale',
          mission_titre: 'Lire le banc de test sans l\'user',
          mission_p1: 'Les bancs de test ont une mémoire de configuration qui s\'use à chaque écriture. À chaque session, les ingénieurs devaient réécrire manuellement la configuration — une opération répétitive qui réduit la durée de vie des puces. Ma mission était de résoudre ce problème.',
          mission_p2: 'J\'ai développé en Python une fonction appelée "describe" qui lit automatiquement l\'état du banc de test : quelles cartes sont connectées, quelles puces sont présentes, quelle configuration est active. Le résultat est affiché de façon claire, sans avoir à écrire une seule fois en mémoire.',
          env_eyebrow: 'Environnement de travail',
          env_titre: 'Agile, Git, et beaucoup de Python',
          env_p: 'Le travail s\'organisait en sprints de deux semaines avec des revues régulières. Chaque fonctionnalité passait par une branche Git dédiée, une review de code, puis une intégration. Jira servait à suivre l\'avancement et documenter les décisions techniques.',
          photo_caption: 'Poste de travail — développement et validation firmware UWB/NFC',
          nav_retour: '← ENSICAEN',
          nav_suivant: 'EDF →'
        },
        en: {
          badge: 'Work-study · NXP Semiconductors · 2024–2025',
          h1_1: 'NXP Semiconductors',
          h1_2: 'Firmware Development',
          intro_eyebrow: 'Context',
          intro_titre: 'Behind the scenes of wireless chips',
          intro_p1: 'NXP Semiconductors is one of the big names in the semiconductor industry — their chips power contactless payment systems, connected cars and industrial infrastructure worldwide. I joined their firmware validation team in Caen as part of my first year of work-study at ENSICAEN.',
          intro_p2: 'The work involved testing and validating firmware behavior on UWB (Ultra Wide Band) and NFC (Near Field Communication) chips — two wireless technologies with very different applications: NFC for short-range transactions, UWB for precise location.',
          mission_eyebrow: 'Main mission',
          mission_titre: 'Reading the test bench without wearing it out',
          mission_p1: 'Test benches have a configuration memory that wears with each write. Each session, engineers had to manually rewrite the configuration — a repetitive operation that reduces chip lifespan. My mission was to solve this.',
          mission_p2: 'I developed a Python function called "describe" that automatically reads the test bench state: which boards are connected, which chips are present, what configuration is active. The result is displayed clearly, without writing to memory even once.',
          env_eyebrow: 'Work environment',
          env_titre: 'Agile, Git, and a lot of Python',
          env_p: 'Work was organized in two-week sprints with regular reviews. Each feature went through a dedicated Git branch, a code review, then integration. Jira tracked progress and documented technical decisions.',
          photo_caption: 'Workstation — UWB/NFC firmware development and validation',
          nav_retour: '← ENSICAEN',
          nav_suivant: 'EDF →'
        },
        ro: {
          badge: 'Alternance · NXP Semiconductors · 2024–2025',
          h1_1: 'NXP Semiconductors',
          h1_2: 'Dezvoltare Firmware',
          intro_eyebrow: 'Context',
          intro_titre: 'În spatele cipurilor wireless',
          intro_p1: 'NXP Semiconductors este unul dintre marii jucători din industria semiconductorilor — cipurile lor echipează sisteme de plată fără contact, mașini conectate și infrastructuri industriale din întreaga lume. Am integrat echipa lor de validare firmware din Caen în cadrul primului meu an de alternance la ENSICAEN.',
          intro_p2: 'Munca consta în testarea și validarea comportamentului firmware pe cipuri UWB și NFC — două tehnologii wireless cu aplicații foarte diferite: NFC pentru tranzacții de proximitate, UWB pentru localizare precisă.',
          mission_eyebrow: 'Misiunea principală',
          mission_titre: 'Citirea bancului de test fără a-l uza',
          mission_p1: 'Bancurile de test au o memorie de configurare care se uzează la fiecare scriere. La fiecare sesiune, inginerii trebuiau să rescrie manual configurația — o operație repetitivă care reduce durata de viață a cipurilor. Misiunea mea era să rezolv această problemă.',
          mission_p2: 'Am dezvoltat în Python o funcție numită "describe" care citește automat starea bancului de test: ce plăci sunt conectate, ce cipuri sunt prezente, ce configurație este activă. Rezultatul este afișat clar, fără a scrie o singură dată în memorie.',
          env_eyebrow: 'Mediu de lucru',
          env_titre: 'Agile, Git și mult Python',
          env_p: 'Munca era organizată în sprinturi de două săptămâni cu revizuiri regulate. Fiecare funcționalitate trecea printr-o ramură Git dedicată, o revizuire de cod, apoi integrare. Jira urmărea progresul și documenta deciziile tehnice.',
          photo_caption: 'Stație de lucru — dezvoltare și validare firmware UWB/NFC',
          nav_retour: '← ENSICAEN',
          nav_suivant: 'EDF →'
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
    goPrev() { this.$router.push('/experience/ensicaen') },
    goNext() { this.$router.push('/experience/edf') }
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
          <div class="projet-badge">{{ content.badge }}</div>
          <h1 class="projet-h1">{{ content.h1_1 }}<br><em>{{ content.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Période</strong> — 2024 / 2025</span>
            <span class="meta-item"><strong>Lieu</strong> — Caen, Normandie</span>
            <span class="meta-item"><strong>Type</strong> — Alternance</span>
          </div>
          <div class="projet-tags">
            <span class="tag">Python</span>
            <span class="tag">UWB</span>
            <span class="tag">NFC</span>
            <span class="tag">Git</span>
            <span class="tag">Jira</span>
            <span class="tag">Agile/Scrum</span>
          </div>
        </div>
      </div>

      <div class="projet-body">

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.intro_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.intro_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ content.intro_p1 }}</p>
              <p>{{ content.intro_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/autres/desk2.png')">
                <img src="assets/images/autres/desk2.png" alt="Poste de travail NXP" />
                <div class="media-caption">{{ content.photo_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.mission_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.mission_titre }}</h2>
          <p>{{ content.mission_p1 }}</p>
          <p>{{ content.mission_p2 }}</p>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.env_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.env_titre }}</h2>
          <p>{{ content.env_p }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Langage</div><div class="spec-value">Python (PyCharm)</div></div>
            <div class="spec-item"><div class="spec-label">Technologies</div><div class="spec-value">UWB · NFC</div></div>
            <div class="spec-item"><div class="spec-label">Versionnage</div><div class="spec-value">Git</div></div>
            <div class="spec-item"><div class="spec-label">Suivi projet</div><div class="spec-value">Jira · Agile/Scrum</div></div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">{{ content.nav_retour }}</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Expériences</button>
          <button class="projet-nav-btn" @click="goNext()">{{ content.nav_suivant }}</button>
        </div>

      </div>
    </div>
  `
}

export default ExperienceNXP
