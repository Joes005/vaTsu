import { useEffect, useRef, useState } from 'react'

// Gentle procedural romantic piano/bell chord arpeggio in D minor / F major
const NOTES = [
  261.63, 329.63, 392.0, 523.25, // C - E - G - C
  293.66, 349.23, 440.0, 587.33, // D - F - A - D
  220.0,  261.63, 329.63, 440.0,  // A - C - E - A
  174.61, 220.0,  261.63, 349.23  // F - A - C - F
]

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false)
  const ctxRef = useRef(null)
  const stepRef = useRef(0)
  const intervalRef = useRef(null)

  const playNote = (freq) => {
    if (!ctxRef.current) return
    const ctx = ctxRef.current
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, now)

    // Soft gentle bell attack and warm release
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 2.3)
  }

  const toggle = () => {
    if (!playing) {
      if (!ctxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext
        ctxRef.current = new AudioCtx()
      }
      if (ctxRef.current.state === 'suspended') {
        ctxRef.current.resume()
      }
      setPlaying(true)
      intervalRef.current = setInterval(() => {
        const note = NOTES[stepRef.current % NOTES.length]
        playNote(note)
        stepRef.current += 1
      }, 720)
    } else {
      setPlaying(false)
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <button
      className={'audio-toggle' + (playing ? ' is-playing' : '')}
      onClick={toggle}
      type="button"
      aria-label={playing ? 'Mute background melody' : 'Play romantic background melody'}
      title={playing ? 'Mute melody' : 'Play melody'}
    >
      <span className="audio-bars" aria-hidden="true">
        <span className="bar bar-1" />
        <span className="bar bar-2" />
        <span className="bar bar-3" />
      </span>
      <span className="audio-label">{playing ? 'Sound On' : 'Play Melody'}</span>
    </button>
  )
}
