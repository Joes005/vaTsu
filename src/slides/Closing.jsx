export default function Closing({ onRestart, nickname = 'Vatsu' }) {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">19 · 09 · 2026</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>Happy (almost) three years, {nickname}.</h2>
      <p className="lede enter" style={{ animationDelay: '.2s' }}>
        I'll be here when the gap closes — same as I was on the 19th.
      </p>
      <div
        className="enter"
        style={{
          animationDelay: '.32s',
          marginTop: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 12,
          letterSpacing: '.06em',
          color: 'var(--ink-soft)',
        }}
      >
        <span className="heart">🧡</span> together since 19.09.2023 — forever in progress
      </div>
      <button className="cta enter" style={{ animationDelay: '.44s' }} onClick={onRestart}>
        ↺ Read it again
      </button>
    </div>
  )
}
