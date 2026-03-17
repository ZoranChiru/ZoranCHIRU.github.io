const ExperienceSection = {
  data() {
    return {
      experiences: [
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'Ingénieur GPSE — Génie Physique et Systèmes Embarqués',
          desc: 'Formation ingénieur en alternance. Électronique HF, STM32/FreeRTOS, systèmes temps réel, instrumentation, traitement du signal.'
        },
        {
          date: '2024',
          company: 'NXP Semiconductors',
          role: 'Stagiaire — Validation UWB & NFC',
          desc: 'Tests et validation de systèmes de communication sans fil. Rédaction de protocoles de test, analyse de résultats et rapports techniques.'
        },
        {
          date: 'Antérieur',
          company: 'EDF',
          role: 'Stage — Interface de monitoring',
          desc: 'Développement d\'une interface de surveillance pour centrale électrique. Visualisation de données en temps réel, développement HMI.'
        },
        {
          date: '2021 – 2024',
          company: 'IUT Cherbourg',
          role: 'BUT GEII — Génie Électrique et Informatique Industrielle',
          desc: 'Formation technique en électronique, automatisme et informatique industrielle. 1er prix concours robot suiveur de ligne.'
        }
      ]
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
  template: `
    <section id="experience">
      <div class="eyebrow fade-in">Parcours</div>
      <h2 class="section-title fade-in">Expériences & Formation</h2>
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