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
      isMobile: window.innerWidth <= 768,
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
      this.isMobile = window.innerWidth <= 768
      if (!this.isMobile) this.menuOpen = false
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

      <div class="nav-links" :class="{ open: menuOpen }">

        <!-- ======= PROJETS ======= -->
        <div
          class="nav-dropdown-wrap"
          @mouseenter="!isMobile && (cancelCloseTimer(), projetsOpen = true)"
          @mouseleave="!isMobile && startCloseTimer('projets')"
        >
          <div class="nav-link-projects" @click="isMobile && toggleMobileProjets()">
            {{ T.nav.projets }}
            <span class="dropdown-arrow" :class="{ open: isMobile ? mobileProjetOpen : projetsOpen }">▾</span>
          </div>

          <!-- DESKTOP : dropdown absolu -->
          <div
            v-if="!isMobile"
            class="nav-dropdown"
            :class="{ visible: projetsOpen }"
            @mouseenter="cancelCloseTimer()"
            @mouseleave="startCloseTimer('projets')"
          >
            <div
              v-for="item in T.nav.projets_menu"
              :key="item.lien"
              class="dropdown-item"
              @click="navigateTo(item.lien)"
            >{{ item.label }}</div>
          </div>

          <!-- MOBILE : submenu inline -->
          <div v-if="isMobile && mobileProjetOpen" class="mobile-submenu">
            <div
              v-for="item in T.nav.projets_menu"
              :key="item.lien"
              class="mobile-submenu-item"
              @click="navigateTo(item.lien)"
            >{{ item.label }}</div>
          </div>
        </div>

        <!-- ======= EXPÉRIENCES ======= -->
        <div
          class="nav-dropdown-wrap"
          @mouseenter="!isMobile && (cancelCloseTimer(), experiencesOpen = true)"
          @mouseleave="!isMobile && startCloseTimer('experiences')"
        >
          <div class="nav-link-projects" @click="isMobile && toggleMobileExp()">
            {{ T.nav.experience }}
            <span class="dropdown-arrow" :class="{ open: isMobile ? mobileExpOpen : experiencesOpen }">▾</span>
          </div>

          <!-- DESKTOP : dropdown absolu -->
          <div
            v-if="!isMobile"
            class="nav-dropdown"
            :class="{ visible: experiencesOpen }"
            @mouseenter="cancelCloseTimer()"
            @mouseleave="startCloseTimer('experiences')"
          >
            <div
              v-for="item in currentExpMenu"
              :key="item.lien"
              class="dropdown-item"
              @click="navigateTo(item.lien)"
            >{{ item.label }}</div>
          </div>

          <!-- MOBILE : submenu inline -->
          <div v-if="isMobile && mobileExpOpen" class="mobile-submenu">
            <div
              v-for="item in currentExpMenu"
              :key="item.lien"
              class="mobile-submenu-item"
              @click="navigateTo(item.lien)"
            >{{ item.label }}</div>
          </div>
        </div>

        <div class="nav-link" @click="goHome('competences')">{{ T.nav.competences }}</div>
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