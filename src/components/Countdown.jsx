import { useEffect, useState } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown({ target }) {
  const [state, setState] = useState(null)

  useEffect(() => {
    const t = new Date(target)
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
  }, [target])

  if (!state) return null

  if (state.done) {
    return <p className="cd-done">🎉 Three years since I asked, Vatsu. Still the best yes I ever got.</p>
  }

  return (
    <>
      <div className="countdown">
        <div className="cd-tile"><div className="cd-num">{pad(state.d)}</div><div className="cd-label">Days</div></div>
        <div className="cd-tile"><div className="cd-num">{pad(state.h)}</div><div className="cd-label">Hrs</div></div>
        <div className="cd-tile"><div className="cd-num">{pad(state.m)}</div><div className="cd-label">Min</div></div>
        <div className="cd-tile"><div className="cd-num">{pad(state.s)}</div><div className="cd-label">Sec</div></div>
      </div>
      <p className="cd-note">Wherever you're reading this from, I'm counting the same seconds.</p>
    </>
  )
}
