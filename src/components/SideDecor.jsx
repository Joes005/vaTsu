const LEFT_ITEMS = [
  { emoji: '🧡', top: '10%', size: 32, delay: '0s', dur: '7s' },
  { emoji: '✨', top: '28%', size: 20, delay: '1.1s', dur: '6s' },
  { emoji: '💌', top: '48%', size: 28, delay: '2.2s', dur: '8s' },
  { emoji: '🌙', top: '68%', size: 24, delay: '.6s', dur: '7.5s' },
  { emoji: '🫶', top: '86%', size: 26, delay: '1.8s', dur: '6.5s' },
]

const RIGHT_ITEMS = [
  { emoji: '⭐', top: '14%', size: 22, delay: '.8s', dur: '7s' },
  { emoji: '🧡', top: '34%', size: 28, delay: '1.9s', dur: '6.8s' },
  { emoji: '😊', top: '54%', size: 26, delay: '.3s', dur: '7.6s' },
  { emoji: '✨', top: '73%', size: 18, delay: '2.4s', dur: '6.2s' },
  { emoji: '🕊️', top: '90%', size: 24, delay: '1.2s', dur: '8s' },
]

export default function SideDecor() {
  return (
    <>
      <div className="side-decor side-decor-left" aria-hidden="true">
        {LEFT_ITEMS.map((it, i) => (
          <span
            key={i}
            className="side-decor-item"
            style={{ top: it.top, fontSize: it.size, animationDelay: it.delay, animationDuration: it.dur }}
          >
            {it.emoji}
          </span>
        ))}
      </div>
      <div className="side-decor side-decor-right" aria-hidden="true">
        {RIGHT_ITEMS.map((it, i) => (
          <span
            key={i}
            className="side-decor-item"
            style={{ top: it.top, fontSize: it.size, animationDelay: it.delay, animationDuration: it.dur }}
          >
            {it.emoji}
          </span>
        ))}
      </div>
    </>
  )
}
