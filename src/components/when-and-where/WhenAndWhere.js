import React from "react"
import { grapql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { device } from "../breakpoints"

const WhenAndWhereImage = styled(BackgroundImage)`
  width: 100%;
  height:
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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
        <h1>When and Where</h1>
      </WhenAndWhereImage>
    </div>
  )
}

export default WhenAndWhere
