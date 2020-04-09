import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GroomsmenCard = () => {
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

      groomsmenInfo: allGroomsmenJson {
        edges {
          node {
            id
            name
            order
            image
            bio
          }
        }
      }

      bridesmaidsImages: allFile(
        filter: { absolutePath: { regex: "/bridesmaids/" } }
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

      bridesmaidsInfo: allBridesmaidsJson {
        edges {
          node {
            id
            name
            order
            image
            bio
          }
        }
      }
    }
  `)

  console.log(data.groomsmenInfo.edges[0].node)
  console.log(data.groomsmenImages.edges[0])
  // console.log(data.groomsmenImages.edges[0].node.childImageSharp.fixed)
  console.log(data.bridesmaidsInfo.edges[0].node)
  console.log(data.bridesmaidsImages.edges[0])
  return (
    <div>
      <h3>Groomsmen Card</h3>
    </div>
  )
}

export default GroomsmenCard
