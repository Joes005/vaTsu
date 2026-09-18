import examPhoto from '../assets/exam-photo.jpg'

export default function ExamMemories() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Exam season, somehow the best part</p>
      <h2 className="enter" style={{ animationDelay: '.1s' }}>Public exam. CS exam. And us, surviving both.</h2>

      <div className="favorite-photo-drop">
        <figure className="favorite-photo">
          <div className="favorite-photo-inner">
            <img src={examPhoto} alt="Us, right outside after an exam" />
            <span className="favorite-photo-shine" aria-hidden="true" />
          </div>
          <span className="favorite-photo-badge" aria-hidden="true">🧡</span>
        </figure>
      </div>

      <p className="body-text enter" style={{ animationDelay: '1.05s' }}>
        intha photo tha ennoda all-time favorite, till my last breath. naa sagumbothu kuda itha
        paathutu than santhosama poganum... adhu than. enough.
      </p>
    </div>
  )
}
