import { useState } from 'react'

const OPTIONS = [
  { id: 'missing', emoji: '🧡', label: 'Missing you' },
  { id: 'low', emoji: '😔', label: 'A little low' },
  { id: 'hanging', emoji: '🙂', label: 'Hanging in there' },
  { id: 'excited', emoji: '😄', label: 'Excited for you' },
]

const RESPONSES = {
  missing: "Yeah. Same here, honestly — that's most of why I built this.",
  low: "I figured. Come here — let's try to fix that a little, page by page.",
  hanging: "That's fair, steady counts for a lot. Let's add something good to today.",
  excited: "I love that energy. Hold onto it — it's contagious from here too.",
}

export default function MoodPicker({ onSetMood, onNext }) {
  const [picked, setPicked] = useState(null)

  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Quick check-in</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        How are you feeling about the distance today?
      </h2>
      <div className="mood-grid enter" style={{ animationDelay: '.2s' }}>
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            className={'mood-option' + (picked === opt.id ? ' selected' : '')}
            disabled={picked !== null}
            onClick={() => { setPicked(opt.id); onSetMood(opt.id) }}
          >
            <span className="mood-emoji">{opt.emoji}</span>
            {opt.label}
          </button>
        ))}
      </div>
      {picked && <p className="quiz-feedback enter">{RESPONSES[picked]}</p>}
      {picked && (
        <button className="cta small enter" onClick={onNext}>Continue →</button>
      )}
    </div>
  )
}
