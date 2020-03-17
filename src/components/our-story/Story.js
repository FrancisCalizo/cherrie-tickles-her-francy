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
      storyPortraitOne: file(relativePath: { eq: "beach-kiss.jpg" }) {
        childImageSharp {
          fixed(fit: CONTAIN) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      storyPortraitTwo: file(relativePath: { eq: "beach-shoulder-rest.jpg" }) {
        childImageSharp {
          fixed(fit: CONTAIN) {
            ...GatsbyImageSharpFixed
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
              fixed={data.storyPortraitOne.childImageSharp.fixed}
            />
          </div>
        </StoryCard>
        <div>AND</div>
        <StoryCard>
          <div>
            <Img
              alt="default-photo-francis"
              fixed={data.storyPortraitTwo.childImageSharp.fixed}
            />
          </div>
        </StoryCard>
      </StoryContainer>
    </div>
  )
}

export default Story
