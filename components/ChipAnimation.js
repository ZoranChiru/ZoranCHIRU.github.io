import store from './store.js'
import t from './i18n.js'

const ChipAnimation = {
  mounted() {
    const gsapScript = document.createElement('script')
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    document.head.appendChild(gsapScript)

    gsapScript.onload = () => {
      const stScript = document.createElement('script')
      stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
      document.head.appendChild(stScript)
      stScript.onload = () => {
        gsap.registerPlugin(ScrollTrigger)
        this.initAnimations()
      }
    }
  },
  methods: {
    initAnimations() {
      // Zoom sur le caloduc cuivré (centre-gauche de l'image)
      gsap.fromTo(this.$refs.zoomImg,
        { scale: 1 },
        {
          scale: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: this.$refs.zoomSection,
            start: 'top top',
            end: '+=500',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          }
        }
      )

      // Texte apparaît au milieu du zoom
      gsap.fromTo(this.$refs.zoomText,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: this.$refs.zoomSection,
            start: 'top+=1000 top',
            end: 'top+=1500 top',
            scrub: true,
          }
        }
      )

      // Texte disparaît à la fin
      gsap.to(this.$refs.zoomText,
        {
          opacity: 0, y: -20,
          scrollTrigger: {
            trigger: this.$refs.zoomSection,
            start: 'top+=1800 top',
            end: 'top+=2200 top',
            scrub: true,
          }
        }
      )
    }
  },
  template: `
    <div class="zoom-section" ref="zoomSection">
      <div class="zoom-container">
        <img
          ref="zoomImg"
          src="assets/images/pcb.jpg"
          class="zoom-img"
          alt="Circuit embarqué"
        />
        <div class="zoom-overlay" ref="zoomText">
          <div class="zoom-label">Systèmes embarqués</div>
          <p class="zoom-desc">Conception · Validation · Intégration</p>
        </div>
      </div>
    </div>
  `
}

export default ChipAnimation