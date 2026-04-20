import store from '../core/store.js'
import t from '../core/i18n.js'

const ExperienceSection = {
  data() { return { store } },
  computed: {
    T() { return t[this.store.langue] },
    experiencesSorted() {
      const items = [...this.T.experience.items]
      const ensicaen = items.findIndex(e => e.company === 'ENSICAEN')
      if (ensicaen > 0) {
        const [item] = items.splice(ensicaen, 1)
        items.unshift(item)
      }
      return items
    }
  },
  created() {
    this._observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 120)
        }
      })
    }, { threshold: 0.1 })
  },
  mounted() {
    this.$el.querySelectorAll('.reveal').forEach(el => this._observer.observe(el))
  },
  updated() {
    this.$el.querySelectorAll('.reveal:not(.visible)').forEach(el => this._observer.observe(el))
  },
  beforeUnmount() {
    this._observer.disconnect()
  },
  methods: {
    navigateTo(lien) {
      if (lien) this.$router.push(lien)
    }
  },
  template: `
    <section id="experience">
      <div class="section-eyebrow reveal">{{ T.experience.eyebrow }}</div>
      <h2 class="section-title reveal">{{ T.experience.titre }}</h2>

      <div class="timeline">
        <div
          v-for="(exp, index) in experiencesSorted"
          :key="exp.role + exp.date"
          class="timeline-item reveal"
          :class="{ clickable: exp.lien }"
          @click="navigateTo(exp.lien)"
        >
          <div class="timeline-date">{{ exp.date }}</div>
          <div
            class="timeline-dot"
            :class="{ current: index === 0 }"
          ></div>
          <div>
            <div class="timeline-role">{{ exp.role }}</div>
            <div class="timeline-company">{{ exp.company }}</div>
            <div class="timeline-desc">{{ exp.desc }}</div>
            <span v-if="exp.lien" class="timeline-voir">Voir le détail →</span>
          </div>
        </div>
      </div>
    </section>
  `
}

export default ExperienceSection
