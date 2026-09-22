import examPhoto from '../assets/exam-photo.jpg'
import TiltCard from '../components/TiltCard.jsx'

export default function ExamMemories() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Exam season, somehow the best part</p>
      <h2 className="enter" style={{ animationDelay: '.08s' }}>
        Public exam. CS exam. And us, surviving both.
      </h2>

      <div className="favorite-photo-drop">
        <TiltCard tag="figure" className="favorite-photo" max={7}>
          <div className="favorite-photo-inner">
            <img src={examPhoto} alt="Us, right outside after an exam" />
            <span className="favorite-photo-shine" aria-hidden="true" />
          </div>
          <span className="favorite-photo-badge" aria-hidden="true">🧡</span>
        </TiltCard>
      </div>

      <div className="quote-spotlight enter" style={{ animationDelay: '.25s' }}>
        <p className="body-text highlight-sentiment">
          "intha photo tha ennoda all-time favorite, till my last breath. naa sagumbothu kuda itha
          paathutu than santhosama poganum... adhu than. enough." 🧡
        </p>
      </div>
    </div>
  )
}
