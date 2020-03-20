import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"

import Countdown from "./Countdown"
import { size, device } from "../breakpoints"

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
const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const HeaderContent = styled.div`
  margin: 3rem auto 0;
  text-align: center;

  h1 {
    font-family: "Alex Brush", cursive;
    font-size: 6rem;
    margin: 0;
    animation ${appear} 1.5s ease-in-out;
  }

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
    animation ${appear} 2.5s ease-in-out;
  }

  @media ${device.maxMd}{
    h1{
      font-size: 4rem;
    }

    h2{
      font-size: 0.9rem;
    }
  }

  @media ${device.minMd} and ${device.maxLg}{
    h1{
      font-size: 9vw;
    }

    h2{
      font-size: 2vw;
    }
  }

`

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
