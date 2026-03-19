import store from './store.js'
import t from './i18n.js'

const ProjectsSection = {
  data() {
    return {
      store,
      projets: [
        {
          num: '01', categorie: 'Robotique',
          titre: 'Robot suiveur de ligne',
          image: 'assets/images/robot.jpg',
          desc: 'Robot autonome développé en équipe de 4 lors du BUT GEII. Capteurs IR, alimentation embarquée sur batterie. 1ère place au concours IUT de Cherbourg.',
          tags: [
            { label: '🏆 1er Prix IUT', gold: true },
            { label: 'Arduino' }, { label: 'C' },
            { label: 'Électronique' }
          ]
        },
        {
          num: '02', categorie: 'Automatisme',
          titre: 'Feu tricolore en Grafcet',
          image: 'assets/images/grafcet.jpg',
          desc: 'Modélisation et programmation d\'un feu de signalisation routière. Gestion des séquences d\'états, temporisations et transitions conditionnelles.',
          tags: [{ label: 'Grafcet' }, { label: 'Automate' }, { label: 'Logique séquentielle' }]
        },
        {
          num: '03', categorie: 'IoT / Embarqué',
          titre: 'Distributeur à croquettes',
          image: 'assets/images/distributeur.jpg',
          wip: true,
          desc: 'Distributeur automatique piloté par ESP32. Gestion du poids via cellules de charge, circuit solaire en 6 blocs.',
          tags: [{ label: 'ESP32' }, { label: 'C/C++' }, { label: 'Énergie solaire' }]
        },
        {
          num: '04', categorie: 'Web',
          titre: 'Site vitrine — Garage mécanique',
          image: 'assets/images/garage.jpg',
          wip: true,
          desc: 'Site vitrine pour un artisan mécano indépendant. Design responsive, formulaire de contact.',
          tags: [{ label: 'Vue.js' }, { label: 'HTML/CSS' }, { label: 'JavaScript' }]
        },
        {
          num: '05', categorie: 'Logiciel',
          titre: 'GPSE Game',
          image: 'assets/images/game.jpg',
          desc: 'Jeu de plateau Monopoly-style sur le thème de l\'ENSICAEN. Cartes par personnage, terminal coloré.',
          tags: [{ label: 'Python' }, { label: 'POO' }, { label: 'Terminal' }]
        },
        {
          num: '06', categorie: 'Expérience NXP',
          titre: 'Validation UWB / NFC',
          image: 'assets/images/circuit.jpg',
          desc: 'Tests et validation de systèmes de communication sans fil chez NXP Semiconductors.',
          tags: [{ label: 'UWB' }, { label: 'NFC' }, { label: 'Validation' }]
        }
      ]
    }
  },
  computed: {
    T() { return t[this.store.langue] }
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100)
        }
      })
    }, { threshold: 0.1 })
    this.$el.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  },
  template: `
    <section id="projets">
      <div class="eyebrow fade-in">{{ T.projets.eyebrow }}</div>
      <h2 class="section-title fade-in">{{ T.projets.titre }}</h2>
      <div class="projets-asym">
        <div
          v-for="(projet, index) in projets"
          :key="projet.num"
          class="projet-row fade-in"
          :class="{ reverse: index % 2 !== 0 }"
        >
          <div class="projet-img-wrap">
            <div class="projet-num">{{ projet.num }}</div>
            <img
              :src="projet.image"
              :alt="projet.titre"
              class="projet-img"
              @error="$event.target.src='assets/images/circuit.jpg'"
            />
            <span v-if="projet.wip" class="projet-wip">En cours</span>
          </div>
          <div class="projet-content">
            <div class="projet-cat">{{ projet.categorie }}</div>
            <h3 class="projet-titre">{{ projet.titre }}</h3>
            <p class="projet-desc">{{ projet.desc }}</p>
            <div class="projet-tags">
              <span
                v-for="tag in projet.tags"
                :key="tag.label"
                class="tag"
                :class="{ gold: tag.gold }"
              >{{ tag.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

export default ProjectsSection