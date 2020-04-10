import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const CardContainer = styled.div`
  border: 1px solid var(--header-gray);
  border-radius: 4px;
  width: 400px;
  margin: 1rem;
  display: flex;
`

const InfoContainer = styled.div`
  position: relative;
  background: #fff;

  &::before {
    content: " ";
    position: absolute;
    display: block;
    width: 45px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    background: white;
    transform-origin: top right;
    -ms-transform: skew(-10deg, 0deg);
    -webkit-transform: skew(-10deg, 0deg);
    transform: skew(-10deg, 0deg);
  }
`

const Info = styled.div`
  position: absolute;
  z-index: 10;
  width: 200px;

  & h3 {
    font-size: 1.25rem;
    margin: 1.3rem auto 0;
  }

  & > div {
    display: inline-block;
    padding: 0.3rem 1rem;
    margin: 0.4rem auto;
    background-color: black;
    color: white;
    font-size: 0.9rem;
    border-radius: 10px;
  }

  & p {
    font-size: 0.9rem;
    color: var(--header-gray);
  }
`

const GroomsmenCard = ({ name, image, title, img, bio }) => {
  const data = useStaticQuery(graphql`
    query groomsmanImageQuery {
      groomsmenImages: allFile(
        filter: { absolutePath: { regex: "/groomsmen/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 210, width: 180) {
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

  // console.log(data.groomsmenImages.edges[1].node.childImageSharp.fixed)
  return (
    <div>
      <CardContainer>
        <Img fixed={getImage(image)} alt="yahyeet" />
        <InfoContainer>
          <Info>
            <h3>{name}</h3>
            <div>{title}</div>
            <p>{bio}</p>
          </Info>
        </InfoContainer>
      </CardContainer>
    </div>
  )
}

export default GroomsmenCard
