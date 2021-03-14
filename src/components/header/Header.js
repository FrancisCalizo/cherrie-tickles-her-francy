import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

import Countdown from "./Countdown"
import {
  HeaderImage,
  BlackOverlay,
  HeaderContent,
  ArrowDown,
  ArrowContainer,
  ScrollStory,
} from "./HeaderStyles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerImageQuery {
      headerImage: file(relativePath: { eq: "beach-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 90) {
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
            <h2>We got married!</h2>
            <Countdown />
            <ArrowContainer onClick={() => scrollTo("#scroll-story")}>
              <ArrowDown icon={faAngleDoubleDown} size="3x" color="white" />
            </ArrowContainer>
          </HeaderContent>
        </BlackOverlay>
      </HeaderImage>
      <ScrollStory id="scroll-story" />
    </header>
  )
}

export default Header
