import React, { useState } from "react"
import moment from "moment"
import styled from "styled-components"

import useInterval from "../hooks/useInterval"

const InlineBlock = styled.div`
  display: inline-block;
`

const CountdownContainer = styled.div`
  display: flex;
`

const CountownSection = styled.div`
  padding: 1rem 0.5rem;

  div:nth-child(1) {
    font-size: 4rem;
  }

  div:nth-child(2) {
    font-size: 1.5rem;
  }
`

const Countdown = () => {
  const [weddingDate] = useState(moment("2021-02-20", "YYYY-MM-DD"))
  const [countdown, setCountdown] = useState(null)
  const [loading, setLoading] = useState(true)

  useInterval(() => {
    let now = moment()
    let timeLeft = moment.duration(weddingDate.diff(now))
    setCountdown(timeLeft)
    setLoading(false)
  }, 1000)

  if (loading) {
    return null
  } else {
    return (
      <InlineBlock>
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
    )
  }
}

export default Countdown
