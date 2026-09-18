import { useState } from 'react'

const CHIPS = ['Kanna', 'Baby', 'Love', 'My favorite person']

export default function NamePicker({ nickname, onSetNickname, onNext }) {
  const [value, setValue] = useState('')

  const choose = (name) => {
    onSetNickname(name)
    onNext()
  }

  const submit = (e) => {
    e.preventDefault()
    choose(value.trim() || nickname)
  }

  return (
    <div className="slide-inner">
      <p className="eyebrow enter">One more thing</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        What should I call you for the rest of this?
      </h2>
      <p className="lede enter" style={{ animationDelay: '.18s' }}>
        Pick one, or type your own — I'll use it from here on.
      </p>
      <div className="chip-row enter" style={{ animationDelay: '.28s' }}>
        {CHIPS.map((c) => (
          <button key={c} className="chip-option" onClick={() => choose(c)}>{c}</button>
        ))}
      </div>
      <form className="name-form enter" style={{ animationDelay: '.36s' }} onSubmit={submit}>
        <input
          id="nickname-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="or type your own..."
          maxLength={24}
        />
        <button type="submit" className="cta small">Use this →</button>
      </form>
    </div>
  )
}
