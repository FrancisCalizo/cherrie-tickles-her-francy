import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BridesmaidsCard from "./BridesmaidsCard"

const Bridesmaids = () => {
  const data = useStaticQuery(graphql`
    query bridesmaidsQuery {
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

  // console.log(data.groomsmenImages.edges[0].node.childImageSharp.fixed)
  // console.log(data.bridesmaidsInfo.edges[0].node)
  // console.log(data.bridesmaidsImages.edges[0])
  return (
    <div>
      <h3>Bridesmaids</h3>
      <BridesmaidsCard />
    </div>
  )
}

export default Bridesmaids
