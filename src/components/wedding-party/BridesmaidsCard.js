import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  CardContainer,
  Image,
  InfoContainer,
  Info,
} from "./BridesmaidsCardStyles"

const BridesmaidsCard = ({ name, image, title, bio }) => {
  const data = useStaticQuery(graphql`
    query bridesmaidsImageQuery {
      bridesmaidsImages: allFile(
        filter: { absolutePath: { regex: "/bridesmaids/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 230, width: 190) {
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
    let res = data.bridesmaidsImages.edges.filter(el => {
      return el.node.childImageSharp
        ? el.node.childImageSharp.fixed.originalName === name
        : null
    })

    return res.length > 0 ? res[0].node.childImageSharp.fixed : null
  }

  return (
    <CardContainer
      data-sal="slide-right"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      <InfoContainer>
        <Info>
          <h3>{name}</h3>
          <div>{title}</div>
          <p>{bio}</p>
        </Info>
      </InfoContainer>
      <Image fixed={getImage(image)} alt={image} />
    </CardContainer>
  )
}

export default BridesmaidsCard
