import React, { useState } from "react"
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

  if (countdown === null) {
    return null
  } else {
    return (
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>{parseInt(countdown.asDays())}</div>
                <div>Days</div>
              </div>
              <div>
                <div>:</div>
              </div>
              <div>
                <div>{countdown._data.hours}</div>
                <div>Hours</div>
              </div>
              <div>
                <div>:</div>
              </div>
              <div>
                <div>{countdown._data.minutes}</div>
                <div>Minutes</div>
              </div>
              <div>
                <div>:</div>
              </div>
              <div>
                <div>{countdown._data.seconds}</div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Countdown
