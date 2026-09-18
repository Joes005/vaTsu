import { useCallback, useEffect, useRef, useState } from 'react'
import Embers from './components/Embers.jsx'
import Dots from './components/Dots.jsx'
import Nav from './components/Nav.jsx'
import Intro from './components/Intro.jsx'
import Gate from './components/Gate.jsx'
import { SLIDES } from './slides/index.js'

const TRANSITION_MS = 620

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem('vatsu-unlocked') === 'true'
    } catch {
      return false
    }
  })
  const [index, setIndex] = useState(0)
  const [outgoing, setOutgoing] = useState(null) // { index, dir }
  const [nickname, setNickname] = useState('Vatsu')
  const [mood, setMood] = useState(null)
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const touchX = useRef(null)

  const goTo = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next))
      if (clamped === index || outgoing) return
      if (reducedMotion.current) {
        setIndex(clamped)
        return
      }
      const dir = clamped > index ? 1 : -1
      setOutgoing({ index, dir })
      setIndex(clamped)
      setTimeout(() => setOutgoing(null), TRANSITION_MS)
    },
    [index, outgoing]
  )

  useEffect(() => {
    if (!introDone || !unlocked) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') goTo(index + 1)
      if (e.key === 'ArrowLeft') goTo(index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, goTo, introDone, unlocked])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) goTo(dx < 0 ? index + 1 : index - 1)
    touchX.current = null
  }

  const slide = SLIDES[index]
  const Slide = slide.Component
  const isLast = index === SLIDES.length - 1
  const outgoingSlide = outgoing ? SLIDES[outgoing.index] : null
  const OutgoingComponent = outgoingSlide?.Component

  if (!introDone) {
    return <Intro onDone={() => setIntroDone(true)} />
  }

  if (!unlocked) {
    return (
      <Gate
        onUnlock={() => {
          try {
            sessionStorage.setItem('vatsu-unlocked', 'true')
          } catch {}
          setUnlocked(true)
        }}
      />
    )
  }

  return (
    <>
      <Embers />
      <Dots slides={SLIDES} index={index} onSelect={goTo} />
      <div className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {outgoing && OutgoingComponent && (
          <div className={'slide slide-out-' + (outgoing.dir === 1 ? 'up' : 'down')} key={'exit-' + outgoingSlide.id}>
            <OutgoingComponent
              onNext={() => {}}
              onRestart={() => {}}
              nickname={nickname}
              onSetNickname={() => {}}
              mood={mood}
              onSetMood={() => {}}
            />
          </div>
        )}
        <div
          className={'slide' + (outgoing ? ' slide-in-' + (outgoing.dir === 1 ? 'up' : 'down') : '')}
          key={slide.id}
        >
          <Slide
            onNext={() => goTo(index + 1)}
            onRestart={() => goTo(0)}
            nickname={nickname}
            onSetNickname={setNickname}
            mood={mood}
            onSetMood={setMood}
          />
        </div>
      </div>
      <Nav index={index} isLast={isLast} hideNext={slide.hideNav} onNext={() => goTo(index + 1)} onBack={() => goTo(index - 1)} />
    </>
  )
}
