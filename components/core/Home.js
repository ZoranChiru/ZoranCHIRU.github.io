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
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactForm />
    </div>
  `
}

export default Home
