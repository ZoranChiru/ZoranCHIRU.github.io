// Cursor
const cursor = document.getElementById('cursor')
const ring = document.getElementById('cursorRing')
let mx = 0, my = 0, rx = 0, ry = 0

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY
  cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
})

function animRing() {
  rx += (mx - rx) * 0.12
  ry += (my - ry) *.12
  ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
  requestAnimationFrame(animRing)
}
animRing()

document.querySelectorAll('a, button, .project-card, .contact-link').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'))
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'))
})

// Avatar suit la souris
const avatarInitials = document.getElementById('avatarInitials')
const avatarWrap = document.getElementById('avatarWrap')
if (avatarWrap) {
  document.addEventListener('mousemove', e => {
    const rect = avatarWrap.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / window.innerWidth * 18
    const dy = (e.clientY - cy) / window.innerHeight * 18
    avatarInitials.style.transform = `translate(${dx}px, ${dy}px)`
  })
}

// Fade in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80)
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))