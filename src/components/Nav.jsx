import { useMagnetic } from './useMagnetic.js'

export default function Nav({ index, isLast, hideNext, onNext, onBack }) {
  const backRef = useMagnetic(0.3)
  const nextRef = useMagnetic(0.3)

  return (
    <>
      {index > 0 && (
        <div className="nav-back">
          <button ref={backRef} onClick={onBack} aria-label="Previous page">
            ← <span className="label">Back</span>
          </button>
        </div>
      )}
      {!isLast && !hideNext && (
        <div className="nav">
          <button ref={nextRef} className="primary" onClick={onNext} aria-label="Next page">
            <span className="label">Next</span> <span className="chevron">→</span>
          </button>
        </div>
      )}
    </>
  )
}
