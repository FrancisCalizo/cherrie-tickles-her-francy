import React, { useState, useEffect, useRef } from "react"
import moment from "moment"

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Countdown = () => {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return (
    <div>
      <h2>Countdown: {count}</h2>
    </div>
  )
}

export default Countdown
