const { createRouter, createWebHashHistory } = VueRouter

import Home from './Home.js'
import ProjetRobot from '../projets/ProjetRobot.js'
import ProjetGrafcet from '../projets/ProjetGrafcet.js'
import ProjetMeteo from '../projets/ProjetMeteo.js'
import ProjetAutomatismes from '../projets/ProjetAutomatismes.js'
import ProjetDistributeur from '../projets/ProjetDistributeur.js'
import ProjetNXP from '../projets/ProjetNXP.js'
import ProjetBDE from '../projets/ProjetBDE.js'
import ExperienceENSICAEN from '../experience/ExperienceENSICAEN.js'
import ExperienceNXP from '../experience/ExperienceNXP.js'
import ExperienceEDF from '../experience/ExperienceEDF.js'
import ExperienceBUTGEII from '../experience/ExperienceBUT_GEII.js'

const routes = [
  { path: '/', component: Home },
  { path: '/projets/robot', component: ProjetRobot },
  { path: '/projets/grafcet', component: ProjetGrafcet },
  { path: '/projets/meteo', component: ProjetMeteo },
  { path: '/projets/automatismes', component: ProjetAutomatismes },
  { path: '/projets/distributeur', component: ProjetDistributeur },
  { path: '/projets/nxp', component: ProjetNXP },
  { path: '/projets/bde', component: ProjetBDE },
  { path: '/experience/ensicaen', component: ExperienceENSICAEN },
  { path: '/experience/nxp', component: ExperienceNXP },
  { path: '/experience/edf', component: ExperienceEDF },
  { path: '/experience/but-geii', component: ExperienceBUTGEII },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router