import store from '../core/store.js'
import t from '../core/i18n.js'

const ExperienceEDF = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue] },
    content() {
      const lang = this.store.langue
      return {
        fr: {
          badge: 'Énergie · EDF CNPE Flamanville · 2023–2024',
          h1_1: 'EDF CNPE',
          h1_2: 'Flamanville',
          intro_eyebrow: 'Contexte',
          intro_titre: 'Au cœur de la centrale nucléaire EPR',
          intro_p1: 'La centrale nucléaire de Flamanville, située sur la côte normande, abrite l\'un des réacteurs EPR les plus modernes au monde. C\'est dans cet environnement exigeant et hautement réglementé que j\'ai effectué d\'abord un stage de fin de deuxième année, puis ma troisième année de BUT GEII en alternance.',
          intro_p2: 'Travailler dans une centrale nucléaire implique des contraintes particulières : rigueur absolue dans la documentation, respect strict des protocoles de sécurité, et une capacité à s\'adapter à des environnements industriels complexes.',
          stage_eyebrow: 'Stage · Avr – Juin 2023',
          stage_titre: 'Vues industrielles de la salle de commande',
          stage_p1: 'Durant mon stage de fin de deuxième année de BUT GEII, j\'ai travaillé au sein du Service Conduite de la centrale. Ma mission consistait à concevoir et mettre au point des vues industrielles pour la salle de commande — des interfaces graphiques permettant aux opérateurs de superviser l\'état de la centrale à distance.',
          stage_p2: 'Ces vues sont des représentations schématiques des systèmes de la centrale : circuits de refroidissement, état des vannes, paramètres de fonctionnement. Chaque élément doit être parfaitement fidèle à la réalité pour garantir une supervision fiable.',
          alt_eyebrow: 'Alternance · 2023 – 2024',
          alt_titre: 'Automatisation des rapports de quart en VBA',
          alt_p1: 'Pour ma troisième et dernière année de BUT GEII, j\'ai rejoint EDF Flamanville en alternance. Ma mission principale consistait à automatiser la rédaction des états de la centrale lors des changements de quart — un document clé transmis entre les équipes à chaque rotation.',
          alt_p2: 'J\'ai développé un outil en VBA sur Excel qui génère automatiquement ce rapport à partir des données du système. Cela a permis de réduire significativement le temps de rédaction et d\'éliminer les erreurs de transcription manuelle.',
          photo_caption: 'Environnement de travail — centrale nucléaire EPR Flamanville',
          nav_retour: '← Retour',
          nav_geii: 'BUT GEII →'
        },
        en: {
          badge: 'Energy · EDF CNPE Flamanville · 2023–2024',
          h1_1: 'EDF CNPE',
          h1_2: 'Flamanville',
          intro_eyebrow: 'Context',
          intro_titre: 'At the heart of the EPR nuclear plant',
          intro_p1: 'The Flamanville nuclear power plant, located on the Normandy coast, houses one of the most modern EPR reactors in the world. It is in this demanding and highly regulated environment that I completed an end-of-year internship, then my third year of BUT GEII as a work-study student.',
          intro_p2: 'Working in a nuclear plant involves particular constraints: absolute rigor in documentation, strict adherence to safety protocols, and the ability to adapt to complex industrial environments.',
          stage_eyebrow: 'Internship · Apr – Jun 2023',
          stage_titre: 'Industrial control room views',
          stage_p1: 'During my end-of-second-year internship at BUT GEII, I worked within the plant\'s Operations Department. My mission was to design and develop industrial views for the control room — graphical interfaces allowing operators to remotely supervise the plant\'s status.',
          stage_p2: 'These views are schematic representations of the plant\'s systems: cooling circuits, valve status, operating parameters. Each element must perfectly reflect reality to ensure reliable supervision.',
          alt_eyebrow: 'Work-study · 2023 – 2024',
          alt_titre: 'VBA automation of shift handover reports',
          alt_p1: 'For my third and final year of BUT GEII, I joined EDF Flamanville as a work-study student. My main mission was to automate the drafting of plant status reports during shift changes — a key document transmitted between teams at each rotation.',
          alt_p2: 'I developed a VBA tool in Excel that automatically generates this report from system data. This significantly reduced drafting time and eliminated manual transcription errors.',
          photo_caption: 'Work environment — EPR nuclear plant Flamanville',
          nav_retour: '← Back',
          nav_geii: 'BUT GEII →'
        },
        ro: {
          badge: 'Energie · EDF CNPE Flamanville · 2023–2024',
          h1_1: 'EDF CNPE',
          h1_2: 'Flamanville',
          intro_eyebrow: 'Context',
          intro_titre: 'În inima centralei nucleare EPR',
          intro_p1: 'Centrala nucleară Flamanville, situată pe coasta normandă, găzduiește unul dintre cele mai moderne reactoare EPR din lume. În acest mediu exigent și strict reglementat am efectuat mai întâi un stagiu de sfârșit de al doilea an, apoi al treilea an de BUT GEII în alternance.',
          intro_p2: 'Lucrul într-o centrală nucleară implică constrângeri particulare: rigoare absolută în documentare, respectarea strictă a protocoalelor de securitate și capacitatea de adaptare la medii industriale complexe.',
          stage_eyebrow: 'Stagiu · Apr – Iun 2023',
          stage_titre: 'Vederi industriale ale sălii de comandă',
          stage_p1: 'În timpul stagiului de sfârșit al celui de-al doilea an de BUT GEII, am lucrat în cadrul Serviciului de Conducere al centralei. Misiunea mea consta în proiectarea și punerea la punct a vederilor industriale pentru sala de comandă.',
          stage_p2: 'Aceste vederi sunt reprezentări schematice ale sistemelor centralei: circuite de răcire, starea vanelor, parametrii de funcționare. Fiecare element trebuie să reflecte perfect realitatea pentru o supraveghere fiabilă.',
          alt_eyebrow: 'Alternance · 2023 – 2024',
          alt_titre: 'Automatizare VBA a rapoartelor de schimb',
          alt_p1: 'Pentru al treilea și ultimul an de BUT GEII, am revenit la EDF Flamanville în alternance. Misiunea principală consta în automatizarea redactării stărilor centralei la schimburile de tură.',
          alt_p2: 'Am dezvoltat un instrument VBA în Excel care generează automat acest raport din datele sistemului, reducând semnificativ timpul de redactare și eliminând erorile de transcriere manuală.',
          photo_caption: 'Mediu de lucru — centrala nucleară EPR Flamanville',
          nav_retour: '← Înapoi',
          nav_geii: 'BUT GEII →'
        }
      }[lang] || {}
    }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goGEII() { this.$router.push('/experience/but-geii') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/autres/edfbg.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ content.badge }}</div>
          <h1 class="projet-h1">{{ content.h1_1 }}<br><em>{{ content.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Statut</strong> — Stage + Alternance</span>
            <span class="meta-item"><strong>Service</strong> — Conduite</span>
            <span class="meta-item"><strong>Lieu</strong> — Flamanville, Manche</span>
          </div>
          <div class="projet-tags">
            <span class="tag">VBA / Excel</span>
            <span class="tag">IHM industrielle</span>
            <span class="tag">Supervision</span>
            <span class="tag">Nucléaire</span>
            <span class="tag">EPR</span>
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
              <div class="media-item clickable-img" @click="openLightbox('assets/images/autres/edf.png')">
                <img src="assets/images/autres/edf.png" alt="EDF Flamanville" />
                <div class="media-caption">{{ content.photo_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.stage_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.stage_titre }}</h2>
          <p>{{ content.stage_p1 }}</p>
          <p>{{ content.stage_p2 }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Période</div><div class="spec-value">Avr – Juin 2023</div></div>
            <div class="spec-item"><div class="spec-label">Type</div><div class="spec-value">Stage fin BUT GEII S4</div></div>
            <div class="spec-item"><div class="spec-label">Mission</div><div class="spec-value">Vues salle de commande</div></div>
            <div class="spec-item"><div class="spec-label">Outil</div><div class="spec-value">Logiciel supervision industrielle</div></div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.alt_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.alt_titre }}</h2>
          <p>{{ content.alt_p1 }}</p>
          <p>{{ content.alt_p2 }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Période</div><div class="spec-value">2023 – 2024</div></div>
            <div class="spec-item"><div class="spec-label">Type</div><div class="spec-value">Alternance BUT GEII 3ème année</div></div>
            <div class="spec-item"><div class="spec-label">Mission</div><div class="spec-value">Automatisation rapports</div></div>
            <div class="spec-item"><div class="spec-label">Outil</div><div class="spec-value">VBA / Excel</div></div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goBack()">{{ content.nav_retour }}</button>
          <button class="projet-nav-btn" @click="goGEII()">{{ content.nav_geii }}</button>
        </div>

      </div>
    </div>
  `
}

export default ExperienceEDF