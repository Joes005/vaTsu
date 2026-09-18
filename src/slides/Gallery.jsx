import HeartIcon from '../components/HeartIcon.jsx'

const CAPTIONS = ['the laugh, mid-sentence', 'golden hour, last shared', 'voice note, replayed twice', 'next one, tbd']

export default function Gallery() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">A scrapbook, still filling up</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        New pages get added whenever there's a memory worth keeping
      </h2>
      <div className="gallery enter" style={{ animationDelay: '.2s' }}>
        {CAPTIONS.map((cap) => (
          <figure className="polaroid" key={cap}>
            <div className="polaroid-frame"><HeartIcon /></div>
            <figcaption>{cap}</figcaption>
          </figure>
        ))}
      </div>
      <p className="gallery-note enter" style={{ animationDelay: '.3s' }}>
        Send me the real ones and these slots are yours.
      </p>
    </div>
  )
}
