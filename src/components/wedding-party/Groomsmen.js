import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GroomsmenCard from "./GroomsmenCard"

const Groomsmen = () => {
  const data = useStaticQuery(graphql`
    query groomsmanQuery {
      groomsmenInfo: allGroomsmenJson {
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

  // console.log(data.groomsmenInfo.edges)
  // console.log(data.groomsmenImages.edges)
  // console.log(data.groomsmenImages.edges[0].node.childImageSharp.fixed)

  return (
    <div>
      <h3>Team Groom</h3>
      {data.groomsmenInfo.edges.map(
        ({ node: { order, name, title, image, bio } }) => (
          <GroomsmenCard
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

export default Groomsmen
