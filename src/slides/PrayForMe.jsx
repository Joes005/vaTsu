export default function PrayForMe() {
  return (
    <div className="slide-inner prayer-page">
      <span className="prayer-glow" aria-hidden="true" />

      <p className="eyebrow enter">
        <span className="prayer-flame" aria-hidden="true">🪔</span>
        A prayer I know about, even from here
      </p>
      <h2 className="prayer-heading enter" style={{ animationDelay: '.1s' }}>
        Ammulu, unakku ithu niyabagam irukka?
      </h2>

      <p className="body-text enter" style={{ animationDelay: '.2s', marginTop: 18 }}>
        nee eanakaga eavlo visayam pray pannuruppanu enakku full ah theriyathu, aana oru
        vishayam mattum theriyum — nee eanakaga nu vendikitta, eathum ehh eanaku nadakama pochu
        illa.
      </p>
      <p className="body-text enter" style={{ animationDelay: '.3s' }}>
        12th physics practical record la, essay clear panna mudiyathunu oru bayam irunthuchu.
        last ah, every single ah naa all clear pannen. adhu naan panna maari theriyum, aana
        unmaila enakku theriyum — adhu nee eanga pray panna dhaan nadanthuchu nu.
      </p>
      <p className="body-text enter" style={{ animationDelay: '.4s' }}>
        oru oru time um ippudi than — nee eanga pray pannuva, adhu nadakum. naama Karur
        varumbothu Kovil poitu pray pannitu poganumnu solluvom, anga nee neraya pray pannuva.
        aana ennoda prayer onnu mattum innum aagala.
      </p>

      <blockquote className="prayer-quote enter" style={{ animationDelay: '.5s, 0s' }}>
        "Saami, eapudiyachum, ennoda saamiya, ennoda seathu vachurunga."
        <span className="prayer-quote-note">
          — antha oru prayer, eanakku nadakumnu innum theriyala.
        </span>
      </blockquote>

      <p className="body-text enter" style={{ animationDelay: '.6s' }}>
        so naa again and again unna varen, kekuren — eanakaga pray panriya, Ammulu?
      </p>
      <p className="body-text enter" style={{ animationDelay: '.68s' }}>
        nee eanaku venum. so, nee pray panra athu kandippa nadanum.
      </p>

      <blockquote className="prayer-quote enter" style={{ animationDelay: '.76s, 0s' }}>
        "ennoda saami ya, ennoda seathu veika solli kelu ma"
        <span className="prayer-quote-note">
          eaa saami, unna ennodavey seathu vachura, solli kelu saami.
        </span>
      </blockquote>

      <p className="sign enter" style={{ animationDelay: '.86s' }}>
        — innum kekittu than irukken, innum nambikittu than irukken 🧡
      </p>
    </div>
  )
}
