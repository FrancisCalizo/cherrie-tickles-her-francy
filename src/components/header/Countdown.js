import React, { useState, useEffect } from "react"
import moment from "moment"
import { Transition } from "react-transition-group"

import useInterval from "../hooks/useInterval"
import {
  InlineBlock,
  CountdownContainer,
  CountownSection,
  Placeholder,
} from "./CountdownStyles"

const Countdown = () => {
  const [weddingDate] = useState(moment("2021-02-06", "YYYY-MM-DD"))
  const [countdown, setCountdown] = useState(null)
  const [loading, setLoading] = useState(true)
  const [trans, setTrans] = useState(false)

  useInterval(() => {
    let now = moment()
    let timeLeft = moment.duration(weddingDate.diff(now))
    setCountdown(timeLeft)
    setLoading(false)
  }, 1000)

  useEffect(() => {
    setTrans(true)
  }, [trans])

  if (loading) {
    return <Placeholder />
  } else {
    return (
      <Transition in={trans} timeout={700} appear={true}>
        {state => (
          <InlineBlock state={state}>
            <CountdownContainer>
              <CountownSection>
                <div>{parseInt(countdown.asDays())}</div>
                <div>Days</div>
              </CountownSection>
              <CountownSection>
                <div>:</div>
              </CountownSection>
              <CountownSection>
                <div>{countdown._data.hours}</div>
                <div>Hours</div>
              </CountownSection>
              <CountownSection>
                <div>:</div>
              </CountownSection>
              <CountownSection>
                <div>{countdown._data.minutes}</div>
                <div>Minutes</div>
              </CountownSection>
              <CountownSection>
                <div>:</div>
              </CountownSection>
              <CountownSection>
                <div>{countdown._data.seconds}</div>
                <div>Seconds</div>
              </CountownSection>
            </CountdownContainer>
          </InlineBlock>
        )}
      </Transition>
    )
  }
}

export default Countdown
