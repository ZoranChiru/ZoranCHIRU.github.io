import store from '../core/store.js'
import t from '../core/i18n.js'

const ExperienceBUTGEII = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue] },
    content() {
      return {
        fr: {
          badge: 'Formation · IUT Cherbourg-en-Cotentin · 2021–2024',
          h1_1: 'BUT Génie Électrique',
          h1_2: 'Informatique Industrielle',
          intro_eyebrow: 'Formation',
          intro_titre: 'Trois ans dans un bassin industriel exceptionnel',
          intro_p1: 'Le BUT GEII à l\'IUT de Cherbourg, c\'est trois ans de formation en génie électrique, électronique embarquée et automatismes. L\'IUT de Cherbourg est implanté dans un bassin industriel très riche, Naval Group, Orano, EDF, ce qui oriente naturellement la pédagogie vers les automatismes industriels et les systèmes embarqués. La spécialité Automatisme et Informatique Industrielle était la seule proposée sur ce site.',
          intro_p2: 'La troisième année s\'est déroulée en alternance chez EDF CNPE Flamanville, ce qui a donné une vraie dimension industrielle à la formation. Entre les cours et les missions en centrale, c\'était une année dense.',
          p1_eyebrow: 'Projet phare',
          p1_titre: 'Projet Pilomo — Robot suiveur de ligne',
          p1_p: 'Le projet le plus marquant de la formation : un robot mobile autonome conçu et programmé en équipe, capable de suivre une ligne blanche au sol, conception de la carte de puissance, câblage des capteurs IR, programmation Arduino. On a remporté la première place au concours IUT de Cherbourg grâce à un raccourci sur la piste que peu d\'équipes avaient eu le temps de développer.',
          p1_btn: 'Voir le projet Pilomo →',
          p2_eyebrow: 'Automatismes industriels',
          p2_titre: 'Feu tricolore, station météo et réseaux',
          p2_p1: 'En deuxième année, les projets montaient en complexité : feu tricolore programmé en Grafcet sur automate Schneider, station météo embarquée axée sur le filtrage de signaux synthétiques et IHM intégrée, travaux sur les réseaux industriels maître/esclave.',
          p2_p2: 'Ces projets couvrent tout le spectre de la spécialité : électronique de puissance, automatisme, traitement du signal et programmation embarquée.',
          bde_eyebrow: 'Vie associative',
          bde_titre: 'Président du BDE GEII — 2022/2023',
          bde_p: 'En deuxième année, j\'ai été élu président du Bureau des Étudiants, une expérience qui sort du cadre technique : gérer une équipe, organiser des événements, s\'occuper du budget. On a organisé un match de foot, un BBQ de fin d\'année et l\'accueil des premières années.',
          bde_btn: 'Voir la page BDE →',
          edf_eyebrow: '3ème année — Alternance EDF',
          edf_titre: 'Un an à la centrale nucléaire de Flamanville',
          edf_p: 'La dernière année du BUT GEII s\'est déroulée en alternance à EDF CNPE Flamanville, Électricité de France, centrale nucléaire EPR de nouvelle génération. J\'y ai développé un outil VBA pour automatiser les rapports de changement de quart, dans un environnement industriel très exigeant.',
          edf_btn: 'Voir la page EDF →',
          diplome_eyebrow: 'Diplôme',
          diplome_titre: 'Obtention du BUT GEII — Juin 2024',
          diplome_p: 'Trois ans de formation intense, couronnés par l\'obtention du BUT GEII avec une moyenne de 14. Ce diplôme a ouvert la voie vers l\'ENSICAEN pour le cursus ingénieur GPSE.',
          photo_diplome_caption: 'Remise du diplôme — IUT Cherbourg 2024',
          photo_bde_caption: 'BDE GEII — Match de football 2022/2023',
          nav_retour: '← EDF'
        },
        en: {
          badge: 'Education · IUT Cherbourg-en-Cotentin · 2021–2024',
          h1_1: 'BUT Electrical Engineering',
          h1_2: '& Industrial Computing',
          intro_eyebrow: 'Education',
          intro_titre: 'Three years in an exceptional industrial environment',
          intro_p1: 'BUT GEII at IUT Cherbourg is a three-year program in electrical engineering, embedded programming and automation. The IUT is located in a rich industrial basin, Naval Group, Orano, EDF, which naturally shapes the curriculum toward industrial automation and embedded systems. The Automation and Industrial Computing specialization was the only one available on this campus.',
          intro_p2: 'The third year was done as a work-study student at EDF CNPE Flamanville, which gave the program a real industrial dimension. Between classes and missions at the plant, it was a packed year.',
          p1_eyebrow: 'Key project',
          p1_titre: 'Pilomo Project — Line following robot',
          p1_p: 'The most memorable project of the program: an autonomous mobile robot designed and programmed as a team, capable of following a white line on the ground, power board design, IR sensor wiring, Arduino programming. We took first place at the IUT Cherbourg competition thanks to a track shortcut few teams had time to develop.',
          p1_btn: 'See the Pilomo project →',
          p2_eyebrow: 'Industrial automation',
          p2_titre: 'Traffic light, weather station and networks',
          p2_p1: 'In the second year, projects grew in complexity: Grafcet traffic light on a Schneider PLC, embedded weather station focused on filtering synthetic signals with an integrated HMI, work on master/slave industrial networks.',
          p2_p2: 'These projects cover the full spectrum of the specialization: power electronics, automation, signal processing and embedded programming.',
          bde_eyebrow: 'Student life',
          bde_titre: 'GEII Student Union President — 2022/2023',
          bde_p: 'In my second year, I was elected student union president, an experience outside the technical scope: managing a team, organizing events, handling the budget. We organized a football match, an end-of-year BBQ and a welcome day for first-year students.',
          bde_btn: 'See the BDE page →',
          edf_eyebrow: '3rd year — Work-study at EDF',
          edf_titre: 'One year at the Flamanville nuclear plant',
          edf_p: 'The final year of BUT GEII was done as a work-study student at EDF CNPE Flamanville, Électricité de France, next-generation EPR nuclear plant. I developed a VBA tool to automate shift handover reports in a very demanding industrial environment.',
          edf_btn: 'See the EDF page →',
          diplome_eyebrow: 'Degree',
          diplome_titre: 'BUT GEII graduation — June 2024',
          diplome_p: 'Three years of intense training, completed with an average of 14/20. This degree opened the path to ENSICAEN for the GPSE engineering program.',
          photo_diplome_caption: 'Graduation — IUT Cherbourg 2024',
          photo_bde_caption: 'BDE GEII — Football match 2022/2023',
          nav_retour: '← EDF'
        },
        ro: {
          badge: 'Formare · IUT Cherbourg-en-Cotentin · 2021–2024',
          h1_1: 'BUT Inginerie Electrică',
          h1_2: 'Informatică Industrială',
          intro_eyebrow: 'Formare',
          intro_titre: 'Trei ani într-un mediu industrial excepțional',
          intro_p1: 'BUT GEII la IUT Cherbourg reprezintă trei ani de formare în inginerie electrică, programare încorporată și automatizări. IUT-ul din Cherbourg este situat într-un bazin industrial bogat, Naval Group, Orano, EDF, ceea ce orientează natural pedagogia spre automatizările industriale. Specializarea Automatizare și Informatică Industrială era singura disponibilă pe acest campus.',
          intro_p2: 'Al treilea an s-a desfășurat în alternance la EDF CNPE Flamanville, ceea ce a dat programului o dimensiune industrială reală. Între cursuri și misiunile la centrală, a fost un an dens.',
          p1_eyebrow: 'Proiect principal',
          p1_titre: 'Proiectul Pilomo — Robot urmăritor de linie',
          p1_p: 'Cel mai memorabil proiect al formării: un robot mobil autonom proiectat și programat în echipă, capabil să urmeze o linie albă pe sol, proiectarea plăcii de putere, cablarea senzorilor IR, programare Arduino. Am câștigat primul loc la concursul IUT Cherbourg datorită unei scurtături pe pistă pe care puține echipe au avut timp să o dezvolte.',
          p1_btn: 'Vezi proiectul Pilomo →',
          p2_eyebrow: 'Automatizări industriale',
          p2_titre: 'Semafor, stație meteo și rețele',
          p2_p1: 'În al doilea an, proiectele creșteau în complexitate: semafor Grafcet pe automat Schneider, stație meteo încorporată axată pe filtrarea semnalelor sintetice și IHM integrat, lucrări pe rețele industriale maestru/sclav.',
          p2_p2: 'Aceste proiecte acoperă întregul spectru al specializării: electronică de putere, automatizare, procesarea semnalelor și programare încorporată.',
          bde_eyebrow: 'Viață asociativă',
          bde_titre: 'Președinte BDE GEII — 2022/2023',
          bde_p: 'În al doilea an, am fost ales președinte al asociației studențești, o experiență în afara cadrului tehnic: gestionarea unei echipe, organizarea evenimentelor, administrarea bugetului. Am organizat un meci de fotbal, un grătar de sfârșit de an și o zi de primire a primului an.',
          bde_btn: 'Vezi pagina BDE →',
          edf_eyebrow: 'Anul 3 — Alternance EDF',
          edf_titre: 'Un an la centrala nucleară Flamanville',
          edf_p: 'Ultimul an de BUT GEII s-a desfășurat în alternance la EDF CNPE Flamanville, Électricité de France, centrală nucleară EPR de nouă generație. Am dezvoltat un instrument VBA pentru automatizarea rapoartelor de schimb de tură, într-un mediu industrial foarte exigent.',
          edf_btn: 'Vezi pagina EDF →',
          diplome_eyebrow: 'Diplomă',
          diplome_titre: 'Absolvire BUT GEII — Iunie 2024',
          diplome_p: 'Trei ani de formare intensă, finalizați cu o medie de 14/20. Această diplomă a deschis calea spre ENSICAEN pentru programul de inginerie GPSE.',
          photo_diplome_caption: 'Absolvire — IUT Cherbourg 2024',
          photo_bde_caption: 'BDE GEII — Meci de fotbal 2022/2023',
          nav_retour: '← EDF'
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
    goPrev() { this.$router.push('/experience/edf') },
    goBDE() { this.$router.push('/projets/bde') },
    goEDF() { this.$router.push('/experience/edf') },
    goPilomo() { this.$router.push('/projets/robot') },
    goAuto() { this.$router.push('/projets/automatismes') },
    goMeteo() { this.$router.push('/projets/meteo') },
    goGrafcet() { this.$router.push('/projets/grafcet') }
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
        <div class="projet-hero-bg" style="background-image:url('assets/images/autres/iut_gon.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ content.badge }}</div>
          <h1 class="projet-h1">{{ content.h1_1 }}<br><em>{{ content.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item"><strong>Spécialité</strong> — Automatisme & Informatique Industrielle</span>
            <span class="meta-item"><strong>Lieu</strong> — Cherbourg-en-Cotentin</span>
            <span class="meta-item"><strong>Résultat</strong> — 14/20</span>
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
          <div class="projet-eyebrow">{{ content.p1_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.p1_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ content.p1_p }}</p>
              <div style="margin-top:1.5rem;">
                <button class="btn-nav btn-outline" @click="goPilomo()" style="font-size:13px;">
                  {{ content.p1_btn }}
                </button>
              </div>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/pilomo/robot-pilomo.png')">
                <img src="assets/images/pilomo/robot-pilomo.png" alt="Robot Pilomo" />
                <div class="media-caption">Projet Pilomo — IUT Cherbourg 2022</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.p2_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.p2_titre }}</h2>
          <p>{{ content.p2_p1 }}</p>
          <p>{{ content.p2_p2 }}</p>
          <div class="specs-grid" style="margin-top:1.5rem;">
            <div class="spec-item" style="cursor:pointer;" @click="goGrafcet()">
              <div class="spec-label">Feu tricolore</div>
              <div class="spec-value">Grafcet · Schneider →</div>
            </div>
            <div class="spec-item" style="cursor:pointer;" @click="goMeteo()">
              <div class="spec-label">Station météo</div>
              <div class="spec-value">Signal · IHM →</div>
            </div>
            <div class="spec-item" style="cursor:pointer;" @click="goAuto()">
              <div class="spec-label">Automatismes</div>
              <div class="spec-value">Asservissement · Réseau →</div>
            </div>
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
                  {{ content.bde_btn }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.edf_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.edf_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ content.edf_p }}</p>
              <div style="margin-top:1.5rem;">
                <button class="btn-nav btn-outline" @click="goEDF()" style="font-size:13px;">
                  {{ content.edf_btn }}
                </button>
              </div>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/autres/edf.png')">
                <img src="assets/images/autres/edf.png" alt="EDF Flamanville" />
                <div class="media-caption">EDF CNPE Flamanville — EPR</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.diplome_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.diplome_titre }}</h2>
          <div class="projet-split reverse">
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/autres/diplome.png')">
                <img src="assets/images/autres/diplome.png" alt="Diplôme" />
                <div class="media-caption">{{ content.photo_diplome_caption }}</div>
              </div>
            </div>
            <div class="projet-split-text">
              <p>{{ content.diplome_p }}</p>
            </div>
          </div>
          <div style="margin:1.5rem auto 0; max-width:520px;">
            <div class="media-item">
              <video src="assets/videos/diplome.mp4" controls muted playsinline style="width:100%;height:260px;object-fit:cover;"></video>
              <div class="media-caption">Cérémonie de remise des diplômes — IUT Cherbourg 2024</div>
            </div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">{{ content.nav_retour }}</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Expériences</button>
        </div>

      </div>
    </div>
  `
}

export default ExperienceBUTGEII