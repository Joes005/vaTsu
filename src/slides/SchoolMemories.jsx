import HeartIcon from '../components/HeartIcon.jsx'

export default function SchoolMemories() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Back when none of this had a name yet</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>School days, before we knew where this was going.</h2>
      <p className="body-text lede enter" style={{ animationDelay: '.18s', marginTop: 18 }}>
        [Placeholder — the real memory goes here: a classroom, a bench, a note passed somewhere it
        shouldn't have been, whatever it actually was. I'm filling this in as a placeholder for now
        — replace it with what really happened.]
      </p>
      <div className="gallery enter" style={{ animationDelay: '.3s' }}>
        <figure className="polaroid">
          <div className="polaroid-frame"><HeartIcon /></div>
          <figcaption>uniform days</figcaption>
        </figure>
        <figure className="polaroid">
          <div className="polaroid-frame"><HeartIcon /></div>
          <figcaption>back bench, mostly</figcaption>
        </figure>
      </div>
      <p className="gallery-note enter" style={{ animationDelay: '.4s' }}>
        Real photo goes in these slots whenever you send it over.
      </p>
    </div>
  )
}
