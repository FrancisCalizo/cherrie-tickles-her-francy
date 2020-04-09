import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Card = () => {
  const data = useStaticQuery(graphql`
    query weddingPartyQuery {
      groomsmenImages: allFile(
        filter: { absolutePath: { regex: "/groomsmen/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 380, width: 240) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.groomsmenImages.edges[0].node.childImageSharp.fixed)
  return (
    <div>
      <h3>Card</h3>
    </div>
  )
}

export default Card
