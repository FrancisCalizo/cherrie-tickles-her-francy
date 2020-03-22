import React from "react"
import { grapql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { device } from "../breakpoints"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 12rem 0;
  text-align: center;
  max-width: var(--container);
  color: white;

  & h3 {
    font-family: "Alex Brush", cursive;
    font-size: 3rem;
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
`

const And = styled.div`
  width: 200px;
`

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
        <BlackOverlay>
          <Container>
            <Box>
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
            <And>
              <h3>And</h3>
            </And>
            <Box>
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
