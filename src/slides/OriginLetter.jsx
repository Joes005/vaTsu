export default function OriginLetter({ onNext }) {
  return (
    <div className="slide-inner">
      <div className="letter-paper enter">
        <div className="letter-stamp" aria-hidden="true">💌 19·09</div>
        <p className="letter-paper-eyebrow">Where all of this started</p>
        <h2 className="letter-paper-heading">Ammulu... all of this started on this day by me !!!</h2>

        <p className="letter-paper-text">
          enakku innum romba nalla niyabagam irukku, ithey naal naa 3 varusam munnadi...
        </p>
        <p className="letter-paper-text">
          naa unna oru one year ku apuram nerula paaten. paathathum enakku something feel aachu,
          you are not anymore just a friend nu... so annaiku night i scold you like nee en shaal
          podalannu unna thititu sonne.
        </p>

        <blockquote className="letter-paper-quote">
          "ennala unna munnadi paatha maari paaka mudiyala... nee enakku oru friend uhh mattum
          illama, en life full uhh ennoda irukkiya?"
          <span className="letter-paper-switch">nu 🧡 &gt;&gt;&gt; 💙 ippudi switch panne</span>
        </blockquote>

        <p className="letter-paper-text">
          but you said "hey paithiyam, enna aachu, vena pesama iru", enna aachu nu unakku keta...
          illa ennala unna friend zone la paaka mudiyala, nee dhaan enakku ellam nu thonuthu sonne,
          but you refused it.
        </p>
        <p className="letter-paper-text highlight-text">and then after 3 days...!</p>

        <p className="letter-paper-sign">— annaiku switch panna heart, innum adhe maari switch aagi than irukku 🧡→💙</p>

        <button className="letter-paper-close" onClick={onNext} type="button">
          Close the letter & continue <span className="chevron">→</span>
        </button>
      </div>
    </div>
  )
}
