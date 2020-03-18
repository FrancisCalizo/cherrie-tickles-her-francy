import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StoryCard = styled.div`
  width: 100%;
`

const Story = () => {
  const data = useStaticQuery(graphql`
    query portraitImageQuery {
      storyPortraitOne: file(relativePath: { eq: "beach-shoulder-rest.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      storyPortraitTwo: file(relativePath: { eq: "beach-kiss.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Our Story</h1>
      <StoryContainer>
        <StoryCard>
          <div>
            <Img
              alt="default-photo-francis"
              fluid={data.storyPortraitOne.childImageSharp.fluid}
            />
          </div>
        </StoryCard>
        <div>AND</div>
        <StoryCard>
          <div>
            <Img
              alt="default-photo-francis"
              fluid={data.storyPortraitTwo.childImageSharp.fluid}
            />
          </div>
        </StoryCard>
      </StoryContainer>
    </div>
  )
}

export default Story
