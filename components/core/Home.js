import HeroSection from '../sections/HeroSection.js'
import ProjectsSection from '../sections/ProjectsSection.js'
import ExperienceSection from '../sections/ExperienceSection.js'
import SkillsSection from '../sections/SkillsSection.js'
import ContactForm from '../sections/ContactForm.js'

const Home = {
  components: {
    HeroSection, ProjectsSection,
    ExperienceSection, SkillsSection, ContactForm
  },
  template: `
    <div>
      <HeroSection />
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

export default Home