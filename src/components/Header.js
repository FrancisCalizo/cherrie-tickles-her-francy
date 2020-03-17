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
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  color: white;
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
          <h1>Hello World</h1>
        </BlackOverlay>
      </HeaderImage>
    </header>
  )
}

export default Header
