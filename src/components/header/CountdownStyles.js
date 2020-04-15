import { device } from "../breakpoints"
import styled, { keyframes } from "styled-components"

export const InlineBlock = styled.div`
  display: inline-block;
  transition: all 700ms ease-in;
  opacity: ${props => (props.state === "entered" ? 1.0 : 0.0)};
  overflow: hidden;
`
export const slideUp = keyframes`
from {
  transform: translateY(200px);
}

to {
  transform: translateY(0)
}
`

export const CountdownContainer = styled.div`
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

    @media ${device.maxSm} {
      & > div:nth-child(odd) {
        width:60px;
        height: 70px;
        padding: 0 0.2rem 0.3rem;
      }

      & > div:nth-child(even) {
        margin: 0;
      }
}
`

export const CountownSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  div:nth-child(1) {
    font-family: "Lato", sans-serif;
    font-size: 3.5rem;
  }

  div:nth-child(2) {
    font-size: 1.5rem;
  }

  @media ${device.maxLg} {
    div:nth-child(1) {
      font-size: 3rem;
    }

    div:nth-child(2) {
      font-size: 1rem;
    }
  }

  @media ${device.maxMd} {
    div:nth-child(1) {
      font-size: 2.5rem;
    }
  }

  @media ${device.maxSm} {
    div:nth-child(1) {
      font-size: 1.9rem;
    }
  }
`
export const Placeholder = styled.div`
  visibility: hidden;
  height: 138px;
`
