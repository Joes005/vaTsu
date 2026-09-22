import { useEffect, useState } from 'react'

const PARTICLES = ['🧡', '✨', '🤍', '🧡', '✨']

export default function HeartTapBurst() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let nextId = 0

    const handler = (e) => {
      // Don't trigger on input elements or text selection
      if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes(e.target?.tagName)) return

      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX)
      const y = e.clientY ?? (e.touches && e.touches[0]?.clientY)
      if (x === undefined || y === undefined) return

      const char = PARTICLES[Math.floor(Math.random() * PARTICLES.length)]
      const drift = (Math.random() - 0.5) * 60
      const size = 16 + Math.random() * 12
      const id = ++nextId

      setItems((prev) => [...prev.slice(-14), { id, x, y, char, drift, size }])

      setTimeout(() => {
        setItems((prev) => prev.filter((it) => it.id !== id))
      }, 1200)
    }

    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  return (
    <div className="heart-tap-container" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className="heart-tap-particle"
          style={{
            left: it.x,
            top: it.y,
            fontSize: `${it.size}px`,
            '--drift-x': `${it.drift}px`,
          }}
        >
          {it.char}
        </span>
      ))}
    </div>
  )
}
