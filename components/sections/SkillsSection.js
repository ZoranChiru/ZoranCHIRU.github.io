import store from '../core/store.js'
import t from '../core/i18n.js'

const SkillsSection = {
  data() {
    return {
      store,
      groupes: {
        fr: [
          {
            cat: 'Embarqué',
            skills: [
              { label: 'STM32 / ARM', niveau: 85 },
              { label: 'FreeRTOS', niveau: 75 },
              { label: 'Arduino', niveau: 90 },
              { label: 'ESP32', niveau: 70 }
            ]
          },
          {
            cat: 'Langages',
            skills: [
              { label: 'C / C++', niveau: 85 },
              { label: 'Python', niveau: 80 },
              { label: 'HTML/CSS/JS', niveau: 65 },
              { label: 'VHDL', niveau: 60 },
              { label: 'VBA', niveau: 60 }

            ]
          },
          {
            cat: 'Outils & Protocoles',
            skills: [
              { label: 'Proteus / KiCad', niveau: 75 },
              { label: 'ADS (simulation HF)', niveau: 70 },
              { label: 'UWB / NFC', niveau: 65 },
              { label: 'Git / Jira', niveau: 75 }
            ]
          },
          {
            cat: 'Langues',
            skills: [
              { label: 'Français', niveau: 100 },
              { label: 'Roumain', niveau: 100 },
              { label: 'Anglais (TOEIC 910)', niveau: 88 }
            ]
          }
        ],
        en: [
          {
            cat: 'Embedded',
            skills: [
              { label: 'STM32 / ARM', niveau: 85 },
              { label: 'FreeRTOS', niveau: 75 },
              { label: 'Arduino', niveau: 90 },
              { label: 'ESP32', niveau: 70 }
            ]
          },
          {
            cat: 'Languages',
            skills: [
              { label: 'C / C++', niveau: 85 },
              { label: 'Python', niveau: 80 },
              { label: 'HTML/CSS/JS', niveau: 65 },
              { label: 'VHDL', niveau: 60 },
              { label: 'VBA', niveau: 60 }
            ]
          },
          {
            cat: 'Tools & Protocols',
            skills: [
              { label: 'Proteus / KiCad', niveau: 75 },
              { label: 'ADS (HF simulation)', niveau: 70 },
              { label: 'UWB / NFC', niveau: 65 },
              { label: 'Git / Jira', niveau: 75 }
            ]
          },
          {
            cat: 'Languages spoken',
            skills: [
              { label: 'French', niveau: 100 },
              { label: 'Romanian', niveau: 100 },
              { label: 'English (TOEIC 910)', niveau: 88 }
            ]
          }
        ],
        ro: [
          {
            cat: 'Incorporate',
            skills: [
              { label: 'STM32 / ARM', niveau: 85 },
              { label: 'FreeRTOS', niveau: 75 },
              { label: 'Arduino', niveau: 90 },
              { label: 'ESP32', niveau: 70 }
            ]
          },
          {
            cat: 'Limbaje',
            skills: [
              { label: 'C / C++', niveau: 85 },
              { label: 'Python', niveau: 80 },
              { label: 'HTML/CSS/JS', niveau: 65 },
              { label: 'VHDL', niveau: 60 },
              { label: 'VBA', niveau: 60 }
            ]
          },
          {
            cat: 'Instrumente & Protocoale',
            skills: [
              { label: 'Proteus / KiCad', niveau: 75 },
              { label: 'ADS (simulare HF)', niveau: 70 },
              { label: 'UWB / NFC', niveau: 65 },
              { label: 'Git / Jira', niveau: 75 }
            ]
          },
          {
            cat: 'Limbi vorbite',
            skills: [
              { label: 'Franceză', niveau: 100 },
              { label: 'Română', niveau: 100 },
              { label: 'Engleză (TOEIC 910)', niveau: 88 }
            ]
          }
        ]
      }
    }
  },
  computed: {
    T() { return t[this.store.langue] },
    currentGroupes() { return this.groupes[this.store.langue] || this.groupes.fr }
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    this.$el.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  },
  template: `
    <section id="competences">
      <div class="eyebrow fade-in">{{ T.competences.eyebrow }}</div>
      <h2 class="section-title fade-in">{{ T.competences.titre }}</h2>
      <div class="skills-wrap fade-in">
        <div v-for="groupe in currentGroupes" :key="groupe.cat" class="skill-group">
          <div class="skill-cat">{{ groupe.cat }}</div>
          <div v-for="skill in groupe.skills" :key="skill.label" class="skill-item">
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