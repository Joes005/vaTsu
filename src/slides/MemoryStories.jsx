import HeartIcon from '../components/HeartIcon.jsx'
import TiltCard from '../components/TiltCard.jsx'
import thiruvizhaPhoto from '../assets/thiruvizha-2022.jpg'

const STORIES = [
  {
    title: 'the last photo as "just friends"',
    text: '2022, ooru thiruvizha. Naama friends uhh eaduthukita last photo ithu — ithuku apparam, adhu vera kadhai than.',
    img: thiruvizhaPhoto,
  },
  {
    title: 'that one rainy day',
    text: '[Placeholder — same idea, a different memory. Keep it short, keep it real.]',
  },
  {
    title: 'the food we always split',
    text: '[Placeholder — whatever the story actually is, this is where it goes.]',
  },
  {
    title: 'her birthday, this year',
    text: '[Placeholder — this can be one of the 17.02.2026 photos too, told properly.]',
  },
]

export default function MemoryStories() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">A few of ours, told properly</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        Every photo here comes with its own story.
      </h2>
      <p className="lede enter" style={{ animationDelay: '.18s' }}>
        Not just a gallery — each one of these actually happened, and I remember exactly why it
        mattered.
      </p>
      <div className="story-list enter" style={{ animationDelay: '.3s' }}>
        {STORIES.map((s) => (
          <div className="story-card" key={s.title}>
            <TiltCard className="story-photo" max={12}>
              {s.img ? (
                <img src={s.img} alt={s.title} />
              ) : (
                <div className="story-photo-frame"><HeartIcon /></div>
              )}
            </TiltCard>
            <div className="story-text">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="gallery-note enter" style={{ animationDelay: '.42s' }}>
        Send the real photos and the real stories — these placeholders swap out in a minute.
      </p>
    </div>
  )
}
