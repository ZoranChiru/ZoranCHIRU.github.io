import store from '../core/store.js'
import t from '../core/i18n.js'

const HeroSection = {
  data() {
    return { store }
  },
  computed: {
    T() { return t[this.store.langue] }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  },
  template: `
    <div class="hero">
      <div class="hero-desk-bg"></div>

      <div class="hero-content">
        <div class="hero-avatar-wrap">
          <img
            src="assets/images/autres/photo.png"
            alt="Zoran Chiru"
          />
        </div>

        <h1 class="hero-name">Zoran Chiru</h1>
        <p class="hero-tag">{{ T.hero.tag }}</p>

        <div class="hero-btns">
          <button class="btn-nav btn-primary" @click="scrollTo('projets')">
            {{ T.hero.btn_projets }}
          </button>
          <button class="btn-nav btn-outline" @click="scrollTo('contact')">
            {{ T.hero.btn_contact }}
          </button>
        </div>
      </div>
    </div>
  `
}

export default HeroSection
