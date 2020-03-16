import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const HeaderImage = styled(BackgroundImage)`
  height: 100vh;
  width: 80%;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerImageQuery {
      headerImage: file(relativePath: { eq: "wedding-sample.jpg" }) {
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
        title="header-image"
        alt="beach-header-photo"
        fluid={data.headerImage.childImageSharp.fluid}
      />
    </header>
  )
}

export default Header
