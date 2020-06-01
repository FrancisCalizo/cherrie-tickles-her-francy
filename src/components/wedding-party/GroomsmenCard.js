import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  CardContainer,
  Image,
  InfoContainer,
  Info,
} from "./GroomsmenCardStyles"

const GroomsmenCard = ({ name, image, title, bio }) => {
  const data = useStaticQuery(graphql`
    query groomsmanImageQuery {
      groomsmenImages: allFile(
        filter: { absolutePath: { regex: "/groomsmen/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 240, width: 190) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const getImage = name => {
    let res = data.groomsmenImages.edges.filter(el => {
      return el.node.childImageSharp
        ? el.node.childImageSharp.fixed.originalName === name
        : null
    })

    return res.length > 0 ? res[0].node.childImageSharp.fixed : null
  }

  return (
    <CardContainer
      data-sal="slide-up"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      <Image fixed={getImage(image)} alt={image} />
      <InfoContainer>
        <Info>
          <h3>{name}</h3>
          <div>{title}</div>
          <p>{bio}</p>
        </Info>
      </InfoContainer>
    </CardContainer>
  )
}

export default GroomsmenCard
