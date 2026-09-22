import { useState } from 'react'

const DODGE_LINES = ['not that one', 'try again', 'almost, but no', 'nice try', 'this button says no to that']

const BTN_W = 190

export default function FinalQuestion() {
  const [answered, setAnswered] = useState(false)
  const [dodgeCount, setDodgeCount] = useState(0)
  const [dodgeX, setDodgeX] = useState(0)

  // Slide the button sideways into the empty left/right gutter using a transform,
  // never position:fixed + raw pixel coordinates — transforms can't force the page
  // to scroll (html/body clip overflow), and the reach is capped by the actual
  // viewport width, so it's mathematically impossible to push this off-screen.
  const dodge = () => {
    const w = window.innerWidth
    const roomEachSide = Math.max(0, w / 2 - BTN_W / 2 - 16)
    const maxReach = Math.min(roomEachSide, 260)
    const dir = dodgeX <= 0 ? 1 : -1
    setDodgeX(dir * maxReach * (0.6 + Math.random() * 0.4))
    setDodgeCount((c) => c + 1)
  }

  if (answered) {
    return (
      <div className="finalq-page">
        <p className="eyebrow enter">Finally</p>
        <h2 className="enter heading-glow" style={{ animationDelay: '.08s' }}>
          I knew it. 🧡
        </h2>
        <p className="body-text lede enter" style={{ animationDelay: '.18s', marginTop: 18 }}>
          Whatever comes — I'm with you. Same as always, same as forever.
        </p>
      </div>
    )
  }

  return (
    <div className="finalq-page">
      <p className="eyebrow enter">Finally</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        I wanna ask you something...
      </h2>
      <p className="body-text enter" style={{ animationDelay: '.18s', marginTop: 12 }}>
        Enakku, innaikku varaikkum ellame nee. Nee illa na naa onnum illa. So edhu eppadi enna
        nadandhaalum, naa un kai pudippen nu nambikaiyaa vachurukken. Onnu — unnoda vaazhkaiyaa,
        illa, avalodha vaazhkaiyaa...!
      </p>
      <p className="lede enter" style={{ animationDelay: '.26s', marginTop: 8 }}>Now it's up to you, saami.</p>

      <div className="final-choice enter" style={{ animationDelay: '.36s', marginTop: 6 }}>
        <button className="cta final-yes" onClick={() => setAnswered(true)} type="button">
          Enna nadandhaalum paathukalam, naa unnoda irukken
        </button>
        <button
          className="final-no"
          style={{ transform: `translateX(-50%) translateX(${dodgeX}px)` }}
          onMouseEnter={dodge}
          onTouchStart={(e) => {
            e.preventDefault()
            dodge()
          }}
          onClick={dodge}
          type="button"
          aria-label="Decline"
        >
          {dodgeCount === 0
            ? 'Thambi venaam da, naa unnoda varala'
            : DODGE_LINES[Math.min(dodgeCount - 1, DODGE_LINES.length - 1)]}
        </button>
      </div>
    </div>
  )
}
