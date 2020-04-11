import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const CardContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 410px;
  margin: 2rem 2rem;
  display: flex;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.4);
  background: white;
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
    border-left: 0.1rem solid #b2bec3;
  }
`

const Info = styled.div`
  position: absolute;
  z-index: 10;
  width: 200px;

  & h3 {
    font-size: 1.35rem;
    margin: 1.3rem auto 0;
  }

  & > div {
    display: inline-block;
    padding: 0.4rem 0.7rem;
    margin: 0.4rem auto;
    // background-color: var(--header-gray);
    background-color: #1e3799;
    color: white;
    font-size: 0.9rem;
    border-radius: 6px;
  }

  & p {
    font-size: 0.9rem;
    color: var(--header-gray);
  }
`

const GroomsmenCard = ({ name, image, title, bio }) => {
  const data = useStaticQuery(graphql`
    query groomsmanImageQuery {
      groomsmenImages: allFile(
        filter: { absolutePath: { regex: "/groomsmen/" } }
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
    let res = data.groomsmenImages.edges.filter(el => {
      return el.node.childImageSharp
        ? el.node.childImageSharp.fixed.originalName === name
        : null
    })

    return res.length > 0 ? res[0].node.childImageSharp.fixed : null
  }

  return (
    <CardContainer
      data-sal="slide-left"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      <Img fixed={getImage(image)} alt={image} />
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
