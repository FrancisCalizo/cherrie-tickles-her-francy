import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Countdown from "./Countdown"
import { HeaderImage, BlackOverlay, HeaderContent } from "./HeaderStyles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerImageQuery {
      headerImage: file(relativePath: { eq: "beach-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header id="header">
      <HeaderImage
        alt="beach-header-photo"
        fluid={data.headerImage.childImageSharp.fluid}
      >
        <BlackOverlay>
          <HeaderContent>
            <h1>Francis & Cherrie</h1>
            <h2>We're getting married!</h2>
            <Countdown />
          </HeaderContent>
        </BlackOverlay>
      </HeaderImage>
    </header>
  )
}

export default Header
