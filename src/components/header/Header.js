import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Countdown from "./Countdown"

const HeaderImage = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
`

const BlackOverlay = styled.div`
  display: flex;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  color: white;
`
const HeaderContent = styled.div`
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: "Alex Brush", cursive;
    font-size: 6rem;
    margin: 0;
    // letter-spacing: 0.07em;
  }

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerImageQuery {
      headerImage: file(relativePath: { eq: "beach-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header>
      <HeaderImage
        alt="beach-header-photo"
        fluid={data.headerImage.childImageSharp.fluid}
      >
        <BlackOverlay>
          <HeaderContent>
            <h1>Francis & Cherrie</h1>
            <h2>They're getting married!</h2>
            <Countdown />
          </HeaderContent>
        </BlackOverlay>
      </HeaderImage>
    </header>
  )
}

export default Header
