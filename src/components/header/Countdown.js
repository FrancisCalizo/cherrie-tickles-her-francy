import React, { useState, useEffect } from "react"
import moment from "moment"
import styled, { keyframes } from "styled-components"
import { Transition } from "react-transition-group"

import useInterval from "../hooks/useInterval"

const InlineBlock = styled.div`
  display: inline-block;
  transition: all 700ms ease-in;
  opacity: ${props => (props.state === "entered" ? 1.0 : 0.0)};
  overflow: hidden;
`
const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }

  to {
    transform: translateY(0)
  }
`

const CountdownContainer = styled.div`
  display: flex;
  animation: ${slideUp} 1s linear;
  margin-top: 1.5rem;

  & > div:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    width: 110px;
    padding: 0 0.5rem 0.7rem;
    border-radius: 20px;
  }
`

const CountownSection = styled.div`
  div:nth-child(1) {
    font-size: 4rem;
  }

  div:nth-child(2) {
    font-size: 1.5rem;
  }
`
const Placeholder = styled.div`
  visibility: hidden;
  height: 145px;
`

const Countdown = () => {
  const [weddingDate] = useState(moment("2021-02-20", "YYYY-MM-DD"))
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
