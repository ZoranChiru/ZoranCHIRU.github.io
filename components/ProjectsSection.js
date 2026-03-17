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
      <div class="eyebrow">Réalisations</div>
      <h2 class="section-title">Projets sélectionnés</h2>
      <div class="projects-grid">
        <ProjectCard
          v-for="projet in projets"
          :key="projet.num"
          :projet="projet"
        />
      </div>
    </section>
  `
}

export default ProjectsSection