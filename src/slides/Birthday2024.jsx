import TiltCard from '../components/TiltCard.jsx'
import togetherPhoto from '../assets/birthday-2026-together.jpg'
import cakePhoto from '../assets/birthday-2026-cake.jpg'

export default function Birthday2024() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">17 · 02 · 2024 — 12:30 AM, sharp</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        Your birthday. I couldn't let the clock beat me to it.
      </h2>
      <p className="body-text lede enter" style={{ animationDelay: '.18s', marginTop: 18 }}>
        The date changed at midnight and I was already moving — reached your place right at
        12:30, just so I could be the first one to say it to your face, not over a call.
      </p>

      <div className="gallery enter" style={{ animationDelay: '.3s' }}>
        <TiltCard tag="figure" className="polaroid" baseRotate={-3} max={9}>
          <div className="polaroid-frame">
            <img src={togetherPhoto} alt="The two of us, 17.02.2026" />
          </div>
          <figcaption>17.02.2026, together</figcaption>
        </TiltCard>
        <TiltCard tag="figure" className="polaroid" baseRotate={2.5} max={9}>
          <div className="polaroid-frame">
            <img src={cakePhoto} alt="You, mid-laugh, your birthday this year" />
          </div>
          <figcaption>your birthday, this year</figcaption>
        </TiltCard>
      </div>

      <p className="body-text enter" style={{ animationDelay: '.5s', marginTop: 22 }}>
        This year's birthday — 17.02.2026, the one in those photos — is everything I wanted
        2024 to be: the two of us, together, the whole day, actually celebrating it instead of
        me showing up for half an hour at midnight and leaving. That's the part that still gets
        to me a little. Andha oru naal mattum, ippo maari irundhurukkanumnu innaiku kooda oru
        chinna aasa than — aana adhu 2024 la nadakala.
      </p>
    </div>
  )
}
