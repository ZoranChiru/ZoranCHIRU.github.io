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

        <!-- PROJETS DROPDOWN -->
        <div
          class="nav-dropdown-wrap"
          @mouseenter="!isMobileView && (cancelCloseTimer(), projetsOpen = true)"
          @mouseleave="!isMobileView && startCloseTimer('projets')"
        >
          <div
            class="nav-link-projects"
            @click="isMobileView ? toggleMobileProjets() : null"
          >
            {{ T.nav.projets }}
            <span class="dropdown-arrow" :class="{ open: isMobileView ? mobileProjetOpen : projetsOpen }">▾</span>
          </div>
          <div
            class="nav-dropdown"
            :class="{ visible: isMobileView ? mobileProjetOpen : projetsOpen }"
            @mouseenter="!isMobileView && cancelCloseTimer()"
            @mouseleave="!isMobileView && startCloseTimer('projets')"
          >
            <div
              v-for="item in T.nav.projets_menu"
              :key="item.lien"
              class="dropdown-item"
              @click="navigateTo(item.lien)"
            >{{ item.label }}</div>
          </div>
        </div>

        <!-- EXPÉRIENCES DROPDOWN -->
        <div
          class="nav-dropdown-wrap"
          @mouseenter="!isMobileView && (cancelCloseTimer(), experiencesOpen = true)"
          @mouseleave="!isMobileView && startCloseTimer('experiences')"
        >
          <div
            class="nav-link-projects"
            @click="isMobileView ? toggleMobileExp() : null"
            style="color:white !important; background:blue; display:block;"
          >
            {{ T.nav.experience }}
            <span class="dropdown-arrow" :class="{ open: isMobileView ? mobileExpOpen : experiencesOpen }">▾</span>
          </div>
          <div
            class="nav-dropdown"
            :class="{ visible: isMobileView ? mobileExpOpen : experiencesOpen }"
            @mouseenter="!isMobileView && cancelCloseTimer()"
            @mouseleave="!isMobileView && startCloseTimer('experiences')"
          >
            <div
              v-for="item in currentExpMenu"
              :key="item.lien"
              class="dropdown-item"
              @click="navigateTo(item.lien)"
            >{{ item.label }}</div>
          </div>
        </div>

        <div class="nav-link" @click="goHome('competences')" style="color:white !important; background:green; display:block;">{{ T.nav.competences }}</div>
        <div class="nav-link" @click="goHome('contact')">{{ T.nav.contact }}</div>

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