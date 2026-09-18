const MOOD_LINES = {
  missing: 'Yeah. Same here, honestly.',
  low: "I figured. Let's fix that a little, right now.",
  hanging: 'Steady counts for a lot — noted.',
  excited: 'Hold onto that energy. It helps.',
}

export default function Letter({ nickname = 'Vatsu', mood }) {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">A letter, mid-distance</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        For the version of us that's far apart right now
      </h2>
      <div className="enter" style={{ animationDelay: '.2s', marginTop: 20 }}>
        {mood && MOOD_LINES[mood] && <p className="mood-line">{MOOD_LINES[mood]}</p>}
        <p className="body-text">
          I won't pretend the gap between us hasn't been hard lately. Some days the distance feels
          louder than it should, and I miss the small things most — your voice going quiet
          mid-laugh, sharing one plate of food between us, the walk back home for no reason at all.
        </p>
        <p className="body-text">
          But every one of these three years still adds up to the same answer: you. Not the easy
          version of us — the real one, the one that shows up even when it's far, even when it's
          tired, even when there's nothing exciting to report except "I miss you."
        </p>
        <p className="body-text">
          So this is just that, written down somewhere it won't get lost in a chat thread — I'm
          sorry for the distance. I'm grateful you're still on the other end of it. And I'm not
          going anywhere, {nickname}.
        </p>
      </div>
      <p className="sign enter" style={{ animationDelay: '.3s' }}>
        — always, from here to wherever you are 🧡
      </p>
    </div>
  )
}
