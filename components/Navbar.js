const Navbar = {
  data() {
    return {
      scrolled: false,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 50
    })
  },
  template: `
    <nav :class="{ scrolled: scrolled }">
      <a class="nav-logo" href="#">Z<span>.</span>Chiru</a>

      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#projets" @click="menuOpen = false">Projets</a>
        <a href="#experience" @click="menuOpen = false">Expérience</a>
        <a href="#competences" @click="menuOpen = false">Compétences</a>
        <a href="#contact" @click="menuOpen = false">Contact</a>
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