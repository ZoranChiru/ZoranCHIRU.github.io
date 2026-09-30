import store from '../core/store.js'
import t from '../core/i18n.js'

const SkillsSection = {
  data() {
    return {
      store,
      groupes: {
        fr: [
          { cat: 'Embarqué', skills: ['STM32 / ARM', 'FreeRTOS', 'I²C / SPI / UART', 'Arduino', 'ESP32'] },
          { cat: 'Électronique', skills: ['Conception PCB 4 couches', 'Mesure de précision courant / tension', 'Isolation galvanique', 'Électronique RF'] },
          { cat: 'Langages', skills: ['C / C++', 'Python (PySide6)', 'HTML / CSS / JS', 'VHDL', 'VBA'] },
          { cat: 'Outils & Protocoles', skills: ['KiCad / Proteus', 'LTspice', 'ADS (simulation HF)', 'IO-Link', 'UWB / NFC', 'Git / Jira'] },
          { cat: 'Langues', skills: ['Français (natif)', 'Roumain (natif)', 'Anglais (TOEIC 910)'] }
        ],
        en: [
          { cat: 'Embedded', skills: ['STM32 / ARM', 'FreeRTOS', 'I²C / SPI / UART', 'Arduino', 'ESP32'] },
          { cat: 'Electronics', skills: ['4 layer PCB design', 'Precision current / voltage measurement', 'Galvanic isolation', 'RF electronics'] },
          { cat: 'Programming', skills: ['C / C++', 'Python (PySide6)', 'HTML / CSS / JS', 'VHDL', 'VBA'] },
          { cat: 'Tools & Protocols', skills: ['KiCad / Proteus', 'LTspice', 'ADS (RF simulation)', 'IO-Link', 'UWB / NFC', 'Git / Jira'] },
          { cat: 'Spoken languages', skills: ['French (native)', 'Romanian (native)', 'English (TOEIC 910)'] }
        ],
        ro: [
          { cat: 'Sisteme încorporate', skills: ['STM32 / ARM', 'FreeRTOS', 'I²C / SPI / UART', 'Arduino', 'ESP32'] },
          { cat: 'Electronică', skills: ['Proiectare PCB pe 4 straturi', 'Măsurare precisă curent / tensiune', 'Izolare galvanică', 'Electronică RF'] },
          { cat: 'Limbaje de programare', skills: ['C / C++', 'Python (PySide6)', 'HTML / CSS / JS', 'VHDL', 'VBA'] },
          { cat: 'Instrumente & Protocoale', skills: ['KiCad / Proteus', 'LTspice', 'ADS (simulare RF)', 'IO-Link', 'UWB / NFC', 'Git / Jira'] },
          { cat: 'Limbi vorbite', skills: ['Franceză (nativă)', 'Română (nativă)', 'Engleză (TOEIC 910)'] }
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
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  },
  template: `
    <section id="competences">
      <div class="section-eyebrow reveal">{{ T.competences.eyebrow }}</div>
      <h2 class="section-title reveal">{{ T.competences.titre }}</h2>

      <div class="specs-table reveal">
        <div
          v-for="groupe in currentGroupes"
          :key="groupe.cat"
          class="specs-row"
        >
          <div class="specs-cat">{{ groupe.cat }}</div>
          <div class="specs-value">{{ groupe.skills.join(', ') }}</div>
        </div>
      </div>
    </section>
  `
}

export default SkillsSection
