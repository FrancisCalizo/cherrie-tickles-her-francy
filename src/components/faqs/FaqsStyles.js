import styled from "styled-components"
import { device } from "../breakpoints"

export const FaqContainer = styled.div`
  max-width: var(--container);
  width: 85%;
  margin: 0 auto;
`

export const Subtitle = styled.h2`
  text-align: center;
  margin: 4.5rem 0 2rem;
  font-family: "Alex Brush", cursive;
  font-size: 3.5rem;

  @media ${device.maxMd} {
    font-size: 2.5rem;
  }

  @media ${device.maxSm} {
    font-size: 2rem;
  }
`

export const styles = {
  bgColor: "transparent",
  titleTextColor: "#ff7979",
  // rowTitleColor: "#636e72",
  rowContentColor: "#636e72",
  arrowColor: "#ff7979",
}

export const config = {
  animate: true,
}

export const ScrollRsvp = styled.div`
  // position: relative;
  bottom: 4rem;
`
