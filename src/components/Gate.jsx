import { useEffect, useRef, useState } from 'react'
import Embers from './Embers.jsx'
import { useMagnetic } from './useMagnetic.js'

const ANSWER = '19092023'
const WHATSAPP_NUMBER = '918838415403'
const WHATSAPP_MESSAGE = 'Ammulu, the date I asked you is 19.09.2023 🧡'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Gate({ onUnlock }) {
  const [stage, setStage] = useState('foryou') // foryou -> appear -> pinned -> open
  const [value, setValue] = useState('')
  const [shake, setShake] = useState(false)
  const [tries, setTries] = useState(0)
  const unlockRef = useMagnetic(0.25)
  const timerRef = useRef([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setStage('pinned')
      return
    }
    const t1 = setTimeout(() => setStage('appear'), 1600)
    const t2 = setTimeout(() => setStage('pinned'), 3200)
    timerRef.current.push(t1, t2)

    return () => timerRef.current.forEach(clearTimeout)
  }, [])

  const skipToPin = () => {
    if (stage === 'foryou' || stage === 'appear') {
      timerRef.current.forEach(clearTimeout)
      setStage('pinned')
    }
  }

  const openLetter = () => {
    if (stage !== 'pinned') return
    setStage('open')
  }

  const submit = (e) => {
    e.preventDefault()
    const digits = value.replace(/\D/g, '')
    if (digits === ANSWER) {
      onUnlock()
      return
    }
    setTries((t) => t + 1)
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  return (
    <div className="gate" onClick={skipToPin}>
      <Embers />

      {stage === 'foryou' && (
        <div className="letter-foryou-wrap">
          <p className="letter-foryou">It's for you, Ammulu.</p>
          <span className="gate-sub-hint">tap anywhere</span>
        </div>
      )}

      <div
        className={
          'letter-scroll-wrap' +
          (stage === 'appear' ? ' appear' : '') +
          (stage === 'pinned' ? ' pinned' : '') +
          (stage === 'open' ? ' opened' : '')
        }
        onClick={(e) => {
          e.stopPropagation()
          openLetter()
        }}
        role={stage === 'pinned' ? 'button' : undefined}
        aria-label={stage === 'pinned' ? 'Open the letter' : undefined}
        tabIndex={stage === 'pinned' ? 0 : undefined}
        onKeyDown={(e) => {
          if (stage === 'pinned' && (e.key === 'Enter' || e.key === ' ')) openLetter()
        }}
      >
        <span className="letter-scroll" aria-hidden="true">📜</span>
      </div>

      {stage === 'pinned' && (
        <div
          className="letter-pin-hint"
          onClick={(e) => {
            e.stopPropagation()
            openLetter()
          }}
        >
          <span className="pin-pulse">💌</span>
          <p>Tap the scroll to unlock the letter</p>
        </div>
      )}

      {stage === 'open' && (
        <div className={'gate-shell letter-form-in' + (shake ? ' gate-shake' : '')} onClick={(e) => e.stopPropagation()}>
          <div className="gate-card enter">
            <p className="eyebrow" style={{ animationDelay: '0s' }}>
              Before you step inside
            </p>
            <h1 className="enter" style={{ animationDelay: '.08s' }}>
              You can read this if you remember this day.
            </h1>
            <p className="gate-clue enter" style={{ animationDelay: '.18s' }}>
              <span className="gate-clue-label">Clue</span> 🧡 &gt;&gt;&gt; 💙
            </p>
            <p className="lede enter" style={{ animationDelay: '.28s' }}>
              What's the date I asked you to be mine?
            </p>
            <form className="gate-form enter" style={{ animationDelay: '.32s' }} onSubmit={submit}>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                autoFocus
                placeholder="DD / MM / YYYY (eg. 19092023)"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button ref={unlockRef} className="cta small" type="submit">
                Unlock <span className="chevron">›</span>
              </button>
            </form>
            {tries > 0 && (
              <p className="gate-hint">
                Chinna mistake! Namma special date niyabagam illaya?{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Ask Joe on WhatsApp for the date →
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
