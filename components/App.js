import Navbar from './layout/Navbar.js'
import router from './core/router.js'

const App = {
  components: { Navbar },
  mounted() {
    const cursor = document.createElement('div')
    const ring = document.createElement('div')
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
      <router-view></router-view>
    </div>
  `
}

const app = Vue.createApp(App)
app.use(router)
app.mount('#app')