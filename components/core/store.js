const store = Vue.reactive({
  langue: 'fr',
  setLangue(lang) {
    this.langue = lang
    localStorage.setItem('langue', lang)
  },
  init() {
    const saved = localStorage.getItem('langue')
    if (saved) this.langue = saved
  }
})

export default store