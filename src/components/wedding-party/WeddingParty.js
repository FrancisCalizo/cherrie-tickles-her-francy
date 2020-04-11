import React from "react"
import styled from "styled-components"

import Groomsmen from "./Groomsmen"
import Bridesmaids from "./Bridesmaids"

const WeddingPartyContainer = styled.div`
  text-align: center;
  background: #f0f2f4;
  padding-top 4rem;
  padding-bottom: 7rem;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
    margin: 0rem auto 1rem;
    // color: white;
  }
`

const CardsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: var(--container);
  margin: 0 auto;
`

const WeddingParty = () => {
  return (
    <WeddingPartyContainer>
      <h2 data-sal="fade" data-sal-duration="700" data-sal-easing="ease-in-out">
        Wedding Party
      </h2>
      <CardsContainers>
        <Bridesmaids />
        <Groomsmen />
      </CardsContainers>
    </WeddingPartyContainer>
  )
}

export default WeddingParty
