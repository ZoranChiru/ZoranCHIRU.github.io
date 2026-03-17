const SkillsSection = {
  data() {
    return {
      groupes: [
        {
          cat: 'Embarqué',
          skills: [
            { label: 'STM32 / ARM', niveau: 85 },
            { label: 'FreeRTOS',    niveau: 75 },
            { label: 'Arduino',     niveau: 90 },
            { label: 'ESP32',       niveau: 70 },
          ]
        },
        {
          cat: 'Langages',
          skills: [
            { label: 'C / C++',      niveau: 85 },
            { label: 'Python',       niveau: 80 },
            { label: 'HTML/CSS/JS',  niveau: 65 },
            { label: 'VHDL',         niveau: 40 },
          ]
        },
        {
          cat: 'Outils & Protocoles',
          skills: [
            { label: 'Proteus / KiCad',   niveau: 75 },
            { label: 'ADS (simulation HF)',niveau: 70 },
            { label: 'UWB / NFC',          niveau: 65 },
            { label: 'Git / GitHub',        niveau: 70 },
          ]
        },
        {
          cat: 'Langues',
          skills: [
            { label: 'Français',         niveau: 100 },
            { label: 'Roumain',          niveau: 100 },
            { label: 'Anglais (TOEIC 910)', niveau: 88 },
          ]
        }
      ]
    }
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    this.$el.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  },
  template: `
    <section id="competences">
      <div class="eyebrow fade-in">Savoir-faire</div>
      <h2 class="section-title fade-in">Compétences techniques</h2>
      <div class="skills-wrap fade-in">
        <div
          v-for="groupe in groupes"
          :key="groupe.cat"
          class="skill-group"
        >
          <div class="skill-cat">{{ groupe.cat }}</div>
          <div
            v-for="skill in groupe.skills"
            :key="skill.label"
            class="skill-item"
          >
            {{ skill.label }}
            <div class="skill-bar-wrap">
              <div class="skill-bar" :style="{ width: skill.niveau + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

export default SkillsSection