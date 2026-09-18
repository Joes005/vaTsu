import { useEffect, useRef } from 'react'

export default function Embers() {
  const ref = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const layer = ref.current
    if (reduced || !layer) return

    for (let i = 0; i < 14; i++) {
      const e = document.createElement('div')
      e.className = 'ember'
      const size = 3 + Math.random() * 5
      e.style.width = size + 'px'
      e.style.height = size + 'px'
      e.style.left = Math.random() * 100 + '%'
      e.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px')
      e.style.animationDuration = (9 + Math.random() * 10) + 's'
      e.style.animationDelay = (Math.random() * 14) + 's'
      layer.appendChild(e)
    }

    return () => { layer.innerHTML = '' }
  }, [])

  return <div className="embers" ref={ref} />
}
