import Countdown from '../components/Countdown.jsx'

export default function CountdownSlide() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Three years since I asked</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>Three years arrives in</h2>
      <div className="enter" style={{ animationDelay: '.2s' }}>
        <Countdown target="2026-09-19T00:00:00" />
      </div>
    </div>
  )
}
