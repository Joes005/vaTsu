import { useEffect, useState } from 'react'
import AnniversaryReveal from '../components/AnniversaryReveal.jsx'

function pad(n) {
  return String(n).padStart(2, '0')
}

const TARGET = '2026-09-23T18:30:00'

export default function FutureLetter({ onLockNext }) {
  const [state, setState] = useState(null)

  useEffect(() => {
    onLockNext?.(true)
    return () => onLockNext?.(false)
  }, [])

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

  useEffect(() => {
    if (state?.done) onLockNext?.(false)
  }, [state, onLockNext])

  if (!state) return null

  if (!state.done) {
    return (
      <div className="slide-inner">
        <p className="eyebrow enter">Locked until 23 · 09 · 2026 · 6:30 PM</p>
        <h2 className="enter" style={{ animationDelay: '.08s' }}>
          One last page. It opens itself, in time.
        </h2>
        <p className="lede enter" style={{ animationDelay: '.18s' }}>
          Three years to the day since we made it official — 23.09.2023. There's something
          waiting here for that evening. Until then, it stays sealed.
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
      <p className="eyebrow enter">23 · 09 · 2026 · 6:30 PM — three years, official</p>
      <AnniversaryReveal />
    </div>
  )
}
