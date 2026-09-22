import { useState } from 'react'

export default function AfterThreeDays() {
  const [open, setOpen] = useState(false)

  return (
    <div className="slide-inner reveal-page">
      <span className="reveal-page-backdrop" aria-hidden="true" />

      {!open && (
        <div
          className="reveal-envelope-wrap"
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setOpen(true)
          }}
        >
          <span className="reveal-envelope" aria-hidden="true">📜</span>
          <p className="reveal-envelope-hint">tap it — after 3 days...</p>
        </div>
      )}

      {open && (
        <div className="reveal-letter">
          <p className="reveal-letter-eyebrow">After 3 days...!</p>
          <h2 className="reveal-letter-heading">The message that ended it, for good.</h2>

          <p className="reveal-letter-text">
            naa maarala — ippo mattum illa, innum oru oru naalu unna love pannanum, naama
            namakaga eapovum onna irukanum nu than. nee ennoda iruntha eanakku ellame ehh
            kedacha maari irukum nu unnaku sonne.
          </p>
          <p className="reveal-letter-text">
            ennala unna oru nalla friend uhh mattum paakka mudiyala, nee "enna tha, nama
            friends uhh vechu irukalam" nu sonnalum ennala mudiyala, coz... I am in Love with
            You.
          </p>
          <p className="reveal-letter-text">
            ippudi irukkumbothu unna friend nu sollitu ennaiyum eamathitu, unnaiyum eamathitu
            irukka mudiyathu nu, "I Love You Dear" nu oru 🧡 anupi sonne....
          </p>

          <blockquote className="reveal-letter-quote">
            appo, that moment, nee sonne —
            <span className="reveal-letter-switch">"I Love You Tooo... with our Orange Heart" 🧡</span>
          </blockquote>

          <p className="reveal-letter-text">
            naa... finished. ...!!! antha oru message, antha oru moment, ippo kooda enn
            kannukulaye irukku.
          </p>

          <p className="reveal-letter-sign">— that switch never flipped back, not even once 🧡</p>
        </div>
      )}
    </div>
  )
}
