export default function OriginLetter({ onNext }) {
  return (
    <div className="slide-inner">
      <div className="letter-paper enter">
        <p className="letter-paper-eyebrow">Where all of this started</p>
        <h2 className="letter-paper-heading">ammulu...these all are started on this day by me !!!</h2>

        <p className="letter-paper-text">
          eanaku innu romba nallla niyabagam irukku, ithey naal naa 3 varusam munnadi...
        </p>
        <p className="letter-paper-text">
          naa unna oru one year ku apuram nerula paaten. paathathum eanaku something feel achu,
          you are not anymore just a friend nu... so annaiku night i scold you like nee eaa shaal
          podalanu unna thitutu sonne.
        </p>

        <blockquote className="letter-paper-quote">
          "ennala unna munnadi paatha maari paaka mudiyala... nee eanaku oru friend uhh mattum
          illama, eaa life full uhh ennoda irukkiya?"
          <span className="letter-paper-switch">nu 🧡 &gt;&gt;&gt; 💙 ippudi switch panne</span>
        </blockquote>

        <p className="letter-paper-text">
          but you said "hey paithiyo, enna athula, vena pesama iru", enna achu nu unnaku keta...
          illa ennala unna friend zone la paaka mudiyala, nee tha eanaku eallam nu thonuthu sonne,
          but you refuse it.
        </p>
        <p className="letter-paper-text">and then after 3 days...!</p>

        <p className="letter-paper-sign">— annaiku switch panna heart, innum adhe maari switch aagi than irukku 🧡→💙</p>

        <button className="letter-paper-close" onClick={onNext} type="button">
          Close the letter <span className="chevron">→</span>
        </button>
      </div>
    </div>
  )
}
