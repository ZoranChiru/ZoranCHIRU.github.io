import store from './store.js'
import t from './i18n.js'

const HeroSection = {
  data() {
    return { mouseX: 0, mouseY: 0, store }
  },
  computed: {
    T() { return t[this.store.langue] }
  },
  mounted() {
    window.addEventListener('mousemove', this.handleMouse)
  },
  unmounted() {
    window.removeEventListener('mousemove', this.handleMouse)
  },
  methods: {
    handleMouse(e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    },
    avatarStyle() {
      const el = this.$refs.avatarWrap
      if (!el) return {}
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (this.mouseX - cx) / window.innerWidth * 12
      const dy = (this.mouseY - cy) / window.innerHeight * 12
      return { transform: `translate(${dx}px, ${dy}px)` }
    },
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  },
  template: `
    <div class="hero">
      <div class="hero-desk-bg"></div>
      <div class="hero-overlay"></div>

      <div class="hero-avatar-wrap" ref="avatarWrap">
        <div class="hero-avatar-ring"></div>
        <div class="hero-avatar">
          <img
            src="assets/images/photo.png?v=2"
            :style="avatarStyle()"
            style="width:100%;height:100%;object-fit:cover;border-radius:50%;"
          />
        </div>
      </div>

      <div class="hero-content">
        <div class="hero-tag">{{ T.hero.tag }}</div>
        <h1 class="hero-name">Zoran<br><em>Chiru</em></h1>
        <p class="hero-desc">{{ T.hero.desc }}</p>
        <div class="hero-btns">
          <button class="btn-nav btn-primary" @click="scrollTo('projets')">
            {{ T.hero.btn_projets }}
          </button>
          <button class="btn-nav btn-outline" @click="scrollTo('contact')">
            {{ T.hero.btn_contact }}
          </button>
        </div>
      </div>

      <div class="scroll-hint">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </div>
  `
}

export default HeroSection