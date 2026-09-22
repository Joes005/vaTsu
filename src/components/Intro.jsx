import { useEffect, useRef, useState } from 'react'

const STEPS = [
  { type: 'text', text: 'You mean everything to me', hold: 3800 },
  { type: 'logo', hold: 4200 },
  { type: 'text', text: 'I am in love with you', hold: 3600 },
  { type: 'text', text: 'as always', hold: 3400, accent: true },
]
const FADE = 700

export default function Intro({ onDone }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [hiding, setHiding] = useState(false)
  const [phase, setPhase] = useState('in')
  const [visible, setVisible] = useState(true)
  const timerRef = useRef([])

  const clearAllTimers = () => {
    timerRef.current.forEach(clearTimeout)
    timerRef.current = []
  }

  const runStep = (index) => {
    clearAllTimers()
    setHiding(false)
    setStepIndex(index)

    const currentStep = STEPS[index]
    const tHold = setTimeout(() => {
      setHiding(true)
    }, currentStep.hold)

    const tNext = setTimeout(() => {
      if (index < STEPS.length - 1) {
        runStep(index + 1)
      } else {
        setPhase('exit')
        const tExit = setTimeout(() => {
          setVisible(false)
          onDone?.()
        }, 600)
        timerRef.current.push(tExit)
      }
    }, currentStep.hold + FADE)

    timerRef.current.push(tHold, tNext)
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(false)
      onDone?.()
      return
    }

    runStep(0)
    return () => clearAllTimers()
  }, [])

  if (!visible) return null

  const handleNextOrSkip = (e) => {
    e?.stopPropagation?.()
    if (stepIndex < STEPS.length - 1) {
      runStep(stepIndex + 1)
    } else {
      setPhase('exit')
      clearAllTimers()
      setTimeout(() => {
        setVisible(false)
        onDone?.()
      }, 500)
    }
  }

  const skip = (e) => {
    e?.stopPropagation?.()
    clearAllTimers()
    setPhase('exit')
    setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 480)
  }

  const step = STEPS[stepIndex]

  return (
    <div
      className={'intro' + (phase === 'exit' ? ' intro-exit' : '')}
      onClick={handleNextOrSkip}
      role="presentation"
    >
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
        <div
          className={
            'intro-line' +
            (step.accent ? ' intro-line-accent' : '') +
            (hiding ? ' intro-line-hide' : '')
          }
          key={step.text}
        >
          {step.text}
        </div>
      )}

      {step.type === 'logo' && (
        <div className={'intro-logo' + (hiding ? ' intro-line-hide' : '')} key="logo">
          <div className="intro-wordmark-wrap">
            <div className="wm-eyebrow-pill">
              <span className="wm-sparkle">✨</span>
              <span>19 · 09 · 2023</span>
              <span className="wm-sparkle">✨</span>
            </div>

            <div className="intro-wordmark">
              <span className="wm-letter wm-v">v</span>
              <span className="wm-letter wm-a">a</span>
              <span className="wm-t-wrap">
                <span className="wm-t-sparkle" aria-hidden="true">✦</span>
                <span className="wm-t">T</span>
              </span>
              <span className="wm-letter wm-s">s</span>
              <span className="wm-letter wm-u">u</span>
              <span className="intro-heart-emoji">🧡</span>
            </div>

            <div className="wm-bottom-row">
              <span className="wm-rule-line" />
              <span className="wm-tagline">Nee · Naan · Namakaga</span>
              <span className="wm-rule-line" />
            </div>
          </div>
        </div>
      )}

      <div className="intro-progress-bar" aria-hidden="true">
        {STEPS.map((_, i) => (
          <span
            key={i}
            className={'intro-progress-dot' + (i === stepIndex ? ' active' : i < stepIndex ? ' done' : '')}
          />
        ))}
      </div>

      <div className="intro-tap-hint" aria-hidden="true">
        tap anywhere to continue
      </div>

      <button className="intro-skip" onClick={skip} type="button" aria-label="Skip intro">
        Skip <span className="intro-skip-chevron">›</span>
      </button>
    </div>
  )
}
