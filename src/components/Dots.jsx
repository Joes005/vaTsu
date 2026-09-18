export default function Dots({ slides, index, onSelect }) {
  return (
    <div className="progress">
      {slides.map((s, i) => (
        <button
          key={s.id}
          className={'dot' + (i === index ? ' active' : '')}
          aria-label={'Go to page ' + (i + 1)}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  )
}
