import store from '../core/store.js'
import t from '../core/i18n.js'

const ExperienceBUTGEII = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue] },
    content() {
      const lang = this.store.langue
      return {
        fr: {
          badge: 'Formation · IUT Cherbourg-en-Cotentin · 2021–2024',
          h1_1: 'BUT Génie Électrique',
          h1_2: 'Informatique Industrielle',
          intro_eyebrow: 'Formation',
          intro_titre: 'Trois ans d\'électronique et d\'automatisme',
          intro_p1: 'Le BUT GEII — Génie Électrique et Informatique Industrielle — est une formation en trois ans qui m\'a donné des bases solides en électronique, automatisme, programmation embarquée et gestion de projets techniques. J\'ai choisi la spécialité Automatisme et Informatique Industrielle (AII) à l\'IUT Grand Ouest Normandie pôle de Cherbourg-en-Cotentin.',
          intro_p2: 'Ces trois années ont été denses : projets électroniques, concours robotique, présidence du BDE, et une troisième année en alternance chez EDF. Une formation qui mêle théorie et pratique du premier au dernier jour.',
          diplome_eyebrow: 'Diplôme',
          diplome_titre: 'Obtention du BUT GEII — 2024',
          diplome_p1: 'Après trois années riches en projets et en expériences, j\'ai obtenu mon BUT GEII mention Bien en juin 2024. La remise de diplôme a été un moment marquant, symbole de tout le travail accompli depuis la première année.',
          diplome_p2: 'Ce diplôme m\'a ouvert les portes de l\'ENSICAEN pour poursuivre en école d\'ingénieur dans le cursus GPSE — Génie Physique et Systèmes Embarqués.',
          projets_eyebrow: 'Projets phares',
          projets_titre: 'Ce qu\'on y fait concrètement',
          projets_p1: 'Durant le BUT GEII, chaque semestre est rythmé par des projets concrets qui mobilisent les compétences acquises en cours. Parmi les plus marquants : le robot suiveur de ligne (1er prix au concours IUT), le feu tricolore sur automate Schneider, la station météo embarquée, et les travaux pratiques sur les réseaux industriels.',
          projets_p2: 'Ces projets sont présentés en détail dans la section Projets — ils constituent le socle de mes compétences en électronique de puissance, automatisme et programmation embarquée.',
          bde_eyebrow: 'Engagement associatif',
          bde_titre: 'Président du BDE GEII — 2022/2023',
          bde_p: 'En deuxième année, j\'ai été élu président du Bureau des Étudiants du département GEII. Une expérience humaine et organisationnelle qui m\'a appris à coordonner une équipe, gérer un budget et animer la vie étudiante au-delà du cadre académique.',
          photo_diplome_caption: 'Remise du diplôme BUT GEII — IUT Cherbourg 2024',
          photo_bde_caption: 'Vie associative — BDE GEII 2022/2023',
          nav_retour: '← EDF',
          nav_ensicaen: 'ENSICAEN →'
        },
        en: {
          badge: 'Education · IUT Cherbourg-en-Cotentin · 2021–2024',
          h1_1: 'BUT Electrical Engineering',
          h1_2: '& Industrial Computing',
          intro_eyebrow: 'Education',
          intro_titre: 'Three years of electronics and automation',
          intro_p1: 'The BUT GEII — Electrical Engineering and Industrial Computing — is a three-year program that gave me solid foundations in electronics, automation, embedded programming and technical project management. I chose the Automation and Industrial Computing (AII) specialization at IUT Grand Ouest Normandie in Cherbourg-en-Cotentin.',
          intro_p2: 'These three years were intense: electronics projects, robotics competition, student union presidency, and a third year as a work-study student at EDF. A program that blends theory and practice from day one to the last.',
          diplome_eyebrow: 'Degree',
          diplome_titre: 'BUT GEII graduation — 2024',
          diplome_p1: 'After three years rich in projects and experiences, I obtained my BUT GEII with honors in June 2024. The graduation ceremony was a significant moment, a symbol of all the work done since the first year.',
          diplome_p2: 'This degree opened the doors to ENSICAEN to continue in engineering school in the GPSE program — Physical Engineering and Embedded Systems.',
          projets_eyebrow: 'Key projects',
          projets_titre: 'What we actually build',
          projets_p1: 'During BUT GEII, each semester is marked by concrete projects that mobilize skills acquired in class. Among the most notable: the line-following robot (1st prize at the IUT competition), the Grafcet traffic light on a Schneider PLC, the embedded weather station, and practical work on industrial networks.',
          projets_p2: 'These projects are presented in detail in the Projects section — they form the foundation of my skills in power electronics, automation and embedded programming.',
          bde_eyebrow: 'Student involvement',
          bde_titre: 'GEII Student Union President — 2022/2023',
          bde_p: 'In my second year, I was elected president of the GEII department Student Bureau. A human and organizational experience that taught me to coordinate a team, manage a budget and animate student life beyond the academic framework.',
          photo_diplome_caption: 'BUT GEII graduation — IUT Cherbourg 2024',
          photo_bde_caption: 'Student life — BDE GEII 2022/2023',
          nav_retour: '← EDF',
          nav_ensicaen: 'ENSICAEN →'
        },
        ro: {
          badge: 'Formare · IUT Cherbourg-en-Cotentin · 2021–2024',
          h1_1: 'BUT Inginerie Electrică',
          h1_2: 'Informatică Industrială',
          intro_eyebrow: 'Formare',
          intro_titre: 'Trei ani de electronică și automatizare',
          intro_p1: 'BUT GEII — Inginerie Electrică și Informatică Industrială — este o formare de trei ani care mi-a oferit baze solide în electronică, automatizare, programare încorporată și gestionarea proiectelor tehnice. Am ales specializarea Automatizare și Informatică Industrială la IUT Grand Ouest Normandie din Cherbourg-en-Cotentin.',
          intro_p2: 'Acești trei ani au fost denși: proiecte electronice, concurs de robotică, președinție BDE și un al treilea an în alternance la EDF. O formare care îmbină teoria cu practica din prima până în ultima zi.',
          diplome_eyebrow: 'Diplomă',
          diplome_titre: 'Obținerea BUT GEII — 2024',
          diplome_p1: 'După trei ani bogați în proiecte și experiențe, am obținut BUT GEII cu mențiune Bine în iunie 2024. Ceremonia de absolvire a fost un moment important, simbol al tuturor eforturilor depuse.',
          diplome_p2: 'Această diplomă mi-a deschis porțile ENSICAEN pentru a continua în școala de inginerie în programul GPSE — Inginerie Fizică și Sisteme Incorporate.',
          projets_eyebrow: 'Proiecte principale',
          projets_titre: 'Ce construim concret',
          projets_p1: 'În timpul BUT GEII, fiecare semestru este marcat de proiecte concrete. Printre cele mai notabile: robotul urmăritor de linie (locul 1 la concursul IUT), semaforul Grafcet pe automat Schneider, stația meteo încorporată și lucrările practice pe rețele industriale.',
          projets_p2: 'Aceste proiecte sunt prezentate în detaliu în secțiunea Proiecte — ele constituie baza competențelor mele în electronică de putere, automatizare și programare încorporată.',
          bde_eyebrow: 'Implicare asociativă',
          bde_titre: 'Președinte BDE GEII — 2022/2023',
          bde_p: 'În al doilea an, am fost ales președinte al Biroului Studențesc al departamentului GEII. O experiență umană și organizațională care m-a învățat să coordonez o echipă, să gestionez un buget și să animez viața studențească.',
          photo_diplome_caption: 'Absolvire BUT GEII — IUT Cherbourg 2024',
          photo_bde_caption: 'Viață asociativă — BDE GEII 2022/2023',
          nav_retour: '← EDF',
          nav_ensicaen: 'ENSICAEN →'
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
    goEDF() { this.$router.push('/experience/edf') },
    goBDE() { this.$router.push('/projets/bde') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/autres/diplome.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ content.badge }}</div>
          <h1 class="projet-h1">{{ content.h1_1 }}<br><em>{{ content.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Spécialité</strong> — Automatisme & Informatique Industrielle</span>
            <span class="meta-item"><strong>Lieu</strong> — Cherbourg-en-Cotentin</span>
            <span class="meta-item"><strong>Résultat</strong> — Mention Bien</span>
          </div>
          <div class="projet-tags">
            <span class="tag">Automatisme</span>
            <span class="tag">Électronique</span>
            <span class="tag">Arduino / C</span>
            <span class="tag">Grafcet</span>
            <span class="tag">VBA</span>
            <span class="tag">PCB</span>
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
          <div class="projet-eyebrow">{{ content.diplome_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.diplome_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ content.diplome_p1 }}</p>
              <p>{{ content.diplome_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/autres/diplome.png')">
                <img src="assets/images/autres/diplome.png" alt="Diplôme" />
                <div class="media-caption">{{ content.photo_diplome_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.projets_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.projets_titre }}</h2>
          <p>{{ content.projets_p1 }}</p>
          <p>{{ content.projets_p2 }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item"><div class="spec-label">Robot Pilomo</div><div class="spec-value">🏆 1er prix IUT</div></div>
            <div class="spec-item"><div class="spec-label">Feu tricolore</div><div class="spec-value">Grafcet · Schneider</div></div>
            <div class="spec-item"><div class="spec-label">Station météo</div><div class="spec-value">Capteurs · IHM</div></div>
            <div class="spec-item"><div class="spec-label">Réseaux industriels</div><div class="spec-value">Maître/Esclave</div></div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.bde_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.bde_titre }}</h2>
          <div class="projet-split reverse">
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/bde/foot.png')">
                <img src="assets/images/bde/foot.png" alt="BDE" />
                <div class="media-caption">{{ content.photo_bde_caption }}</div>
              </div>
            </div>
            <div class="projet-split-text">
              <p>{{ content.bde_p }}</p>
              <div style="margin-top:1.5rem;">
                <button class="btn-nav btn-outline" @click="goBDE()" style="font-size:13px;">
                  Voir la page BDE →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goEDF()">{{ content.nav_retour }}</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Expériences</button>
        </div>

      </div>
    </div>
  `
}

export default ExperienceBUTGEII