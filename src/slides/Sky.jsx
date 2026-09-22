import { useState } from 'react'

const MILESTONES = [
  {
    year: '2023',
    title: 'The First Yes',
    subtitle: 'Where it all began',
    desc: 'Naa unakku propose panna annaiku irundha adhe suriyan dhaan... annaiku switch panna heart 🧡',
  },
  {
    year: '2024',
    title: 'Growing Together',
    subtitle: 'Midnight moments',
    desc: '12:30 AM birthday visit, chinna chinna sandai, aana koodave irundha unmai anbu...',
  },
  {
    year: '2025',
    title: 'Through Every Prayer',
    subtitle: 'Karur Kovil & faith',
    desc: 'Kovil poitu unakaga vendikitta ovvoru nimidamum... namma nambikkai innum balamaachu.',
  },
  {
    year: '2026',
    title: 'Three Years Official',
    subtitle: 'Still the same meaning',
    desc: 'Ippo varaikkum adhe suriyan, innum adhe anbu... innum adhe maari switch aagi than irukku 🧡',
  },
  {
    year: 'Namakaga ♾️',
    title: 'Our Life Together',
    subtitle: 'Forever',
    desc: '"Naan + Nee" rendu perum serndhu "Namakaga" oru azhagana vaazhkaiya vaazhanum 🧡',
  },
]

export default function Sky() {
  const [activeIdx, setActiveIdx] = useState(null)

  const activeMilestone = activeIdx !== null ? MILESTONES[activeIdx] : null

  return (
    <div className="slide-inner sky-slide">
      <p className="eyebrow enter">Still under the same sky ☀️</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        2023 to 2026... Adhe Suriyan. Adhe Vaanam.
      </h2>

      {/* Interactive Celestial Arc */}
      <div className="sky-canvas-wrap enter" style={{ animationDelay: '.18s' }}>
        <svg
          className="sky-svg"
          viewBox="0 0 600 210"
          role="img"
          aria-label="The sun moving across an arc from 2023 to 2026 and forever"
        >
          <defs>
            <linearGradient id="skyArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ffb070" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.4" />
            </linearGradient>

            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff2dc" />
              <stop offset="40%" stopColor="#ffa048" />
              <stop offset="85%" stopColor="#d94b05" />
              <stop offset="100%" stopColor="#a83c07" stopOpacity="0" />
            </radialGradient>

            <filter id="sunBlur" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4.5" />
            </filter>
          </defs>

          {/* Horizon ground line */}
          <line
            x1="24"
            y1="165"
            x2="576"
            y2="165"
            stroke="var(--line)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Ambient Twilight Stars */}
          <circle cx="120" cy="50" r="1.5" fill="#ffceA0" opacity="0.6" className="star-twinkle" />
          <circle cx="210" cy="30" r="1" fill="#fff" opacity="0.5" className="star-twinkle-delay" />
          <circle cx="390" cy="35" r="1.5" fill="#ffcf9e" opacity="0.7" className="star-twinkle" />
          <circle cx="480" cy="55" r="1" fill="#fff" opacity="0.5" className="star-twinkle-delay" />

          {/* Celestial Journey Arc */}
          <path
            id="sunMotionPath"
            d="M 60 165 Q 300 24 540 165"
            fill="none"
            stroke="url(#skyArcGrad)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />

          {/* Continuous Gliding Sun */}
          <g>
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M 60 165 Q 300 24 540 165"
            />
            {/* Soft Outer Halo */}
            <circle cx="0" cy="0" r="18" fill="url(#sunGlow)" filter="url(#sunBlur)" opacity="0.8" />
            {/* Core Sun */}
            <circle cx="0" cy="0" r="8" fill="#fff5ea" />
            <circle cx="0" cy="0" r="7" fill="url(#sunGlow)" />
          </g>

          {/* Milestones along the curve */}
          {/* 2023 */}
          <g className="sky-node" onClick={() => setActiveIdx(0)}>
            <circle cx="60" cy="165" r="7" fill="var(--accent-deep)" />
            <circle cx="60" cy="165" r="3" fill="#fff" />
            <text x="60" y="192" textAnchor="middle" className="sky-year-label">2023</text>
          </g>

          {/* 2024 */}
          <g className="sky-node" onClick={() => setActiveIdx(1)}>
            <circle cx="178" cy="98" r="6" fill="var(--accent-deep)" />
            <circle cx="178" cy="98" r="2.5" fill="#fff" />
            <text x="178" y="124" textAnchor="middle" className="sky-year-label">2024</text>
          </g>

          {/* 2025 */}
          <g className="sky-node" onClick={() => setActiveIdx(2)}>
            <circle cx="300" cy="62" r="6.5" fill="var(--accent)" />
            <circle cx="300" cy="62" r="3" fill="#fff" />
            <text x="300" y="44" textAnchor="middle" className="sky-year-label">2025</text>
          </g>

          {/* 2026 */}
          <g className="sky-node" onClick={() => setActiveIdx(3)}>
            <circle cx="422" cy="98" r="6" fill="var(--accent-deep)" />
            <circle cx="422" cy="98" r="2.5" fill="#fff" />
            <text x="422" y="124" textAnchor="middle" className="sky-year-label">2026</text>
          </g>

          {/* Forever / Namakaga */}
          <g className="sky-node" onClick={() => setActiveIdx(4)}>
            <circle cx="540" cy="165" r="8" fill="var(--accent)" />
            <circle cx="540" cy="165" r="4" fill="#fff" />
            <text x="540" y="192" textAnchor="middle" className="sky-year-label sky-forever-label">Namakaga 🧡</text>
          </g>
        </svg>

        <p className="sky-interactive-hint">
          tap any year to see our story through time ↗
        </p>
      </div>

      {/* Selected Year Card Popup */}
      {activeMilestone && (
        <div className="sky-active-card enter" style={{ animationDelay: '0s' }}>
          <div className="sky-active-header">
            <span className="sky-active-year">{activeMilestone.year}</span>
            <span className="sky-active-title">{activeMilestone.title}</span>
            <button
              className="sky-close-btn"
              onClick={() => setActiveIdx(null)}
              type="button"
              aria-label="Close details"
            >
              ✕
            </button>
          </div>
          <p className="sky-active-desc">{activeMilestone.desc}</p>
        </div>
      )}

      {/* Crystal Clear Emotional Storytelling */}
      <div className="sky-story-card enter" style={{ animationDelay: '.26s' }}>
        <p className="body-text">
          naa unakku propose panna annaiku irundha <strong>adhe suriyan, adhe sky dhaan</strong> —
          2023, 2024, 2025, 2026 nu ippo varaikkum maaramal irukku. Innum ethanai varusham aanaalum
          adhe dhaan irukkum.
        </p>
        <p className="body-text">
          adhu maari dhaan naanum... unakkaga eppovume, eppodhum maaraama unkoodave iruppen.
        </p>

        <div className="sky-wish-spotlight">
          <p className="sky-wish-title">Aana ennoda aasa enna theriyuma, Ammulu?</p>
          <blockquote className="sky-wish-quote">
            "naa unnakaga irukkuradhu mattum illa saami...<br />
            <strong>'Naan'</strong>, <strong>'Nee'</strong> nu irukkuradha thaandi,
            <strong> 'Namakaga'</strong> nu oru azhagana vaazhkai vaazhanum nu aasaiya irukku." 🧡
          </blockquote>
        </div>

        <p className="sign" style={{ marginTop: 20 }}>
          — adhe vaanathin keezh, unkoodave eppovum 🧡
        </p>
      </div>
    </div>
  )
}
