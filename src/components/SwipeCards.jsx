import { useRef, useState } from 'react'

export default function SwipeCards({ cards }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)
  const touchX = useRef(null)
  const isLast = index >= cards.length - 1

  const advance = () => {
    if (exiting || isLast) return
    setExiting(true)
    setTimeout(() => {
      setExiting(false)
      setIndex((i) => Math.min(i + 1, cards.length - 1))
    }, 320)
  }

  const onTouchStart = (e) => {
    e.stopPropagation()
    if (isLast) return
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    e.stopPropagation()
    if (isLast) return
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (dx < -40) advance()
  }

  return (
    <div
      className="swipe-stack"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={isLast ? undefined : advance}
    >
      <div className={'swipe-card' + (exiting ? ' swipe-card-exit' : '')} key={index}>
        {cards[index]}
      </div>
      {!isLast && <p className="swipe-hint">swipe or tap →</p>}
    </div>
  )
}
