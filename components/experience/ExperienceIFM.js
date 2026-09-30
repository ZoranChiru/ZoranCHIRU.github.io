import store from '../core/store.js'
import t from '../core/i18n.js'

// Page détail : stage de mobilité IFM Prover (Sibiu, juillet à septembre 2026)
const IMG_DIAGRAM = 'assets/images/IFM/Measurement%20Card%20scope.png'
const IMG_PCB = 'assets/images/IFM/smu_pcb_3d.jpg'
const IMG_HERO = 'assets/images/IFM/ifm_prover_sibiu.jpg'

const ExperienceIFM = {
  data() {
    return { store, lightbox: null, IMG_DIAGRAM, IMG_PCB, IMG_HERO }
  },
  computed: {
    T() { return t[this.store.langue] },
    content() {
      return {
        fr: {
          badge: 'Stage R&D · IFM Prover · 2026',
          h1_1: 'IFM Prover',
          h1_2: 'Carte de mesure SMU',
          meta: [
            { k: 'Période', v: 'Juillet à septembre 2026' },
            { k: 'Lieu', v: 'Sibiu, Roumanie' },
            { k: 'Type', v: 'Stage de mobilité, R&D électronique' }
          ],
          tags: ['KiCad', 'LTspice', 'STM32', 'I²C', 'IO-Link', 'Isolation galvanique', 'Python', 'PySide6'],

          intro_eyebrow: 'Contexte',
          intro_titre: 'Un banc de test pour capteurs industriels',
          intro_p1: 'Chez IFM Prover à Sibiu, le service R&D travaille sur des capteurs industriels et sur leur validation. J\'y ai fait un stage de mobilité de deux mois, de juillet à septembre 2026, dans le cadre de mon cursus en alternance à l\'ENSICAEN.',
          intro_p2: 'Les capteurs sont testés sur un banc HIL (Hardware in the Loop). Ils communiquent en IO-Link via un câble M12 à quatre fils : l\'alimentation UB+ et UB−, et deux sorties OUT1 et OUT2. Jusque-là, pour connaître la tension et le courant sur ces fils, il fallait brancher un multimètre à la main. Ma mission était de concevoir une carte qui fasse cette mesure toute seule, avec précision, et qui s\'intègre au banc.',

          mission_eyebrow: 'Mission principale',
          mission_titre: 'La Signal Measurement Unit (SMU)',
          mission_p1: 'La carte se branche en série sur le câble, entre le banc et le capteur. Elle voit donc le vrai courant qui circule, sur les quatre fils en même temps. Chaque voie a deux gammes : une gamme milliampère pour le fonctionnement normal et une gamme microampère pour les courants de fuite et de veille. Des relais passent d\'une gamme à l\'autre sans jamais ouvrir la boucle, le capteur reste donc alimenté pendant la mesure.',
          mission_p2: 'La mesure repose sur huit INA228, des convertisseurs 20 bits qui lisent à la fois la tension aux bornes d\'un shunt et la tension du bus. Un STM32 pilote les relais, lit les convertisseurs en I²C et envoie les résultats au PC en USB.',
          diagram_caption: 'Premier schéma bloc de la carte, avant le choix des composants',
          specs: [
            { k: 'Voies', v: '4 (UB+, OUT1, OUT2, UB−)' },
            { k: 'Gammes', v: 'mA et µA sur chaque voie' },
            { k: 'Mesure', v: '8 × INA228, 20 bits' },
            { k: 'Pilotage', v: 'STM32 et liaison USB' }
          ],

          iso_eyebrow: 'Le point dur',
          iso_titre: 'Isolation et référence de masse',
          iso_p1: 'La carte mesure des courants de l\'ordre du microampère sur des lignes en 24 V, tout en étant reliée à un PC en USB. Sans précaution, la masse du PC et celle du banc forment une boucle et le bruit du bâtiment passe directement dans la mesure. J\'ai donc séparé la carte en deux domaines isolés galvaniquement : le côté mesure, qui flotte avec le capteur, et le côté commande, relié au PC. Seuls l\'alimentation et le bus I²C traversent la barrière.',
          iso_p2: 'Ce qui m\'a pris le plus de temps, c\'est la question du 0 V. Le côté isolé a besoin d\'une référence, et la solution évidente, la relier à UB−, ne tient plus si l\'alimentation est branchée à l\'envers : UB− devient alors le point le plus haut et tous les convertisseurs se retrouvent polarisés en inverse. J\'ai d\'abord simulé sous LTspice une solution active à base d\'amplificateur opérationnel, qui s\'est révélée impossible, puis j\'ai retenu un montage passif à diodes qui place automatiquement la référence sur le fil le plus bas, dès la mise sous tension et sans firmware. Un multiplexeur à relais permet ensuite de choisir précisément le fil de référence.',

          pcb_eyebrow: 'Conception matérielle',
          pcb_titre: 'Du schéma au PCB',
          pcb_p1: 'Le schéma complet tient sur 18 feuilles sous KiCad. Le routage se fait sur un PCB 4 couches qui sépare l\'analogique sensible, les masses, les alimentations et le numérique. Une fente traverse la carte pour garantir les distances d\'isolement entre les deux domaines.',
          pcb_p2: 'Je me suis aussi occupé du choix des composants sur datasheet, de la nomenclature et de l\'approvisionnement. Certains composants étaient en rupture ou en fin de vie, il a fallu trouver des alternatives et les vérifier avant de commander.',

          pcb_caption: 'Vue 3D de la carte sous KiCad : les quatre voies de mesure en haut, alimentation et commande en bas',

          proto_eyebrow: 'Prototype',
          proto_titre: 'Un proto pour tester sans attendre',
          proto_p: 'En parallèle de la carte finale, j\'ai monté un prototype avec ce qu\'il y avait au labo : une carte Nucleo STM32 et des INA233. Il m\'a permis de valider toute la chaîne (mesure, relais, liaison série, logiciel PC) pendant que la conception de la carte principale avançait. La comparaison avec l\'INA228 a aussi montré les limites de l\'INA233 : sa tension de bus s\'arrête à 36 V et il n\'accepte pas de tension sous la masse, alors que l\'INA228 monte jusqu\'à 85 V.',

          app_eyebrow: 'Logiciel',
          app_titre: 'L\'application côté PC',
          app_p1: 'Pour exploiter les mesures, j\'ai écrit une application en Python avec PySide6. Elle se connecte à la carte par liaison série, affiche les courants et tensions en temps réel sur des graphes et exporte les résultats en CSV ou directement en rapport Word. Elle peut aussi diffuser les mesures en TCP pour qu\'un autre poste du banc les récupère.',
          app_p2: 'Quelques bugs m\'ont appris des choses utiles : la carte qui redémarrait à chaque ouverture du port série à cause du signal DTR, une lecture bloquante sans timeout qui figeait l\'interface, ou encore l\'axe du temps qui dérivait sur les longues acquisitions.',
          app_specs: [
            { k: 'Langage', v: 'Python' },
            { k: 'Interface', v: 'PySide6, pyqtgraph' },
            { k: 'Liaisons', v: 'Série (pyserial), TCP' },
            { k: 'Export', v: 'CSV, rapport Word' }
          ],

          bilan_eyebrow: 'Bilan',
          bilan_titre: 'Où en est la carte',
          bilan_p1: 'À mon départ, le schéma était terminé, les composants choisis, l\'architecture d\'isolation figée et la nomenclature chiffrée. Le routage 4 couches était bien avancé. J\'ai présenté le projet à l\'équipe lors d\'une revue de fin de stage et j\'ai laissé une procédure de mise en route et de test pour la personne qui reprendra l\'assemblage, le firmware et la campagne de mesures.',
          bilan_p2: 'Ce que je retiens : justifier chaque choix avec la datasheet sous les yeux, abandonner une idée quand la simulation montre qu\'elle ne marche pas, et suivre un projet qui va du matériel jusqu\'au logiciel. Toute la documentation et la présentation finale étaient en anglais.',

          nav_retour: '← ENSICAEN',
          nav_haut: '↑ Expériences',
          nav_suivant: 'NXP →',
          zoom_alt: 'Image agrandie'
        },

        en: {
          badge: 'R&D internship · IFM Prover · 2026',
          h1_1: 'IFM Prover',
          h1_2: 'SMU measurement board',
          meta: [
            { k: 'Period', v: 'July to September 2026' },
            { k: 'Location', v: 'Sibiu, Romania' },
            { k: 'Type', v: 'Mobility internship, R&D electronics' }
          ],
          tags: ['KiCad', 'LTspice', 'STM32', 'I²C', 'IO-Link', 'Galvanic isolation', 'Python', 'PySide6'],

          intro_eyebrow: 'Context',
          intro_titre: 'A test bench for industrial sensors',
          intro_p1: 'At IFM Prover in Sibiu, the R&D department works on industrial sensors and on how they are validated. I spent a two month mobility internship there, from July to September 2026, as part of my work-study engineering program at ENSICAEN.',
          intro_p2: 'The sensors are tested on a HIL (Hardware in the Loop) bench. They talk IO-Link over a four wire M12 cable: the UB+ and UB− supply, plus two outputs, OUT1 and OUT2. Until now, checking the voltage and current on those wires meant plugging in a multimeter by hand. My job was to design a board that takes this measurement on its own, accurately, and fits into the bench.',

          mission_eyebrow: 'Main mission',
          mission_titre: 'The Signal Measurement Unit (SMU)',
          mission_p1: 'The board sits in series on the cable, between the bench and the sensor, so it sees the real current flowing on all four wires at once. Each channel has two ranges: a milliamp range for normal operation and a microamp range for leakage and standby currents. Relays switch between ranges without ever opening the loop, so the sensor stays powered during the measurement.',
          mission_p2: 'The measurement is built around eight INA228, 20 bit converters that read both the voltage across a shunt and the bus voltage. An STM32 drives the relays, reads the converters over I²C and sends the results to the PC over USB.',
          diagram_caption: 'First block diagram of the board, before any component choice',
          specs: [
            { k: 'Channels', v: '4 (UB+, OUT1, OUT2, UB−)' },
            { k: 'Ranges', v: 'mA and µA on each channel' },
            { k: 'Measurement', v: '8 × INA228, 20 bit' },
            { k: 'Control', v: 'STM32 and USB link' }
          ],

          iso_eyebrow: 'The hard part',
          iso_titre: 'Isolation and ground reference',
          iso_p1: 'The board measures microamp level currents on 24 V lines while being plugged into a PC over USB. Without care, the PC ground and the bench ground form a loop and the building noise goes straight into the measurement. So I split the board into two galvanically isolated domains: the measurement side, which floats with the sensor, and the control side, tied to the PC. Only power and the I²C bus cross the barrier.',
          iso_p2: 'What took me the longest was the question of where 0 V is. The isolated side needs a reference, and the obvious answer, tying it to UB−, breaks as soon as the supply is wired backwards: UB− then becomes the highest point and every converter ends up reverse biased. I first simulated an active op amp solution in LTspice, which turned out to be impossible, then went with a passive diode circuit that automatically puts the reference on the lowest wire, from power up and with no firmware involved. A relay multiplexer then lets you pick the exact reference wire.',

          pcb_eyebrow: 'Hardware design',
          pcb_titre: 'From schematic to PCB',
          pcb_p1: 'The full schematic spans 18 sheets in KiCad. Routing is done on a 4 layer PCB that keeps the sensitive analog part, the grounds, the power rails and the digital part apart. A slot cuts through the board to guarantee the isolation distances between the two domains.',
          pcb_p2: 'I also handled component selection from datasheets, the bill of materials and sourcing. Some parts were out of stock or end of life, so I had to find alternatives and check them before ordering.',

          pcb_caption: 'KiCad 3D view of the board: the four measurement channels at the top, power and control at the bottom',

          proto_eyebrow: 'Prototype',
          proto_titre: 'A prototype to test without waiting',
          proto_p: 'Alongside the final board, I built a prototype from what was available in the lab: an STM32 Nucleo board and INA233 chips. It let me validate the whole chain (measurement, relays, serial link, PC software) while the main board design moved forward. Comparing it with the INA228 also showed the limits of the INA233: its bus voltage stops at 36 V and it does not accept anything below ground, where the INA228 goes up to 85 V.',

          app_eyebrow: 'Software',
          app_titre: 'The PC application',
          app_p1: 'To make use of the measurements, I wrote a Python application with PySide6. It connects to the board over a serial link, plots currents and voltages live and exports the results to CSV or straight into a Word report. It can also stream the measurements over TCP so another station on the bench can pick them up.',
          app_p2: 'A few bugs taught me useful things: the board resetting every time the serial port was opened because of the DTR line, a blocking read with no timeout that froze the interface, and a time axis that drifted on long acquisitions.',
          app_specs: [
            { k: 'Language', v: 'Python' },
            { k: 'Interface', v: 'PySide6, pyqtgraph' },
            { k: 'Links', v: 'Serial (pyserial), TCP' },
            { k: 'Export', v: 'CSV, Word report' }
          ],

          bilan_eyebrow: 'Outcome',
          bilan_titre: 'Where the board stands',
          bilan_p1: 'When I left, the schematic was complete, the components chosen, the isolation architecture frozen and the bill of materials costed. The 4 layer routing was well under way. I presented the project to the team in an end of internship review and left a bring-up and test procedure for whoever picks up assembly, firmware and the measurement campaign.',
          bilan_p2: 'What I take away: justify every choice with the datasheet open, drop an idea when the simulation shows it does not work, and follow a project that goes from hardware all the way to software. All the documentation and the final presentation were in English.',

          nav_retour: '← ENSICAEN',
          nav_haut: '↑ Experience',
          nav_suivant: 'NXP →',
          zoom_alt: 'Enlarged image'
        },

        ro: {
          badge: 'Stagiu R&D · IFM Prover · 2026',
          h1_1: 'IFM Prover',
          h1_2: 'Placa de măsură SMU',
          meta: [
            { k: 'Perioadă', v: 'Iulie până în septembrie 2026' },
            { k: 'Locație', v: 'Sibiu, România' },
            { k: 'Tip', v: 'Stagiu de mobilitate, R&D electronică' }
          ],
          tags: ['KiCad', 'LTspice', 'STM32', 'I²C', 'IO-Link', 'Izolare galvanică', 'Python', 'PySide6'],

          intro_eyebrow: 'Context',
          intro_titre: 'Un banc de test pentru senzori industriali',
          intro_p1: 'La IFM Prover din Sibiu, departamentul de cercetare și dezvoltare lucrează pe senzori industriali și pe validarea lor. Am făcut aici un stagiu de mobilitate de două luni, din iulie până în septembrie 2026, în cadrul parcursului meu în alternanță la ENSICAEN.',
          intro_p2: 'Senzorii sunt testați pe un banc HIL (Hardware in the Loop). Comunică prin IO-Link, pe un cablu M12 cu patru fire: alimentarea UB+ și UB−, plus două ieșiri, OUT1 și OUT2. Până acum, pentru a afla tensiunea și curentul pe aceste fire, trebuia conectat un multimetru de mână. Misiunea mea a fost să proiectez o placă care face singură această măsură, precis, și care se integrează în banc.',

          mission_eyebrow: 'Misiunea principală',
          mission_titre: 'Signal Measurement Unit (SMU)',
          mission_p1: 'Placa se montează în serie pe cablu, între banc și senzor, așa că vede curentul real care circulă pe toate cele patru fire în același timp. Fiecare canal are două game: una de miliamperi pentru funcționarea normală și una de microamperi pentru curenții de scurgere și de standby. Releele comută între game fără să deschidă vreodată bucla, deci senzorul rămâne alimentat în timpul măsurii.',
          mission_p2: 'Măsura se bazează pe opt INA228, convertoare pe 20 de biți care citesc atât tensiunea pe un șunt, cât și tensiunea de bus. Un STM32 comandă releele, citește convertoarele prin I²C și trimite rezultatele către PC prin USB.',
          diagram_caption: 'Prima schemă bloc a plăcii, înainte de alegerea componentelor',
          specs: [
            { k: 'Canale', v: '4 (UB+, OUT1, OUT2, UB−)' },
            { k: 'Game', v: 'mA și µA pe fiecare canal' },
            { k: 'Măsură', v: '8 × INA228, 20 biți' },
            { k: 'Control', v: 'STM32 și legătură USB' }
          ],

          iso_eyebrow: 'Partea dificilă',
          iso_titre: 'Izolarea și referința de masă',
          iso_p1: 'Placa măsoară curenți de ordinul microamperilor pe linii de 24 V, fiind în același timp conectată la un PC prin USB. Fără precauții, masa PC-ului și cea a bancului formează o buclă, iar zgomotul din clădire ajunge direct în măsură. Am împărțit deci placa în două domenii izolate galvanic: partea de măsură, care plutește odată cu senzorul, și partea de comandă, legată de PC. Doar alimentarea și magistrala I²C traversează bariera.',
          iso_p2: 'Ce mi-a luat cel mai mult timp a fost întrebarea „unde este 0 V?”. Partea izolată are nevoie de o referință, iar soluția evidentă, legarea ei la UB−, nu mai funcționează dacă alimentarea este conectată invers: UB− devine atunci punctul cel mai înalt și toate convertoarele ajung polarizate invers. Am simulat mai întâi în LTspice o soluție activă cu amplificator operațional, care s-a dovedit imposibilă, apoi am ales un montaj pasiv cu diode care pune automat referința pe firul cel mai jos, de la punerea sub tensiune și fără firmware. Un multiplexor cu relee permite apoi alegerea exactă a firului de referință.',

          pcb_eyebrow: 'Proiectare hardware',
          pcb_titre: 'De la schemă la PCB',
          pcb_p1: 'Schema completă ocupă 18 foi în KiCad. Rutarea se face pe un PCB cu patru straturi, care separă partea analogică sensibilă, masele, alimentările și partea digitală. O fantă traversează placa pentru a garanta distanțele de izolare dintre cele două domenii.',
          pcb_p2: 'M-am ocupat și de alegerea componentelor pe baza datasheet-urilor, de lista de materiale și de aprovizionare. Unele componente lipseau din stoc sau erau la sfârșit de viață, așa că a trebuit să găsesc alternative și să le verific înainte de comandă.',

          pcb_caption: 'Vedere 3D a plăcii în KiCad: cele patru canale de măsură sus, alimentarea și comanda jos',

          proto_eyebrow: 'Prototip',
          proto_titre: 'Un prototip ca să testez fără să aștept',
          proto_p: 'În paralel cu placa finală, am montat un prototip cu ce era disponibil în laborator: o placă Nucleo STM32 și câteva INA233. Mi-a permis să validez tot lanțul (măsură, relee, legătură serială, software PC) în timp ce proiectarea plăcii principale avansa. Comparația cu INA228 a arătat și limitele INA233: tensiunea de bus se oprește la 36 V și nu acceptă nimic sub masă, pe când INA228 urcă până la 85 V.',

          app_eyebrow: 'Software',
          app_titre: 'Aplicația de pe PC',
          app_p1: 'Pentru a folosi măsurătorile, am scris o aplicație în Python cu PySide6. Se conectează la placă prin port serial, afișează curenții și tensiunile în timp real pe grafice și exportă rezultatele în CSV sau direct într-un raport Word. Poate și să transmită măsurătorile prin TCP, pentru ca un alt post al bancului să le preia.',
          app_p2: 'Câteva bug-uri m-au învățat lucruri utile: placa se reseta la fiecare deschidere a portului serial din cauza semnalului DTR, o citire blocantă fără timeout îngheța interfața, iar axa de timp aluneca pe achizițiile lungi.',
          app_specs: [
            { k: 'Limbaj', v: 'Python' },
            { k: 'Interfață', v: 'PySide6, pyqtgraph' },
            { k: 'Legături', v: 'Serial (pyserial), TCP' },
            { k: 'Export', v: 'CSV, raport Word' }
          ],

          bilan_eyebrow: 'Bilanț',
          bilan_titre: 'Unde a rămas placa',
          bilan_p1: 'La plecare, schema era terminată, componentele alese, arhitectura de izolare fixată, iar costul listei de materiale calculat. Rutarea pe patru straturi era bine avansată. Am prezentat proiectul echipei la o revizie de final de stagiu și am lăsat o procedură de punere în funcțiune și de test pentru cine va prelua asamblarea, firmware-ul și campania de măsurători.',
          bilan_p2: 'Ce rețin: să justific fiecare alegere cu datasheet-ul în față, să renunț la o idee când simularea arată că nu merge și să urmăresc un proiect care merge de la hardware până la software. Toată documentația și prezentarea finală au fost în engleză.',

          nav_retour: '← ENSICAEN',
          nav_haut: '↑ Experiențe',
          nav_suivant: 'NXP →',
          zoom_alt: 'Imagine mărită'
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
    goNext() { this.$router.push('/experience/nxp') }
  },
  template: `
    <div class="projet-page">

      <div v-if="lightbox" class="lightbox" @click="closeLightbox()">
        <div class="lightbox-inner" @click.stop>
          <img :src="lightbox" :alt="content.zoom_alt" />
          <button class="lightbox-close" @click="closeLightbox()" aria-label="Fermer">✕</button>
        </div>
      </div>

      <div class="projet-hero">
        <div class="projet-hero-bg" :style="{ backgroundImage: 'url(' + IMG_HERO + ')' }"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ content.badge }}</div>
          <h1 class="projet-h1">{{ content.h1_1 }}<br><em>{{ content.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span v-for="m in content.meta" :key="m.k" class="meta-item"><strong>{{ m.k }}</strong> · {{ m.v }}</span>
          </div>
          <div class="projet-tags">
            <span v-for="tag in content.tags" :key="tag" class="tag">{{ tag }}</span>
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
          <div class="projet-eyebrow">{{ content.mission_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.mission_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ content.mission_p1 }}</p>
              <p>{{ content.mission_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item media-diagram clickable-img" @click="openLightbox(IMG_DIAGRAM)">
                <img :src="IMG_DIAGRAM" :alt="content.diagram_caption" />
                <div class="media-caption">{{ content.diagram_caption }}</div>
              </div>
            </div>
          </div>
          <div class="specs-grid">
            <div v-for="s in content.specs" :key="s.k" class="spec-item">
              <div class="spec-label">{{ s.k }}</div>
              <div class="spec-value">{{ s.v }}</div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.iso_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.iso_titre }}</h2>
          <p>{{ content.iso_p1 }}</p>
          <p>{{ content.iso_p2 }}</p>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.pcb_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.pcb_titre }}</h2>
          <p>{{ content.pcb_p1 }}</p>
          <p>{{ content.pcb_p2 }}</p>
          <div class="media-item media-wide clickable-img" @click="openLightbox(IMG_PCB)">
            <img :src="IMG_PCB" :alt="content.pcb_caption" loading="lazy" />
            <div class="media-caption">{{ content.pcb_caption }}</div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.proto_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.proto_titre }}</h2>
          <p>{{ content.proto_p }}</p>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.app_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.app_titre }}</h2>
          <p>{{ content.app_p1 }}</p>
          <p>{{ content.app_p2 }}</p>
          <div class="specs-grid">
            <div v-for="s in content.app_specs" :key="s.k" class="spec-item">
              <div class="spec-label">{{ s.k }}</div>
              <div class="spec-value">{{ s.v }}</div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <div class="projet-section">
          <div class="projet-eyebrow">{{ content.bilan_eyebrow }}</div>
          <h2 class="projet-h2">{{ content.bilan_titre }}</h2>
          <p>{{ content.bilan_p1 }}</p>
          <p>{{ content.bilan_p2 }}</p>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">{{ content.nav_retour }}</button>
          <button class="projet-nav-btn" @click="goBack()">{{ content.nav_haut }}</button>
          <button class="projet-nav-btn" @click="goNext()">{{ content.nav_suivant }}</button>
        </div>

      </div>
    </div>
  `
}

export default ExperienceIFM
