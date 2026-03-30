import store from '../core/store.js'
import t from '../core/i18n.js'

const ProjetRobot = {
  data() {
    return { store, lightbox: null }
  },
  computed: {
    T() { return t[this.store.langue].robot }
  },
  methods: {
    openLightbox(src) { this.lightbox = src },
    closeLightbox() { this.lightbox = null },
    goBack() {
      this.$router.push('/')
      setTimeout(() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }), 100)
    },
    goPrev() { this.$router.push('/projets/grafcet') },
    goNext() { this.$router.push('/projets/bde') }
  },
  template: `
    <div class="projet-page">

      <div v-if="lightbox" class="lightbox" @click="closeLightbox()">
        <div class="lightbox-inner" @click.stop>
          <img :src="lightbox" alt="Photo agrandie" />
          <button class="lightbox-close" @click="closeLightbox()">✕</button>
        </div>
      </div>

      <div class="projet-hero">
        <div class="projet-hero-bg" style="background-image:url('assets/images/pilomo/robot-pilomo.png')"></div>
        <div class="projet-hero-overlay"></div>
        <div class="projet-hero-content">
          <div class="projet-badge">{{ T.badge }}</div>
          <h1 class="projet-h1">{{ T.h1_1 }}<br><em>{{ T.h1_2 }}</em></h1>
          <div class="projet-meta">
            <span class="meta-item">{{ T.meta_equipe }}</span>
            <span class="meta-item">{{ T.meta_duree }}</span>
            <span class="meta-item">{{ T.meta_robot }}</span>
          </div>
          <div class="projet-tags">
            <span class="tag gold">🏆 1er Prix IUT Cherbourg</span>
            <span class="tag">Arduino</span>
            <span class="tag">C</span>
            <span class="tag">PWM</span>
            <span class="tag">Pont en H</span>
            <span class="tag">Soudage PCB</span>
          </div>
        </div>
      </div>

      <div class="projet-body">

        <!-- CONTEXTE -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.contexte_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.contexte_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.contexte_p1 }}</p>
              <p>{{ T.contexte_p2 }}</p>
            </div>
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/pilomo/robot-pilomo.png')">
                <img src="assets/images/pilomo/robot-pilomo.png" alt="Robot Pilomo" />
                <div class="media-caption">{{ T.photo1_caption }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- CONCEPTION ÉLECTRONIQUE -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.archi_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.archi_titre }}</h2>
          <div class="projet-split reverse">
            <div class="projet-split-img">
              <div class="media-item clickable-img" @click="openLightbox('assets/images/pilomo/pcb-pilomo.png')">
                <img src="assets/images/pilomo/pcb-pilomo.png" alt="PCB Pilomo" />
                <div class="media-caption">{{ T.photo_pcb_caption }}</div>
              </div>
            </div>
            <div class="projet-split-text">
              <p>{{ T.archi_p }}</p>
            </div>
          </div>
          <div style="margin:1.5rem auto 0; max-width:480px;">
            <div class="media-item clickable-img" @click="openLightbox('assets/images/pilomo/l298n-test.png')">
              <img src="assets/images/pilomo/l298n-test.png" alt="Tests composants" />
              <div class="media-caption">{{ T.photo_test_caption }}</div>
            </div>
          </div>
          <div class="specs-grid" style="margin-top:2rem;">
            <div class="spec-item"><div class="spec-label">Microcontrôleur</div><div class="spec-value">Arduino ATmega</div></div>
            <div class="spec-item"><div class="spec-label">Capteurs ligne</div><div class="spec-value">4× GP2D/GP2G IR</div></div>
            <div class="spec-item"><div class="spec-label">Régulateur</div><div class="spec-value">78L05 (5V)</div></div>
            <div class="spec-item"><div class="spec-label">Transistor</div><div class="spec-value">BUZ11 MOSFET</div></div>
            <div class="spec-item"><div class="spec-label">Commande moteurs</div><div class="spec-value">Pont en H / PWM</div></div>
            <div class="spec-item"><div class="spec-label">Alimentation</div><div class="spec-value">Batterie embarquée</div></div>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- PROGRAMMATION -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.code_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.code_titre }}</h2>
          <p>{{ T.code_p }}</p>
          <div class="code-block">
            <div class="code-header">
              <span>robot_suiveur.ino</span>
              <span>Arduino C</span>
            </div>
            <pre>
<span style="color:#6a9955">// Calibration distance capteur IR</span>
<span style="color:#7A3410">float</span> Calibration(<span style="color:#7A3410">float</span> v) {
  <span style="color:#7A3410">float</span> a=62.3, b=-1.07;
  <span style="color:#7A3410">return</span> a * pow(v, b);
}

<span style="color:#7A3410">void</span> loop() {
  <span style="color:#7A3410">float</span> tension = (analogRead(gp2g) * 5.0) / 1023.0;
  <span style="color:#7A3410">float</span> d = Calibration(tension);
  <span style="color:#7A3410">if</span> (d > 23) {
    analogWrite(D5, 75); <span style="color:#6a9955">// Moteur droit</span>
    analogWrite(D6, 75); <span style="color:#6a9955">// Moteur gauche</span>
  }
}</pre>
          </div>
        </div>

        <div class="projet-divider"></div>

        <!-- COMPÉTITION -->
        <div class="projet-section">
          <div class="projet-eyebrow">{{ T.resultats_eyebrow }}</div>
          <h2 class="projet-h2">{{ T.resultats_titre }}</h2>
          <div class="projet-split">
            <div class="projet-split-text">
              <p>{{ T.resultats_p }}</p>
            </div>
          </div>
          <div style="margin:1.5rem auto 0; max-width:580px;">
            <div class="media-item">
              <video src="assets/videos/pilomo/robotsuiveurdeligne.MP4" controls muted playsinline style="width:100%;height:280px;object-fit:cover;"></video>
              <div class="media-caption">{{ T.video1_caption }}</div>
            </div>
          </div>
          <div style="margin:1rem auto 0; max-width:580px;">
            <div class="media-item">
              <video src="assets/videos/pilomo/robotsuiveurdeligne2.MP4" controls muted playsinline style="width:100%;height:280px;object-fit:cover;"></video>
              <div class="media-caption">{{ T.video2_caption }}</div>
            </div>
          </div>
          <div class="results-row" style="margin-top:2rem;">
            <div class="result-item">
              <span class="result-num">1er</span>
              <span class="result-label">Classement final</span>
            </div>
            <div class="result-item">
              <span class="result-num">4</span>
              <span class="result-label">Capteurs IR</span>
            </div>
            <div class="result-item">
              <span class="result-num">2022</span>
              <span class="result-label">Année</span>
            </div>
          </div>
        </div>

        <div class="projet-nav">
          <button class="projet-nav-btn" @click="goPrev()">← Feu tricolore</button>
          <button class="projet-nav-btn" @click="goBack()">↑ Projets</button>
          <button class="projet-nav-btn" @click="goNext()">BDE →</button>
        </div>

      </div>
    </div>
  `
}

export default ProjetRobot