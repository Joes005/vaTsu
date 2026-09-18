import { useEffect, useState } from 'react'

const STEPS = [
  { type: 'text', text: 'You mean everything to me', hold: 1700 },
  { type: 'logo', hold: 2100 },
  { type: 'text', text: 'I am in love with you', hold: 1700 },
  { type: 'text', text: 'as always', hold: 1500, accent: true },
]
const FADE = 450

export default function Intro({ onDone }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [hiding, setHiding] = useState(false)
  const [phase, setPhase] = useState('in')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(false)
      onDone?.()
      return
    }
    const timers = []
    let t = 0
    STEPS.forEach((step, i) => {
      t += step.hold
      timers.push(setTimeout(() => setHiding(true), t))
      t += FADE
      if (i < STEPS.length - 1) {
        const next = i + 1
        timers.push(
          setTimeout(() => {
            setStepIndex(next)
            setHiding(false)
          }, t)
        )
      } else {
        timers.push(setTimeout(() => setPhase('exit'), t))
        timers.push(
          setTimeout(() => {
            setVisible(false)
            onDone?.()
          }, t + 500)
        )
      }
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  if (!visible) return null

  const skip = () => {
    setPhase('exit')
    setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 480)
  }

  const step = STEPS[stepIndex]

  return (
    <div className={'intro' + (phase === 'exit' ? ' intro-exit' : '')} role="presentation">
      <svg className="intro-heart" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="introHeartGrad" cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#ffcf9e" />
            <stop offset="48%" stopColor="#ff7a29" />
            <stop offset="100%" stopColor="#a83c07" stopOpacity="0" />
          </radialGradient>
          <filter id="introHeartBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
        </defs>
        <path
          d="M50 90C50 90 6 60 6 32C6 16 18 6 33 6C41 6 47 10.5 50 17C53 10.5 59 6 67 6C82 6 94 16 94 32C94 60 50 90 50 90Z"
          fill="url(#introHeartGrad)"
          filter="url(#introHeartBlur)"
        />
      </svg>

      <div className="intro-flare" aria-hidden="true" />

      {step.type === 'text' && (
        <div className={'intro-line' + (step.accent ? ' intro-line-accent' : '') + (hiding ? ' intro-line-hide' : '')}>
          {step.text}
        </div>
      )}

      {step.type === 'logo' && (
        <div className={'intro-logo' + (hiding ? ' intro-line-hide' : '')}>
          <div className="intro-wordmark-wrap">
            <span className="wm-topline" aria-hidden="true" />
            <div className="intro-wordmark">
              <span className="wm-letter wm-v">v</span>
              <span className="wm-letter wm-a">a</span>
              <span className="wm-t">T</span>
              <span className="wm-letter wm-s">s</span>
              <span className="wm-letter wm-u">u</span>
              <span className="intro-heart-emoji">🧡</span>
            </div>
          </div>
        </div>
      )}

      <button className="intro-skip" onClick={skip} type="button" aria-label="Skip intro">
        Skip <span className="intro-skip-chevron">›</span>
      </button>
    </div>
  )
}
