import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Particles from "react-particles-js"

import { device } from "../breakpoints"

export const WhenAndWhereImage = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  @media ${device.maxLg} {
    background-attachment: scroll;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 8rem 0;
  text-align: center;
  max-width: var(--container);
  color: white;

  & h3 {
    font-family: "Alex Brush", cursive;
    font-size: 3rem;
  }

  @media ${device.maxMd} {
    flex-wrap: wrap;
  }
`

export const BlackOverlay = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
`

export const Box = styled.div`
  width: 330px;
  border: 2px solid white;
  padding: 3rem 1rem;

  & span {
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media ${device.minMd} and (${device.maxLg}) {
    width: 34vw;
    padding: 1.75rem 0;
  }

  @media ${device.maxSm} {
    width: 100%;
    margin: 0 1rem;

    p {
      font-size: 0.9rem;
    }

    & span {
      font-size: 1rem;
    }
  }
`

export const And = styled.div`
  width: 200px;

  @media ${device.maxMd} {
    width: 100%;
  }

  @media ${device.minMd} and (${device.maxLg}) {
    width: 155px;
  }
`

export const ParticlesContainer = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const particleParams = {
  particles: {
    number: {
      value: 260,
      density: {
        enable: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        speed: 2,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
}

export const ScrollParty = styled.div`
  position: relative;
  bottom: 4rem;
`
