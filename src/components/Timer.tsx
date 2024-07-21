import React, { useState, useEffect } from 'react'

const Timer: React.FC<{ initialSeconds: number; onTimmedOut: () => void }> = ({
  initialSeconds,
  onTimmedOut,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    if (seconds == 0) onTimmedOut()
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)

      return () => clearTimeout(timerId)
    }
  }, [seconds])

  return <span style={{ fontWeight: '600', fontSize: '30px' }}>{seconds}</span>
}

export default Timer
