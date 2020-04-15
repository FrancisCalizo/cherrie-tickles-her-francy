import styled, { keyframes } from "styled-components"
import { device } from "../breakpoints"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const HeaderImage = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
`

export const BlackOverlay = styled.div`
  display: flex;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  color: white;
`
export const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
export const HeaderContent = styled.div`
  margin: 3rem auto 0;
  text-align: center;

  h1 {
    font-family: "Alex Brush", cursive;
    font-size: 6rem;
    margin: 0;
    animation ${appear} 2s ease-in-out;
  }

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
    animation ${appear} 3s ease-in-out;
  }

  @media ${device.maxLg}{
    h1{
      font-size: 9vw;
    }

    h2{
      font-size: 2vw;
    }
  }

  @media ${device.maxMd}{
    h1{
      font-size: 3.9rem;
    }

    h2{
      font-size: 0.9rem;
    }
  }

  @media ${device.maxSm}{
    h1{
      font-size: 13vw;
    }
  }
`

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`

export const ArrowContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 2rem;
  width: 50px;
  &:hover {
    cursor: pointer;
  }
`

export const ArrowDown = styled(FontAwesomeIcon)`
  animation: ${bounce} 1.5s infinite;
`
export const ScrollStory = styled.div`
  position: absolute;
  bottom: 4rem;
`
