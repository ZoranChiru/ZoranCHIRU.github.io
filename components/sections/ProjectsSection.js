import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjectsSection = {
  data() {
    return {
      store,
      projets: [
        {
          num: '01', categorie: 'IoT / Embarqué',
          lien: '/projets/distributeur',
          image: 'assets/images/croquettes/3D_distributeur.png',
          wip: true,
          tags: [{ label: 'ESP32' }, { label: 'C/C++' }, { label: 'Autonome' }]
        },
        {
          num: '02', categorie: 'Web',
          lien: null,
          image: 'assets/images/autres/site_mecano.png',
          wip: true,
          tags: [{ label: 'Wix' }, { label: 'Design' }, { label: 'Vitrine' }]
        },
        {
          num: '03', categorie: 'Firmware · NXP',
          lien: '/projets/nxp',
          image: 'assets/images/autres/desk2.png',
          tags: [{ label: 'Python' }, { label: 'UWB' }, { label: 'NFC' }, { label: 'Git' }]
        },
        {
          num: '04', categorie: 'Automatisme industriel',
          lien: '/projets/automatismes',
          image: 'assets/images/automatismes/interface_automate.png',
          tags: [{ label: 'Automate' }, { label: 'IHM' }, { label: 'Réseau industriel' }]
        },
        {
          num: '05', categorie: 'Électronique',
          lien: '/projets/meteo',
          image: 'assets/images/station meteo/station_meteo.png',
          tags: [{ label: 'Capteurs' }, { label: 'Filtrage' }, { label: 'IHM' }]
        },
        {
          num: '06', categorie: 'Automatisme',
          lien: '/projets/grafcet',
          video: 'assets/videos/feu_tricolore/feu_tricolore.mp4',
          image: 'assets/images/feu_tricolore/feu_tricolore.png',
          tags: [{ label: 'Grafcet' }, { label: 'Automate Schneider' }, { label: 'PCB' }]
        },
        {
          num: '07', categorie: 'Robotique',
          lien: '/projets/robot',
          video: 'assets/videos/pilomo/robotsuiveurdeligne.MP4',
          image: 'assets/images/pilomo/robot-pilomo.png',
          tags: [{ label: '🏆 1er Prix', gold: true }, { label: 'Arduino' }, { label: 'C' }, { label: 'Électronique' }]
        },
        {
          num: '08', categorie: 'Vie associative',
          lien: '/projets/bde',
          image: 'assets/images/bde/foot.png',
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
            <video
              v-if="projet.video"
              class="projet-img"
              :src="projet.video"
              autoplay muted loop playsinline
            ></video>
            <img
              v-else-if="projet.image"
              :src="projet.image"
              :alt="T.projets.items[index]?.titre"
              class="projet-img"
              @error="$event.target.src='assets/images/autres/circuit_embarque.png'"
            />
            <div v-else class="projet-img projet-img-placeholder"></div>
            <span v-if="projet.wip" class="projet-wip">{{ T.projets.wip }}</span>
          </div>
          <div class="projet-content">
            <div class="projet-cat">{{ projet.categorie }}</div>
            <h3 class="projet-titre">
              <router-link
                v-if="projet.lien"
                :to="projet.lien"
                style="color:inherit;text-decoration:none;"
              >{{ T.projets.items[index]?.titre }} <span style="color:var(--blue)">→</span></router-link>
              <span v-else>{{ T.projets.items[index]?.titre }}</span>
            </h3>
            <p class="projet-desc">{{ T.projets.items[index]?.desc }}</p>
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