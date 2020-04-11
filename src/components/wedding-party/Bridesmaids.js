import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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

  const BridesmaidsContainer = styled.div`
    & > h3 {
      font-size: 3rem;
      margin: 0.5rem;
    }
  `

  return (
    <BridesmaidsContainer>
      <h3>👰 Team Bride</h3>
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
    </BridesmaidsContainer>
  )
}

export default Bridesmaids
