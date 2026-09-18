import HeartIcon from '../components/HeartIcon.jsx'

export default function FirstMeet() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Where this actually started</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>The first time I saw you.</h2>
      <p className="body-text lede enter" style={{ animationDelay: '.18s', marginTop: 18 }}>
        [Placeholder — write the real story here: where it was, what was actually said, what I
        definitely pretended not to notice. I'm guessing at the shape of it for now — swap this
        paragraph for the real memory whenever you're ready.]
      </p>
      <div className="gallery enter" style={{ animationDelay: '.3s' }}>
        <figure className="polaroid">
          <div className="polaroid-frame"><HeartIcon /></div>
          <figcaption>day one, unofficially</figcaption>
        </figure>
        <figure className="polaroid">
          <div className="polaroid-frame"><HeartIcon /></div>
          <figcaption>the first "hi"</figcaption>
        </figure>
      </div>
      <p className="gallery-note enter" style={{ animationDelay: '.4s' }}>
        Real photo goes in these slots whenever you send it over.
      </p>
    </div>
  )
}
