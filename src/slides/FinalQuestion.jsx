import { useState } from 'react'
import ConfettiBurst from '../components/ConfettiBurst.jsx'

const DODGE_LINES = [
  'not that one 😉',
  'try again, saami',
  'almost, but no way',
  'nice try!',
  'this button only says YES to you',
]

const BTN_W = 190
const WHATSAPP_NUMBER = '918838415403'
const WHATSAPP_REPLY = 'I Love You Too da Joe... with our Orange Heart 🧡 Forever with you!'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_REPLY)}`

export default function FinalQuestion({ onRestart }) {
  const [answered, setAnswered] = useState(false)
  const [dodgeCount, setDodgeCount] = useState(0)
  const [dodgePos, setDodgePos] = useState({ x: 0, y: 0 })

  const dodge = () => {
    const w = window.innerWidth
    const roomEachSide = Math.max(0, w / 2 - BTN_W / 2 - 20)
    const maxReach = Math.min(roomEachSide, 220)
    const dirX = dodgePos.x <= 0 ? 1 : -1
    const newX = dirX * maxReach * (0.6 + Math.random() * 0.4)

    // On mobile screens, also jump slightly up/down playfully
    const yOffsets = [36, -32, 48, -40, 24]
    const newY = yOffsets[dodgeCount % yOffsets.length]

    setDodgePos({ x: newX, y: newY })
    setDodgeCount((c) => c + 1)
  }

  if (answered) {
    return (
      <div className="finalq-page finalq-celebrate">
        <ConfettiBurst />
        <div className="finalq-celebrate-glow" aria-hidden="true" />
        <p className="eyebrow enter">Together Forever</p>
        <h1 className="enter heading-glow" style={{ animationDelay: '.08s' }}>
          Enakku theriyum, saami... 🧡
        </h1>
        <div className="finalq-emotional-card enter" style={{ animationDelay: '.2s' }}>
          <p className="body-text lede">
            Nee en kaiya eppovum vida maatta nu enakku nalla theriyum.
          </p>
          <p className="body-text">
            Innum ethanai varusham aanaalum, ennoda ovvoru moochum unakaga mattum dhaan.
            Edhu vandhaalum, yaaru enna sonnaalum, naa unkooda dhaan iruppen — till my last breath.
          </p>
          <p className="finalq-closing-line">
            I Love You so much, Ammulu! 🧡
          </p>
        </div>

        <div className="finalq-action-row enter" style={{ animationDelay: '.35s' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta whatsapp-cta"
          >
            💌 Tell him: "I Love You Too" 🧡
          </a>
          {onRestart && (
            <button className="restart-btn" onClick={onRestart} type="button">
              ↺ Relive the story
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="finalq-page">
      <p className="eyebrow enter">Finally</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        I wanna ask you something...
      </h2>
      <p className="body-text enter" style={{ animationDelay: '.18s', marginTop: 14 }}>
        Enakku, innaikku varaikkum ellame nee. Nee illa na naa onnum illa. So edhu eppadi enna
        nadandhaalum, naa un kai pudippen nu nambikaiyaa vachurukken. Onnu — unnoda vaazhkaiyaa,
        illa, avalodha vaazhkaiyaa...!
      </p>
      <p className="lede enter" style={{ animationDelay: '.26s', marginTop: 8 }}>
        Now it's up to you, saami.
      </p>

      <div className="final-choice enter" style={{ animationDelay: '.36s', marginTop: 16 }}>
        <button className="cta final-yes" onClick={() => setAnswered(true)} type="button">
          Enna nadandhaalum paathukalam, naa unnoda irukken 🧡
        </button>
        <button
          className="final-no"
          style={{
            transform: `translateX(-50%) translate3d(${dodgePos.x}px, ${dodgePos.y}px, 0)`,
          }}
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
