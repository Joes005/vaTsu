import { useCallback, useEffect, useRef, useState } from 'react'
import Embers from './components/Embers.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import HeartTapBurst from './components/HeartTapBurst.jsx'
import AudioPlayer from './components/AudioPlayer.jsx'
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
  const [nextLocked, setNextLocked] = useState(false)
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const touchX = useRef(null)

  const goTo = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next))
      if (clamped === index || outgoing) return
      if (clamped > index && nextLocked) return
      setNextLocked(false)
      if (reducedMotion.current) {
        setIndex(clamped)
        return
      }
      const dir = clamped > index ? 1 : -1
      setOutgoing({ index, dir })
      setIndex(clamped)
      setTimeout(() => setOutgoing(null), TRANSITION_MS)
    },
    [index, outgoing, nextLocked]
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
      <CursorGlow />
      <HeartTapBurst />

      {/* Top Header Bar */}
      <header className="app-header" aria-hidden="true">
        <div className="header-left">
          <span className="header-badge">vaTsu 🧡</span>
          <span className="header-progress">
            {String(index + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
        <div className="header-right">
          <AudioPlayer />
        </div>
      </header>

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
            onLockNext={setNextLocked}
          />
        </div>
      </div>
      <Nav
        index={index}
        isLast={isLast}
        hideNext={slide.hideNav}
        nextLocked={nextLocked}
        onNext={() => goTo(index + 1)}
        onBack={() => goTo(index - 1)}
      />
    </>
  )
}
