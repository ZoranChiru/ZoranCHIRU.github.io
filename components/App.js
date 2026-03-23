import Navbar from './layout/Navbar.js'
import router from './core/router.js'

const App = {
  components: { Navbar },
  template: `
    <div>
      <Navbar />
      <router-view></router-view>
    </div>
  `
}

const app = Vue.createApp(App)
app.use(router)
app.mount('#app')