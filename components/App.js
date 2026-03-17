import Navbar from './Navbar.js'
import HeroSection from './HeroSection.js'

const App = {
  components: { Navbar, HeroSection },
  template: `
    <div>
      <Navbar />
      <HeroSection />
      <p style="text-align:center;padding:4rem;color:var(--muted);">
        — autres sections à venir —
      </p>
    </div>
  `
}

const app = Vue.createApp(App)
app.mount('#app')