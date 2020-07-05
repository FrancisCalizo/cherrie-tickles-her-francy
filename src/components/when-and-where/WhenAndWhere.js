import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  Container,
  WhenAndWhereImage,
  BlackOverlay,
  Box,
  And,
  ParticlesContainer,
  particleParams,
  ScrollParty,
} from "./WhenAndWhereStyles"

const WhenAndWhere = () => {
  const data = useStaticQuery(graphql`
    query whenAndWhereBackground {
      whenAndWhereImage: file(relativePath: { eq: "oma.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 80) {
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
                <span>Venue TBD</span>
                <br />
                <br />
                Saturday | February 6, 2021 <br />
                Time TBD
                <br />
                Address TBD
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
                <span>Orlando Museum of Art</span>
                <br />
                <br />
                Saturday | February 6, 2021 <br />
                05:00 PM – 10:00 PM <br />
                2416 N Mills Ave, Orlando, FL 32803
              </p>
            </Box>
          </Container>
        </BlackOverlay>
      </WhenAndWhereImage>
      <ScrollParty id="scroll-party" />
    </div>
  )
}

export default WhenAndWhere
