import React from "react"
import styled from "styled-components"

export const WeddingPartyContainer = styled.div`
  text-align: center;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
  }
`

const WeddingParty = () => {
  return (
    <WeddingPartyContainer>
      <h2>Wedding Party</h2>
      <p>Coming soon...</p>
    </WeddingPartyContainer>
  )
}

export default WeddingParty
