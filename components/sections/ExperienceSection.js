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
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 120)
        }
      })
    }, { threshold: 0.1 })
    this.$el.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  },
  methods: {
    navigateTo(lien) {
      if (lien) this.$router.push(lien)
    }
  },
  template: `
    <section id="experience">
      <div class="eyebrow fade-in">{{ T.experience.eyebrow }}</div>
      <h2 class="section-title fade-in">{{ T.experience.titre }}</h2>
      <div class="exp-list">
        <div
          v-for="exp in experiencesSorted"
          :key="exp.role + exp.date"
          class="exp-item fade-in"
          :class="{ clickable: exp.lien }"
          @click="navigateTo(exp.lien)"
        >
          <div class="exp-date">{{ exp.date }}</div>
          <div class="exp-content">
            <div class="exp-role">{{ exp.role }}</div>
            <div class="exp-company">{{ exp.company }}</div>
            <div class="exp-desc">{{ exp.desc }}</div>
            <span v-if="exp.lien" class="exp-voir">Voir le détail →</span>
          </div>
        </div>
      </div>
    </section>
  `
}

export default ExperienceSection