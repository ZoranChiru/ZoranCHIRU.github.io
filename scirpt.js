window.addEventListener('DOMContentLoaded', () => {

  // CURSOR
  const cursor = document.getElementById('cursor')
  const ring = document.getElementById('cursorRing')
  let mx = 0, my = 0, rx = 0, ry = 0

  window.addEventListener('mousemove', e => {
    mx = e.clientX
    my = e.clientY
    cursor.style.left = mx + 'px'
    cursor.style.top = my + 'px'
    cursor.style.opacity = 1
    ring.style.opacity = 1
  })

  function animRing() {
    rx += (mx - rx) * 0.12
    ry += (my - ry) * 0.12
    ring.style.left = rx + 'px'
    ring.style.top = ry + 'px'
    requestAnimationFrame(animRing)
  }
  animRing()

  document.querySelectorAll('a, button, .project-card, .contact-link').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'))
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'))
  })

  // AVATAR
  const avatarWrap = document.getElementById('avatarWrap')
  const avatarImg = avatarWrap ? avatarWrap.querySelector('img') : null
  if (avatarWrap && avatarImg) {
    window.addEventListener('mousemove', e => {
      const rect = avatarWrap.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / window.innerWidth * 18
      const dy = (e.clientY - cy) / window.innerHeight * 18
      avatarImg.style.transform = `translate(${dx}px, ${dy}px)`
    })
  }

  // FADE IN
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

})