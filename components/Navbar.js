import store from './store.js'
import t from './i18n.js'

const Navbar = {
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      store,
      langs: [
        { code: 'fr', flag: 'https://flagcdn.com/w20/fr.png', label: 'Français' },
        { code: 'en', flag: 'https://flagcdn.com/w20/gb.png', label: 'English' },
        { code: 'ro', flag: 'https://flagcdn.com/w20/ro.png', label: 'Română' }
      ]
    }
  },
  computed: {
    T() { return t[this.store.langue] }
  },
  mounted() {
    store.init()
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 50
    })
  },
  template: `
    <nav :class="{ scrolled: scrolled }">
      <a class="nav-logo" href="#">Portfolio</a>

      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#projets" @click="menuOpen = false">{{ T.nav.projets }}</a>
        <a href="#experience" @click="menuOpen = false">{{ T.nav.experience }}</a>
        <a href="#competences" @click="menuOpen = false">{{ T.nav.competences }}</a>
        <a href="#contact" @click="menuOpen = false">{{ T.nav.contact }}</a>
      </div>

      <div class="lang-switcher">
      <button
        v-for="lang in langs"
        :key="lang.code"
        class="lang-btn"
        :class="{ active: store.langue === lang.code }"
        @click="store.setLangue(lang.code)"
        :title="lang.label"
        >
        <img :src="lang.flag" :alt="lang.label" style="width:20px;height:14px;object-fit:cover;border-radius:2px;">
      </button>         
      </div>

      <button class="burger" @click="menuOpen = !menuOpen">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </nav>
  `
}

export default Navbar