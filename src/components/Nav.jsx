export default function Nav({ index, isLast, hideNext, onNext, onBack }) {
  return (
    <>
      {index > 0 && (
        <div className="nav-back">
          <button onClick={onBack} aria-label="Previous page">
            ← <span className="label">Back</span>
          </button>
        </div>
      )}
      {!isLast && !hideNext && (
        <div className="nav">
          <button className="primary" onClick={onNext} aria-label="Next page">
            <span className="label">Next</span> <span className="chevron">→</span>
          </button>
        </div>
      )}
    </>
  )
}
