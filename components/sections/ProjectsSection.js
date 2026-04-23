import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjectsSection = {
  data() {
    return {
      store,
      projets: [
        {
          num: '01',
          categorie: 'IoT / Embarqué',
          lien: '/projets/distributeur',
          wip: true,
          color: '#6366f1',
          wide: true,
          image: 'assets/images/croquettes/3D_distributeur.png',
          tags: [{ label: 'ESP32' }, { label: 'C/C++' }, { label: 'Autonome' }]
        },
        {
          num: '02',
          categorie: 'Web',
          lien: null,
          wip: true,
          color: '#10b981',
          image: 'assets/images/autres/site_mecano.png',
          tags: [{ label: 'Wix' }, { label: 'Design' }, { label: 'Vitrine' }]
        },
        {
          num: '03',
          categorie: 'Firmware · NXP',
          lien: '/projets/nxp',
          color: '#f59e0b',
          image: 'assets/images/autres/nxpcaen.png',
          tags: [{ label: 'Python' }, { label: 'UWB' }, { label: 'NFC' }, { label: 'Git' }]
        },
        {
          num: '04',
          categorie: 'Robotique industrielle',
          lien: null,
          color: '#f43f5e',
          video: 'assets/videos/robotique.MP4',
          tags: [{ label: 'Bras robotique' }, { label: 'TP industriel' }, { label: 'Simulation' }]
        },
        {
          num: '05',
          categorie: 'Automatisme industriel',
          lien: '/projets/automatismes',
          color: '#3b82f6',
          wide: true,
          image: 'assets/images/automatismes/interface_automate.png',
          tags: [{ label: 'Automate' }, { label: 'IHM' }, { label: 'Réseau industriel' }]
        },
        {
          num: '06',
          categorie: 'Électronique',
          lien: '/projets/meteo',
          color: '#06b6d4',
          image: 'assets/images/station meteo/station_meteo.png',
          tags: [{ label: 'Capteurs' }, { label: 'Filtrage' }, { label: 'IHM' }]
        },
        {
          num: '07',
          categorie: 'Automatisme',
          lien: '/projets/grafcet',
          color: '#f97316',
          video: 'assets/videos/feu_tricolore/feu_tricolore_auto.mp4',
          tags: [{ label: 'Grafcet' }, { label: 'Schneider' }, { label: 'PCB' }]
        },
        {
          num: '08',
          categorie: 'Robotique',
          lien: '/projets/robot',
          color: '#eab308',
          wide: true,
          video: 'assets/videos/pilomo/robotsuiveurdeligne.MP4',
          tags: [{ label: '1er Prix', gold: true }, { label: 'Arduino' }, { label: 'C' }, { label: 'Électronique' }]
        },
        {
          num: '09',
          categorie: 'Vie associative',
          lien: '/projets/bde',
          color: '#22c55e',
          image: 'assets/images/bde/acceuil.png',
          tags: [{ label: 'Leadership' }, { label: 'Événements' }, { label: 'BDE' }]
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
          setTimeout(() => entry.target.classList.add('visible'), i * 60)
        }
      })
    }, { threshold: 0.05 })
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  },
  methods: {
    navigate(lien) {
      if (lien) this.$router.push(lien)
    }
  },
  template: `
    <section id="projets" class="bg-alt">
      <div class="section-eyebrow reveal">{{ T.projets.eyebrow }}</div>
      <h2 class="section-title reveal">{{ T.projets.titre }}</h2>

      <div class="projects-bento">
        <div
          v-for="(projet, index) in projets"
          :key="projet.num"
          class="project-card reveal"
          :class="{ 'no-link': !projet.lien, 'project-card-wide': projet.wide }"
          @click="navigate(projet.lien)"
        >
          <!-- Project image or video -->
          <div class="project-card-image">
            <video
              v-if="projet.video"
              :src="projet.video"
              autoplay muted loop playsinline
            ></video>
            <img
              v-else
              :src="projet.image"
              :alt="T.projets.items[index]?.titre"
              loading="lazy"
            />
          </div>

          <!-- Accent band -->
          <div class="project-card-band" :style="{ background: projet.color }"></div>

          <!-- Card body -->
          <div class="project-card-body">
            <span v-if="projet.wip" class="project-wip-badge">{{ T.projets.wip }}</span>
            <div class="project-card-cat">{{ projet.categorie }}</div>
            <div class="project-card-title">{{ T.projets.items[index]?.titre }}</div>
            <p class="project-card-desc">{{ T.projets.items[index]?.desc }}</p>
            <div class="project-card-footer">
              <div class="project-card-tags">
                <span
                  v-for="tag in projet.tags"
                  :key="tag.label"
                  class="project-tag"
                  :class="{ gold: tag.gold }"
                >{{ tag.label }}</span>
              </div>
              <span v-if="projet.lien" class="project-card-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

export default ProjectsSection
