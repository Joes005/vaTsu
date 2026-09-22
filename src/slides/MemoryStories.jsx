import { useState, useRef } from 'react'
import TiltCard from '../components/TiltCard.jsx'
import schoolChristmasPhoto from '../assets/school-christmas-2021.jpg'
import thiruvizhaPhoto from '../assets/thiruvizha-2022.jpg'
import karurKovilPhoto from '../assets/karur-kovil.jpg'
import mayanurPhoto from '../assets/mayanur-2025.jpg'
import togetherPhoto from '../assets/birthday-2026-together.jpg'
import cakePhoto from '../assets/birthday-2026-cake.jpg'

const STORIES = [
  {
    id: 0,
    tag: '2021 · School Christmas Days',
    title: 'Where it secretly began... 2021 Christmas',
    img: schoolChristmasPhoto,
    date: 'School 2021',
    story: 'School padikkumbothu 2021 Christmas program-ku prepare panrom nu edutha photo. Appo naama friends dhaan... aana ippo yosikkuren, appove naama actually made for each other dhaan nu! Kaalam nammala evvalo maathiruchu paar... annaiku naanum neeyum photo edukkanum nu vandhom, aana nee Nandhini-ya kootitu vandhuta. Naama thaniya photo eduthukala appo... aana innaiku? "Nee illama naan illa" nu aagiduchu... I need this until my death!',
    quote: '"Annaiku thaniya photo edukka mudiyama ponadhuku... innaiku nee illama naan illa saami. I need this until my last breath." 🧡',
  },
  {
    id: 1,
    tag: '2022 · Ooru Thiruvizha',
    title: 'The last photo as "just friends"',
    img: thiruvizhaPhoto,
    date: 'Thiruvizha 2022',
    story: '2022, ooru thiruvizha. Naama friends uhh eduthukita last photo ithu. Ithuku apparam, adhu vera kadhai than... annaiku switch aana antha heart innum adhe maari than irukku 🧡',
    quote: '"Ennala unna oru friend uhh mattum paakka mudiyala... nee enakku oru friend-aa mattum illama, en life full-aa ennoda irukkiya?"',
  },
  {
    id: 2,
    tag: 'Karur Kovil · Our Connection',
    title: 'Nee. Naan. Karur Kovil.',
    img: karurKovilPhoto,
    date: 'Karur Kovil',
    story: 'Enakku therinju, naama rendu perum athigamaa pona oru edam kovil dhaan. Athum intha pic edutha time — Naa Salem-la irundhu varen Black-la... Nee oorula irundhu varra Black-la! Sollikama rendu perum matching black-la vandhu ninnom. That\'s our connection...',
    quote: '"You know, Ammulu... \'we are truly made for each other.\' 🧡"',
  },
  {
    id: 3,
    tag: '2025 · Mayanur Trip',
    title: 'Mayanur... En Devadhai',
    img: mayanurPhoto,
    date: 'Mayanur 2025',
    story: '2025-la naama Mayanur ponappo naan unna edutha azhagana photo ithu. Greenery naduvula, antha black dress & white shawl-la nee ninnu siricha antha azhagu... en kannukulaye irukku. Un kooda travel panra ovvoru idhamum enakku romba romba special.',
    quote: '"Un kooda irundha kaathum poovum kooda azhagaa maaridum, Ammulu 🧡"',
  },
  {
    id: 4,
    tag: '17.02.2026 · Together',
    title: 'The whole day, just the two of us',
    img: togetherPhoto,
    date: '17.02.2026 Together',
    story: 'Midnight vandhu half an hour pesitu poradhuku badhila, muzhu naalum unkoodave irundhu celebrate panna azhagana naal... everything I ever wanted.',
    quote: '"Un kooda irukura ovvoru nodiyum enakku oru azhagana varam saami 🧡"',
  },
  {
    id: 5,
    tag: 'Sweetest Smile · Pure Joy',
    title: 'Your mid-laugh & that sweetest smile',
    img: cakePhoto,
    date: 'Her Pure Smile',
    story: 'Cake cut pannitu nee siricha antha oru nodi... un sirippu kekkum podhu enakku ulagathula vera edhuvume theva illa nu thonum.',
    quote: '"Un sirippula dhaan ennoda moththa santhosamume adangiyirukku 🧡"',
  },
]

export default function MemoryStories() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [loveCount, setLoveCount] = useState({ 0: 12, 1: 8, 2: 15, 3: 10, 4: 9, 5: 14 })
  const [heartPop, setHeartPop] = useState(false)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const current = STORIES[currentIdx]

  const goTo = (idx) => {
    setCurrentIdx(idx)
  }

  const next = () => {
    setCurrentIdx((prev) => (prev + 1) % STORIES.length)
  }

  const prev = () => {
    setCurrentIdx((prev) => (prev - 1 + STORIES.length) % STORIES.length)
  }

  const addLove = (e) => {
    e.stopPropagation()
    setLoveCount((prev) => ({
      ...prev,
      [currentIdx]: (prev[currentIdx] || 0) + 1,
    }))
    setHeartPop(true)
    setTimeout(() => setHeartPop(false), 600)
  }

  const handleTouchStart = (e) => {
    e.stopPropagation()
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    e.stopPropagation()
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    // Only flip if horizontal swipe is decisive and greater than vertical scroll drift
    if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      if (dx < 0) next()
      else prev()
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <div className="slide-inner memory-album-slide">
      <div className="album-header enter">
        <p className="eyebrow">A few of ours, told properly</p>
        <h2 className="album-heading">Oru oru photo-vum, oru oru kadhai sollum.</h2>
        <p className="album-sub">
          Our real story from 2021 school days to forever — tap to feel each memory 🧡
        </p>
      </div>

      {/* Featured Memory Album Stage */}
      <div
        className="album-stage enter"
        style={{ animationDelay: '.18s' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left / Top: The Romantic Polaroid Card */}
        <div className="album-photo-column">
          <TiltCard className="album-polaroid" max={9} baseRotate={-1.5}>
            <div className="album-polaroid-tape" aria-hidden="true" />
            <div
              className="album-photo-frame"
              onClick={addLove}
              role="button"
              tabIndex={0}
              aria-label="Tap to love this photo"
            >
              <img
                src={current.img}
                alt={current.title}
                key={current.id}
                className="album-img-fade"
              />
              <span className="album-photo-badge" aria-hidden="true">🧡</span>
              {heartPop && <span className="album-heart-pop" aria-hidden="true">🧡</span>}
            </div>
            <div className="album-polaroid-footer">
              <span className="album-polaroid-caption">{current.date}</span>
              <button
                className="album-love-btn"
                onClick={addLove}
                type="button"
                aria-label="Send love to this photo"
              >
                <span>🧡</span>
                <span className="album-love-num">{loveCount[currentIdx] || 0}</span>
              </button>
            </div>
          </TiltCard>
        </div>

        {/* Right / Bottom: The Intimate Love Letter Pane */}
        <div className="album-letter-column" key={current.id}>
          <div className="album-letter-card">
            <span className="album-date-tag">{current.tag}</span>
            <h3 className="album-story-title">{current.title}</h3>
            <p className="album-story-text">{current.story}</p>
            <blockquote className="album-story-quote">
              {current.quote}
            </blockquote>
          </div>

          {/* Navigation Controls */}
          <div className="album-nav-row">
            <button
              className="album-arrow-btn"
              onClick={prev}
              type="button"
              aria-label="Previous memory"
            >
              ‹
            </button>
            <span className="album-counter">
              {String(currentIdx + 1).padStart(2, '0')} / {String(STORIES.length).padStart(2, '0')}
            </span>
            <button
              className="album-arrow-btn"
              onClick={next}
              type="button"
              aria-label="Next memory"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Memory Filmstrip / Thumbnails Tabs */}
      <div className="album-tabs-row enter" style={{ animationDelay: '.28s' }}>
        {STORIES.map((s, idx) => (
          <button
            key={s.id}
            className={'album-tab-pill' + (idx === currentIdx ? ' active' : '')}
            onClick={() => goTo(idx)}
            type="button"
          >
            <span className="album-tab-dot" />
            <span className="album-tab-text">{s.date}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
