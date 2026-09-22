import { useEffect, useState } from 'react'
import Embers from './Embers.jsx'
import { useMagnetic } from './useMagnetic.js'

const ANSWER = '19092023'
const WHATSAPP_NUMBER = '918838415403'
const WHATSAPP_MESSAGE = 'Can you remind me the day? 🧡'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Gate({ onUnlock }) {
  const [stage, setStage] = useState('foryou') // foryou -> appear -> pinned -> open
  const [value, setValue] = useState('')
  const [shake, setShake] = useState(false)
  const [tries, setTries] = useState(0)
  const unlockRef = useMagnetic(0.25)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setStage('pinned')
      return
    }
    const t1 = setTimeout(() => setStage('appear'), 1500)
    const t2 = setTimeout(() => setStage('pinned'), 1500 + 1500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

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
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="gate">
      <Embers />

      {stage === 'foryou' && <p className="letter-foryou">It's for you.</p>}

      <div
        className={
          'letter-scroll-wrap' +
          (stage === 'appear' ? ' appear' : '') +
          (stage === 'pinned' ? ' pinned' : '') +
          (stage === 'open' ? ' opened' : '')
        }
        onClick={openLetter}
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
        <p className="letter-pin-hint">tap it — you'll need the password to read this letter ↗</p>
      )}

      {stage === 'open' && (
        <div className={'gate-shell letter-form-in' + (shake ? ' gate-shake' : '')}>
          <div className="gate-card enter">
            <p className="eyebrow" style={{ animationDelay: '0s' }}>Before you go in</p>
            <h1 className="enter" style={{ animationDelay: '.08s' }}>You can read this if you know this day.</h1>
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
                placeholder="DD / MM / YYYY"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button ref={unlockRef} className="cta small" type="submit">
                Unlock <span className="chevron">›</span>
              </button>
            </form>
            {tries > 0 && (
              <p className="gate-hint">
                Not quite. I just messaged you on WhatsApp — go check.{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Didn't open? Tap here →
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
