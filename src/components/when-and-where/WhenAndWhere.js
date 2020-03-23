import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Particles from "react-particles-js"

import { device } from "../breakpoints"

const Container = styled.div`
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

const WhenAndWhereImage = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
`

const BlackOverlay = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
`

const Box = styled.div`
  width: 330px;
  border: 2px solid white;
  padding: 3rem 1rem;

  @media ${device.minMd} and ${device.maxLg}{
    width: 34vw;
    padding: 1.75rem 0;
  }
`

const And = styled.div`
  width: 200px;

  @media ${device.maxMd} {
    width: 100%;
  }

  @media ${device.minMd} and ${device.maxLg}{
    width: 155px;
  }
`

const ParticlesContainer = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const particleParams = {
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

const WhenAndWhere = () => {
  const data = useStaticQuery(graphql`
    query whenAndWhereBackground {
      whenAndWhereImage: file(relativePath: { eq: "oma.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="when-and-where">
      <WhenAndWhereImage
        alt="when-and-where"
        fluid={data.whenAndWhereImage.childImageSharp.fluid}
      >
        <ParticlesContainer params={particleParams} />
        <BlackOverlay>
          <Container>
            <Box
              data-sal="fade"
              data-sal-duration="600"
              data-sal-delay="100"
              data-sal-easing="ease-in-out"
            >
              <h3>Ceremony</h3>
              <p>
                St. Thomas Shelby Church
                <br />
                <br />
                Sunday, 14 February 2016 <br />
                10:00 AM – 14:00 PM <br />
                123 Redwood Ct, Auburn, WA
              </p>
            </Box>
            <And
              data-sal="fade"
              data-sal-duration="600"
              data-sal-delay="100"
              data-sal-easing="ease-in-out"
            >
              <h3>And</h3>
            </And>
            <Box
              data-sal="fade"
              data-sal-duration="600"
              data-sal-delay="100"
              data-sal-easing="ease-in-out"
            >
              <h3>Reception</h3>
              <p>
                Orlando Museum of Art
                <br />
                <br />
                Sunday, 14 February 2016 <br />
                10:00 AM – 14:00 PM <br />
                123 Redwood Ct, Auburn, WA
              </p>
            </Box>
          </Container>
        </BlackOverlay>
      </WhenAndWhereImage>
    </div>
  )
}

export default WhenAndWhere
