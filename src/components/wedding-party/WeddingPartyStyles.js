import styled from "styled-components"
import { device } from "../breakpoints"

export const WeddingPartyContainer = styled.div`
  text-align: center;
  padding-top 4rem;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
    margin: 0rem auto 1rem;
  }

  & > div {
    font-size: 3rem;
    padding: 0.5rem;
  }


  @media ${device.maxMd} {
    & h2 {
      font-size: 3rem;
    }

    & > div {
      font-size: 1.9rem;
    }
  }
`

export const CardsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: var(--container);
  margin: 0 auto;
`
export const ScrollGallery = styled.div``
