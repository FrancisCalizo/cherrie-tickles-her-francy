import React, { useState, useEffect } from "react"
import moment from "moment"
import styled, { keyframes } from "styled-components"
import { Transition } from "react-transition-group"

import useInterval from "../hooks/useInterval"
import { device } from "../breakpoints"

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
    background-color: rgba(85, 85, 85, 0.7);
    border: 1px solid var(--header-gray);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    width: 110px;
    padding: 0 0.5rem 0.7rem;
    border-radius: 5px;
  }

  & > div:nth-child(even) {
    margin: 0 0.4rem;
  }

  @media ${device.maxLg} {
    & > div:nth-child(odd) {
      width: 100px;
      height: 85px;
      padding: 0 0.4rem 0.6rem;
    }

    & > div:nth-child(even) {
      margin: 0 0.1rem;
    }

    @media ${device.maxMd} {
      & > div:nth-child(odd) {
        width: 80px;
        height: 75px;
        padding: 0 0.3rem 0.3rem;
      }
  }
`

const CountownSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  div:nth-child(1) {
    font-family: 'Lato', sans-serif;
    font-size: 3.5rem;
  }

  div:nth-child(2) {
    font-size: 1.5rem;
  }

  @media ${device.maxLg} {
    div:nth-child(1) {
      font-size: 5vw;
    }

    div:nth-child(2) {
      font-size: 2.2vw;
    }

  @media ${device.maxLg} {
    div:nth-child(1) {
      font-size: 3rem;
    }

    div:nth-child(2) {
      font-size: 1rem;
    }
  }
`
const Placeholder = styled.div`
  visibility: hidden;
  height: 138px;
`

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
