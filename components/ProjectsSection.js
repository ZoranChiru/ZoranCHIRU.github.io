import ProjectCard from './ProjectCard.js'

const ProjectsSection = {
  components: { ProjectCard },
  data() {
    return {
      projets: [
        {
          num: '01', categorie: 'Robotique',
          titre: 'Robot suiveur de ligne',
          desc: 'Robot autonome développé en équipe de 4 lors du BUT GEII. Capteurs IR, alimentation embarquée sur batterie. 1ère place au concours IUT de Cherbourg.',
          tags: [
            { label: '🏆 1er Prix IUT', gold: true },
            { label: 'Arduino' }, { label: 'C' },
            { label: 'Électronique' }, { label: 'Programmation' }
          ]
        },
        {
          num: '02', categorie: 'Automatisme',
          titre: 'Feu tricolore en Grafcet',
          desc: 'Modélisation et programmation d\'un feu de signalisation routière. Gestion des séquences d\'états, temporisations et transitions conditionnelles.',
          tags: [
            { label: 'Grafcet' }, { label: 'Automate' },
            { label: 'Logique séquentielle' }
          ]
        },
        {
          num: '03', categorie: 'IoT / Embarqué',
          titre: 'Distributeur à croquettes',
          wip: true,
          desc: 'Distributeur automatique piloté par ESP32. Gestion du poids via cellules de charge ADS1234, circuit de gestion d\'énergie solaire.',
          tags: [
            { label: 'ESP32' }, { label: 'ADS1234' },
            { label: 'Énergie solaire' }, { label: 'C/C++' }
          ]
        },
        {
          num: '04', categorie: 'Web',
          titre: 'Site vitrine — Garage mécanique',
          wip: true,
          desc: 'Site vitrine pour un artisan mécano indépendant. Présentation des services, formulaire de contact, design responsive.',
          tags: [
            { label: 'HTML/CSS' }, { label: 'JavaScript' }, { label: 'Vue.js' }
          ]
        },
        {
          num: '05', categorie: 'Logiciel',
          titre: 'GPSE Game',
          desc: 'Jeu de plateau Monopoly-style sur le thème de l\'ENSICAEN. Mécanique de cartes par personnage, sortie terminal colorée.',
          tags: [
            { label: 'Python' }, { label: 'POO' }, { label: 'Terminal' }
          ]
        },
        {
          num: '06', categorie: 'Expérience NXP',
          titre: 'Validation UWB / NFC',
          desc: 'Tests et validation de systèmes de communication sans fil UWB et NFC chez NXP Semiconductors. Rédaction de protocoles, analyse de résultats.',
          tags: [
            { label: 'UWB' }, { label: 'NFC' },
            { label: 'Validation' }, { label: 'Anglais' }
          ]
        }
      ]
    }
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
      <div class="eyebrow fade-in">Réalisations</div>
      <h2 class="section-title fade-in">Projets sélectionnés</h2>

      <div class="projets-asym">
        <div
          v-for="(projet, index) in projets"
          :key="projet.num"
          class="projet-row fade-in"
          :class="{ reverse: index % 2 !== 0 }"
        >
          <!-- IMAGE -->
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

          <!-- TEXTE -->
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