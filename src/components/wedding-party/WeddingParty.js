import React from "react"
import styled from "styled-components"

import Groomsmen from "./Groomsmen"
import Bridesmaids from "./Bridesmaids"

const WeddingPartyContainer = styled.div`
  text-align: center;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
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
      <h2>Wedding Party</h2>
      <CardsContainers>
        <Bridesmaids />
        <Groomsmen />
      </CardsContainers>
    </WeddingPartyContainer>
  )
}

export default WeddingParty
