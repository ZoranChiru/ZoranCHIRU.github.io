import store from '../core/store.js'
import t from '../core/i18n.js'

const Navbar = {
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      projetsOpen: false,
      experiencesOpen: false,
      mobileProjetOpen: false,
      mobileExpOpen: false,
      closeTimer: null,
      isMobileView: window.innerWidth <= 768,
      store,
      langs: [
        { code: 'fr', flag: 'https://flagcdn.com/w20/fr.png', label: 'Français' },
        { code: 'en', flag: 'https://flagcdn.com/w20/gb.png', label: 'English' },
        { code: 'ro', flag: 'https://flagcdn.com/w20/ro.png', label: 'Română' }
      ],
      experiences_menu: {
        fr: [
          { label: 'ENSICAEN — École d\'ingénieur', lien: '/experience/ensicaen' },
          { label: 'NXP Semiconductors — Firmware', lien: '/experience/nxp' },
          { label: 'EDF CNPE Flamanville', lien: '/experience/edf' },
          { label: 'BUT GEII — IUT Cherbourg', lien: '/experience/but-geii' },
        ],
        en: [
          { label: 'ENSICAEN — Engineering school', lien: '/experience/ensicaen' },
          { label: 'NXP Semiconductors — Firmware', lien: '/experience/nxp' },
          { label: 'EDF CNPE Flamanville', lien: '/experience/edf' },
          { label: 'BUT GEII — IUT Cherbourg', lien: '/experience/but-geii' },
        ],
        ro: [
          { label: 'ENSICAEN — Școală de inginerie', lien: '/experience/ensicaen' },
          { label: 'NXP Semiconductors — Firmware', lien: '/experience/nxp' },
          { label: 'EDF CNPE Flamanville', lien: '/experience/edf' },
          { label: 'BUT GEII — IUT Cherbourg', lien: '/experience/but-geii' },
        ]
      }
    }
  },
  computed: {
    T() { return t[this.store.langue] },
    currentExpMenu() { return this.experiences_menu[this.store.langue] || this.experiences_menu.fr }
  },
  mounted() {
    store.init()
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 50
    })
    window.addEventListener('resize', () => {
      this.isMobileView = window.innerWidth <= 768
    })
  },
  methods: {
    startCloseTimer(menu) {
      this.closeTimer = setTimeout(() => {
        if (menu === 'projets') this.projetsOpen = false
        if (menu === 'experiences') this.experiencesOpen = false
      }, 300)
    },
    cancelCloseTimer() {
      clearTimeout(this.closeTimer)
    },
    toggleMobileProjets() {
      this.mobileProjetOpen = !this.mobileProjetOpen
      this.mobileExpOpen = false
    },
    toggleMobileExp() {
      this.mobileExpOpen = !this.mobileExpOpen
      this.mobileProjetOpen = false
    },
    navigateTo(lien) {
      this.projetsOpen = false
      this.experiencesOpen = false
      this.mobileProjetOpen = false
      this.mobileExpOpen = false
      this.menuOpen = false
      this.$router.push(lien)
    },
    goHome(section) {
      if (this.$route.path !== '/') {
        this.$router.push('/')
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }
      this.mobileProjetOpen = false
      this.mobileExpOpen = false
      this.menuOpen = false
    }
  },
  template: `
    <nav :class="{ scrolled: scrolled }">
      <div class="nav-logo" @click="navigateTo('/')">Portfolio</div>

      <div class="nav-links" :class="{ open: menuOpen }" :style="menuOpen ? 'display:flex !important; background:red !important;' : ''">
      <div style="color:white !important;font-size:30px !important;padding:20px;background:green;z-index:99999;position:relative;">TEST VISIBLE 123</div>
      
        <!-- PROJETS DROPDOWN -->
       <div class="nav-dropdown-wrap">
        <div class="nav-link-projects" style="color:white;display:block;padding:1.2rem 2rem;" @click="mobileProjetOpen = !mobileProjetOpen">
          {{ T.nav.projets }} ▾
        </div>
        <div v-if="mobileProjetOpen">
          <div v-for="item in T.nav.projets_menu" :key="item.lien"
            style="color:white;padding:0.9rem 3rem;display:block;border-bottom:1px solid rgba(122,52,16,0.25);"
            @click="navigateTo(item.lien)"
          >{{ item.label }}</div>
        </div>
      </div>

        <!-- EXPÉRIENCES DROPDOWN -->
       <div class="nav-dropdown-wrap">
          <div class="nav-link-projects" style="color:white;display:block;padding:1.2rem 2rem;" @click="mobileExpOpen = !mobileExpOpen">
            {{ T.nav.experience }} ▾
          </div>
          <div v-if="mobileExpOpen">
            <div v-for="item in currentExpMenu" :key="item.lien"
              style="color:white;padding:0.9rem 3rem;display:block;border-bottom:1px solid rgba(122,52,16,0.25);"
              @click="navigateTo(item.lien)"
            >{{ item.label }}</div>
          </div>
        </div>

        <div style="color:white;display:block;padding:1.2rem 2rem;border-bottom:1px solid rgba(122,52,16,0.25);" @click="goHome('competences')">{{ T.nav.competences }}</div>
        <div style="color:white;display:block;padding:1.2rem 2rem;" @click="goHome('contact')">{{ T.nav.contact }}</div>

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
          <img
            :src="lang.flag"
            :alt="lang.label"
            style="width:20px;height:14px;object-fit:cover;border-radius:2px;"
          />
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