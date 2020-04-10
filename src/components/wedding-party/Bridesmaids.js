import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BridesmaidsCard from "./BridesmaidsCard"

const Bridesmaids = () => {
  const data = useStaticQuery(graphql`
    query bridesmaidsQuery {
      bridesmaidsInfo: allBridesmaidsJson {
        edges {
          node {
            id
            name
            order
            title
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
      <h3>Team Bride</h3>
      {data.bridesmaidsInfo.edges.map(
        ({ node: { order, name, title, image, bio } }) => (
          <BridesmaidsCard
            key={order}
            image={image}
            name={name}
            title={title}
            bio={bio}
          />
        )
      )}
    </div>
  )
}

export default Bridesmaids
