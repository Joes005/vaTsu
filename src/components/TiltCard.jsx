import { useEffect, useRef } from 'react'

export default function TiltCard({ children, className = '', max = 10, baseRotate = 0, tag: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const idle = baseRotate ? `rotate(${baseRotate}deg)` : ''

  const handleMove = (e) => {
    if (reducedRef.current) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -max
    const ry = (px - 0.5) * max
    el.style.transform = `${idle} perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.04, 1.04, 1.04)`
  }
  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = idle
  }

  return (
    <Tag
      ref={ref}
      className={'tilt-card ' + className}
      style={idle ? { transform: idle } : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Tag>
  )
}
