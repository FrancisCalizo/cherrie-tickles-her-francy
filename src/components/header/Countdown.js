import React, { useState, useEffect } from "react"
import { intervalToDuration, differenceInDays } from "date-fns"
import { Transition } from "react-transition-group"

import useInterval from "../hooks/useInterval"
import {
  InlineBlock,
  CountdownContainer,
  CountownSection,
  Placeholder,
} from "./CountdownStyles"

const Countdown = () => {
  const [weddingDate] = useState(new Date(2021, 1, 6, 0, 0, 0))
  const [countdownDays, setCountdownDays] = useState(null)
  const [countdownHours, setCountdownHours] = useState(null)
  const [countdownMinutes, setCountdownMinutes] = useState(null)
  const [countdownSeconds, setCountdownSeconds] = useState(null)
  const [loading, setLoading] = useState(true)
  const [trans, setTrans] = useState(false)

  useInterval(() => {
    let now = new Date()
    let timeLeft = intervalToDuration({
      start: now,
      end: weddingDate,
    })
    let timeLeftDays = differenceInDays(weddingDate, now)
    setCountdownDays(() => (timeLeftDays > 0 ? timeLeftDays : 0))
    setCountdownHours(() => (timeLeftDays > 0 ? timeLeft.hours : 0))
    setCountdownMinutes(() => (timeLeftDays > 0 ? timeLeft.minutes : 0))
    setCountdownSeconds(() => (timeLeftDays > 0 ? timeLeft.seconds : 0))
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
                <div>{countdownDays}</div>
                <div>Days</div>
              </CountownSection>
              <CountownSection>
                <div>:</div>
              </CountownSection>
              <CountownSection>
                <div>{countdownHours}</div>
                <div>Hours</div>
              </CountownSection>
              <CountownSection>
                <div>:</div>
              </CountownSection>
              <CountownSection>
                <div>{countdownMinutes}</div>
                <div>Minutes</div>
              </CountownSection>
              <CountownSection>
                <div>:</div>
              </CountownSection>
              <CountownSection>
                <div>{countdownSeconds}</div>
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
