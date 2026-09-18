import { useEffect, useState } from 'react'

export default function LiveDays({ since, label }) {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const start = new Date(since)
    const update = () => setDays(Math.floor((new Date() - start) / 86400000))
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [since])

  return (
    <div className="chip">
      {label} <b>{days.toLocaleString()}</b>
    </div>
  )
}
