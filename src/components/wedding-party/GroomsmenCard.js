import React from "react"
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
    font-size: 1.2rem;
    margin: 0.5rem auto 0;
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

const GroomsmenCard = ({ order, name, image, title, img, bio }) => {
  console.log(name)
  return (
    <div>
      <CardContainer>
        <Img fixed={img} alt={img.originalName} />
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
