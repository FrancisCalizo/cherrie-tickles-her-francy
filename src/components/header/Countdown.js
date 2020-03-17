import React, { useState, useEffect, useRef } from "react"
import moment from "moment"

import useInterval from "../hooks/useInterval"

const Countdown = () => {
  const [weddingDate] = useState(moment("2021-02-20", "YYYY-MM-DD"))
  const [countdown, setCountdown] = useState(null)

  useInterval(() => {
    let now = moment()
    let timeLeft = moment.duration(weddingDate.diff(now))
    setCountdown(timeLeft)
  }, 1000)

  return (
    <div>
      <h2>Countdown</h2>
    </div>
  )
}

export default Countdown
