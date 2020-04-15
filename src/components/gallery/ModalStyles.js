import styled from "styled-components"
import Img from "gatsby-image"
import { device } from "../breakpoints"

export const ModalStyles = {
  overlay: {
    zIndex: 20,
    backgroundColor: "transparent",
  },
  content: {
    backgroundColor: "rgba(0,0,0,0.75)",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
  },
}

export const ImageContainer = styled.div`
  width: 95vw;
  height: 95vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled(Img)`
  height: 100%;
  width: 100%;
  max-height: 700px;
  max-width: 460px;

  @media ${device.maxMd} {
    max-height: 560px;
    max-width: 340px;
  }

  @media ${device.maxSm} {
    max-height: 460px;
    max-width: 270px;
  }
`

export const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 5rem;
  padding: 1rem 2rem;
  font-size: 2.5rem;
  color: #d2d2d2;
  cursor: pointer;
  font-weight: bold;

  @media ${device.maxMd} {
    right: 3rem;
  }

  @media ${device.maxSm} {
    right: 1rem;
  }
`
