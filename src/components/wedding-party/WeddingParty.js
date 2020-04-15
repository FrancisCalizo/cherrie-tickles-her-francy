import React from "react"
import {
  WeddingPartyContainer,
  CardsContainers,
  ScrollGallery,
} from "./WeddingPartyStyles"

import Groomsmen from "./Groomsmen"
import Bridesmaids from "./Bridesmaids"

const WeddingParty = () => {
  return (
    <WeddingPartyContainer id="party">
      <h2 data-sal="fade" data-sal-duration="700" data-sal-easing="ease-in-out">
        Wedding Party
      </h2>
      <CardsContainers>
        {/* <Bridesmaids /> */}
        {/* <Groomsmen /> */}
      </CardsContainers>
      <ScrollGallery id="scroll-gallery" />
    </WeddingPartyContainer>
  )
}

export default WeddingParty
