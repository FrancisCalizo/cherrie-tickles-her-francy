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
} from "./WhenAndWhereStyles"

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
