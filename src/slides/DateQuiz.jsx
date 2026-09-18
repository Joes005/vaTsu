import { useState } from 'react'

const OPTIONS = [
  { value: '5', label: '5th September' },
  { value: '19', label: '19th September' },
  { value: '30', label: '30th September' },
]
const CORRECT = '19'

export default function DateQuiz({ onNext }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Quick one before I tell you</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        Do you remember which day I finally asked?
      </h2>
      <div className="quiz-options enter" style={{ animationDelay: '.2s' }}>
        {OPTIONS.map((opt) => {
          const showState = selected !== null
          const isCorrect = opt.value === CORRECT
          let cls = 'quiz-option'
          if (showState && selected === opt.value) cls += isCorrect ? ' correct' : ' incorrect'
          else if (showState && isCorrect) cls += ' correct'
          return (
            <button
              key={opt.value}
              className={cls}
              disabled={selected !== null}
              onClick={() => setSelected(opt.value)}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
      {selected !== null && (
        <p className="quiz-feedback enter">
          {selected === CORRECT
            ? '🧡 Exactly — the 19th. You remembered.'
            : "Actually it was the 19th — but I love that you're guessing along with me."}
        </p>
      )}
      {selected !== null && (
        <button className="cta small enter" onClick={onNext}>Continue →</button>
      )}
    </div>
  )
}
