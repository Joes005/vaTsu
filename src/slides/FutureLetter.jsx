import { useEffect, useState } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

const TARGET = '2026-09-23T00:00:00'

export default function FutureLetter({ nickname = 'Vatsu' }) {
  const [state, setState] = useState(null)

  useEffect(() => {
    const t = new Date(TARGET)
    const tick = () => {
      const diff = t - new Date()
      if (diff <= 0) {
        setState({ done: true })
        return
      }
      setState({
        done: false,
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!state) return null

  if (!state.done) {
    return (
      <div className="slide-inner">
        <p className="eyebrow enter">Locked until 23 · 09 · 2026</p>
        <h2 className="enter" style={{ animationDelay: '.08s' }}>
          One last page. It opens itself, in time.
        </h2>
        <p className="lede enter" style={{ animationDelay: '.18s' }}>
          Three years to the day since we made it official — 23.09.2023. There's a letter waiting
          here for that morning. Until then, it stays sealed.
        </p>
        <div className="countdown enter" style={{ animationDelay: '.3s' }}>
          <div className="cd-tile"><div className="cd-num">{pad(state.d)}</div><div className="cd-label">Days</div></div>
          <div className="cd-tile"><div className="cd-num">{pad(state.h)}</div><div className="cd-label">Hrs</div></div>
          <div className="cd-tile"><div className="cd-num">{pad(state.m)}</div><div className="cd-label">Min</div></div>
          <div className="cd-tile"><div className="cd-num">{pad(state.s)}</div><div className="cd-label">Sec</div></div>
        </div>
        <p className="cd-note enter" style={{ animationDelay: '.4s' }}>
          Come back on the 23rd. I'll still be here — and so will this.
        </p>
      </div>
    )
  }

  return (
    <div className="slide-inner">
      <p className="eyebrow enter">23 · 09 · 2026 — three years, official</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>It's here. So this one's for you, {nickname}.</h2>
      <div className="enter" style={{ animationDelay: '.2s', marginTop: 20 }}>
        <p className="body-text">
          [Placeholder letter — write this closer to the date. What these three years actually
          meant, what changed, what didn't, and why it was always going to be you.]
        </p>
      </div>
      <p className="sign enter" style={{ animationDelay: '.3s' }}>— still yours, three years in 🧡</p>
    </div>
  )
}
