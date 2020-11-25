import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SlideShow from "../our-story/Slideshow"
import Video from "./Video"

import {
  StoryContainer,
  StoryTop,
  StoryBottom,
  SlideshowDiv,
  ScrollWhenAndWhere,
} from "./StoryStyles"

const Story = () => {
  const data = useStaticQuery(graphql`
    query storyQuery {
      storyInfo: allDataJson {
        edges {
          node {
            storyP1
            storyP2
            cherrieBio
            francisBio
          }
        }
      }
    }
  `)

  return (
    <StoryContainer id="story">
      <StoryTop data-sal="fade" data-sal-duration="1500" data-sal-easing="ease">
        <h2>Our Story</h2>
        <p>{data.storyInfo.edges[0].node.storyP1}</p>
        <p>{data.storyInfo.edges[0].node.storyP2}</p>
      </StoryTop>
      <StoryBottom>
        <div
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h3>Francis Calizo</h3>
          <p>{data.storyInfo.edges[0].node.francisBio}</p>
        </div>
        <SlideshowDiv
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          <SlideShow />
        </SlideshowDiv>
        <div
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h3>Cherrie Sarmiento</h3>
          <p>{data.storyInfo.edges[0].node.cherrieBio}</p>
        </div>
      </StoryBottom>
      <Video />
      <ScrollWhenAndWhere id="scroll-when-and-where" />
    </StoryContainer>
  )
}

export default Story
