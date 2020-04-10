import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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

  const GroomsmenContainer = styled.div`
    & > h3 {
      font-size: 3rem;
      margin: 0.5rem;
    }
  `

  return (
    <GroomsmenContainer>
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
    </GroomsmenContainer>
  )
}

export default Groomsmen
