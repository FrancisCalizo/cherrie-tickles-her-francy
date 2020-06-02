import React from "react"
import RSVPModal from "./RSVPModal"
import styled from "styled-components"

const RSVPContainer = styled.div`
  text-align: center;
  padding-top: 6rem;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
    margin: 0rem auto 1rem;
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
