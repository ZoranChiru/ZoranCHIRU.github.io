import Navbar from './Navbar.js'
import HeroSection from './HeroSection.js'
import ChipAnimation from './ChipAnimation.js'
import ProjectsSection from './ProjectsSection.js'
import ExperienceSection from './ExperienceSection.js'
import SkillsSection from './SkillsSection.js'
import ContactForm from './ContactForm.js'

const App = {
  components: {
    Navbar, HeroSection, ChipAnimation,
    ProjectsSection, ExperienceSection,
    SkillsSection, ContactForm
  },
  mounted() {
    // CURSOR
    const cursor = document.createElement('div')
    const ring = document.createElement('div')
    cursor.id = 'cursor'
    ring.id = 'cursorRing'
    cursor.className = 'cursor'
    ring.className = 'cursor-ring'
    document.body.appendChild(cursor)
    document.body.appendChild(ring)

    let mx = 0, my = 0, rx = 0, ry = 0

    window.addEventListener('mousemove', e => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      cursor.style.opacity = 1
      ring.style.opacity = 1
    })

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(animRing)
    }
    animRing()
  },
  template: `
    <div>
      <Navbar />
      <HeroSection />
      <ChipAnimation />
      <div class="section-divider"></div>
      <ProjectsSection />
      <div class="section-divider"></div>
      <ExperienceSection />
      <div class="section-divider"></div>
      <SkillsSection />
      <div class="section-divider"></div>
      <ContactForm />
      <footer>
        <p>© 2026 Zoran Chiru — ENSICAEN GPSE</p>
        <p>Caen, Normandie</p>
      </footer>
    </div>
  `
}

const app = Vue.createApp(App)
app.mount('#app')