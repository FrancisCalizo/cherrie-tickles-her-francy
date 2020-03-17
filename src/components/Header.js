import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

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

  h1 {
    font-family: "Parisienne", cursive;
    font-size: 5rem;
    letter-spacing: 0.05em;
    text-align: center;
    line-height: 4.5rem;
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
          </HeaderContent>
        </BlackOverlay>
      </HeaderImage>
    </header>
  )
}

export default Header
