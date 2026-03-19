import store from './store.js'
import t from './i18n.js'

const ExperienceSection = {
  data() {
    return {
      store,
      experiences: [
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'Ingénieur GPSE — Génie Physique et Systèmes Embarqués',
          desc: 'Formation ingénieur en alternance. Électronique HF, STM32/FreeRTOS, systèmes temps réel, instrumentation.'
        },
        {
          date: '2024',
          company: 'NXP Semiconductors',
          role: 'Stagiaire — Validation UWB & NFC',
          desc: 'Tests et validation de systèmes de communication sans fil. Rédaction de protocoles, analyse de résultats.'
        },
        {
          date: 'Antérieur',
          company: 'EDF',
          role: 'Stage — Interface de monitoring',
          desc: 'Développement d\'une interface de surveillance pour centrale électrique. Visualisation temps réel, HMI.'
        },
        {
          date: '2021 – 2024',
          company: 'IUT Cherbourg',
          role: 'BUT GEII — Génie Électrique et Informatique Industrielle',
          desc: 'Formation technique en électronique et automatisme. 1er prix concours robot suiveur de ligne.'
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
          setTimeout(() => entry.target.classList.add('visible'), i * 120)
        }
      })
    }, { threshold: 0.1 })
    this.$el.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  },
  template: `
    <section id="experience">
      <div class="eyebrow fade-in">{{ T.experience.eyebrow }}</div>
      <h2 class="section-title fade-in">{{ T.experience.titre }}</h2>
      <div class="exp-list">
        <div
          v-for="exp in experiences"
          :key="exp.company"
          class="exp-item fade-in"
        >
          <div class="exp-date">{{ exp.date }}</div>
          <div>
            <div class="exp-company">{{ exp.company }}</div>
            <div class="exp-role">{{ exp.role }}</div>
            <div class="exp-desc">{{ exp.desc }}</div>
          </div>
        </div>
      </div>
    </section>
  `
}

export default ExperienceSection