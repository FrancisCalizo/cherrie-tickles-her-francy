import React from "react"
import RSVPModal from "./RSVPModal"
import styled, { keyframes } from "styled-components"

const RSVPContainer = styled.div`
  text-align: center;
  padding-top: 6rem;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
    margin: 0rem auto 1rem;
  }
`
export const shake = keyframes`
  0% {
    transform: rotate(1deg);
  }

  5% {
    transform: rotate(2deg);
  }

  10% {
    transform: rotate(3deg);
  }

  15% {
    transform: rotate(4deg);
  }

  20% {
    transform: rotate(5deg);
  }

  25% {
    transform: rotate(4deg);
  }

  30% {
    transform: rotate(3deg);
  }

  35% {
    transform: rotate(2deg);
  }

  40% {
    transform: rotate(1deg);
  }

  45% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-1deg);
  }

  55% {
    transform: rotate(-2deg);
  }

  60% {
    transform: rotate(-3deg);
  }

  65% {
    transform: rotate(-4deg);
  }

  70% {
    transform: rotate(-5deg);
  }

  75% {
    transform: rotate(-4deg);
  }

  80% {
    transform: rotate(-3deg);
  }

  85% {
    transform: rotate(-2deg);
  }

  90% {
    transform: rotate(-1deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

const RSVPButton = styled.button`
  background: var(--heart);
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-size: 1.75rem;
  padding: 1.2rem 1.75rem;
  border-radius: 50px;
  cursor: pointer;
  margin: 2rem auto 0;
  border: none;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5), 0 4px 12px 0 rgba(0, 0, 0, 0.23);
  border: 1px solid white;
  animation: ${shake} 0.7s infinite;

  &:hover {
    background: var(--heart-hover);
  }
`

const ScrollContact = styled.div``

const RSVP = () => {
  return (
    <RSVPContainer
      data-sal="fade"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      <h2>RSVP</h2>
      <RSVPButton>Click Here to RSVP</RSVPButton>
      {/* <RSVPModal /> */}
      <ScrollContact id="scroll-contact" />
    </RSVPContainer>
  )
}

export default RSVP
