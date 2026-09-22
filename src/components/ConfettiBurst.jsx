import { useEffect, useRef } from 'react'

const COLORS = ['#ff7a29', '#ffb87a', '#ffd9ac', '#ff9448']

export default function ConfettiBurst() {
  const ref = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const layer = ref.current
    if (reduced || !layer) return

    const count = 26
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span')
      p.className = 'confetti-piece'
      const angle = Math.random() * Math.PI * 2
      const dist = 90 + Math.random() * 160
      p.style.setProperty('--tx', Math.cos(angle) * dist + 'px')
      p.style.setProperty('--ty', Math.sin(angle) * dist - 40 + 'px')
      p.style.setProperty('--rot', Math.random() * 360 - 180 + 'deg')
      p.style.animationDelay = Math.random() * 0.15 + 's'
      if (Math.random() < 0.3) {
        p.textContent = '🧡'
        p.style.fontSize = '14px'
      } else {
        p.style.background = COLORS[i % COLORS.length]
      }
      layer.appendChild(p)
    }
    const t = setTimeout(() => {
      layer.innerHTML = ''
    }, 2200)
    return () => {
      clearTimeout(t)
      layer.innerHTML = ''
    }
  }, [])

  return <div className="confetti-burst" ref={ref} aria-hidden="true" />
}
