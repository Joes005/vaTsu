import { useEffect, useRef, useState } from 'react'
import ConfettiBurst from './ConfettiBurst.jsx'
import SwipeCards from './SwipeCards.jsx'
import { LOVE_ITEMS } from './loveItems.js'

export default function AnniversaryReveal() {
  const [step, setStep] = useState('announce')
  const timerRef = useRef([])

  const clearTimers = () => {
    timerRef.current.forEach(clearTimeout)
    timerRef.current = []
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const t1 = setTimeout(() => setStep('promise'), 4800)
    const t2 = setTimeout(() => setStep('tease'), 4800 + 5400)
    timerRef.current.push(t1, t2)

    return () => clearTimers()
  }, [])

  const advanceFromAnnounce = () => {
    clearTimers()
    setStep('promise')
    const t2 = setTimeout(() => setStep('tease'), 5400)
    timerRef.current.push(t2)
  }

  const advanceFromPromise = () => {
    clearTimers()
    setStep('tease')
  }

  if (step === 'announce') {
    return (
      <div className="reveal-stage" onClick={advanceFromAnnounce} role="button" tabIndex={0}>
        <ConfettiBurst />
        <p className="reveal-stage-text reveal-fade-cycle">
          Ammulu,
          <br />
          <span className="reveal-stage-accent">Happiest 3rd Year Anniversary</span>
          <br />
          Dear 🎉
        </p>
        <span className="reveal-tap-hint">tap anywhere to continue</span>
      </div>
    )
  }

  if (step === 'promise') {
    return (
      <div className="reveal-stage" onClick={advanceFromPromise} role="button" tabIndex={0}>
        <p className="reveal-stage-text reveal-fade-cycle">
          I Love You.
          <br />
          <span className="reveal-stage-accent">And I Will Love You</span>
          <br />
          Till My Last Breath. 🧡
        </p>
        <span className="reveal-tap-hint">tap anywhere to continue</span>
      </div>
    )
  }

  if (step === 'tease') {
    return (
      <div className="reveal-stage">
        <p className="reveal-stage-text reveal-fade-in">
          Specially, I love
          <br />
          <span className="reveal-stage-accent">3 things</span> about you...
        </p>
        <button className="reveal-swipe-cta" onClick={() => setStep('cards')} type="button">
          if you want to know
          <span className="reveal-swipe-hint">swipe cards →</span>
        </button>
      </div>
    )
  }

  const cards = [
    <div className="love-card-content" key="c1">
      <span className="love-card-emoji" aria-hidden="true">😤</span>
      <p className="love-card-big">1. I love your anger</p>
      <p className="love-card-sub">unna thitta vekkura antha kovam kooda azhagu dhaan</p>
    </div>,
    <div className="love-card-content" key="c2">
      <span className="love-card-emoji" aria-hidden="true">🧸</span>
      <p className="love-card-big">2. I love your small belly</p>
      <p className="love-card-sub">my most favorite place in the whole universe</p>
    </div>,
    <div className="love-card-content" key="c3">
      <span className="love-card-emoji" aria-hidden="true">😏</span>
      <p className="love-card-twist">Oh, you thought only three?!</p>
      <p className="love-card-sub">swipe one more time...</p>
    </div>,
    <div className="love-card-content love-card-cloud-wrap" key="c4">
      <p className="love-card-cloud-title">okay fine, here's the real list —</p>
      <ul className="love-cloud">
        {LOVE_ITEMS.slice(2).map((item, i) => (
          <li key={item} style={{ animationDelay: i * 0.025 + 's' }}>
            {i + 3}. I love {item}
          </li>
        ))}
      </ul>
      <p className="love-card-cloud-note">Even I love your name, dear.</p>
      <p className="love-card-cloud-end">— and everything else I haven't found words for yet. 🧡</p>
    </div>,
  ]

  return (
    <div className="reveal-stage reveal-stage-cards">
      <SwipeCards cards={cards} />
    </div>
  )
}
