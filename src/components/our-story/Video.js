import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactPlayer from "react-player/youtube"
import Img from "gatsby-image"
import styled from "styled-components"

const Video = () => {
  const data = useStaticQuery(graphql`
    query videoQuery {
      videoImage: file(relativePath: { eq: "video-img.png" }) {
        childImageSharp {
          fixed(width: 40, quality: 50) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const URL = "https://www.youtube.com/watch?v=x1tvC-N5w0c"

  return (
    <div style={{ maxWidth: 640, margin: "80px auto 0" }}>
      <H2>Engagement Video</H2>
      <TitleContainer>
        <Img
          fixed={data.videoImage.childImageSharp.fixed}
          alt={data.videoImage.childImageSharp.originalName}
        />
        <h4>
          :{" "}
          <a
            href="https://www.youtube.com/user/ProFilipino91"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marc Gabas
          </a>
        </h4>
      </TitleContainer>
      <ReactPlayer url={URL} width="100%" controls />
    </div>
  )
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & > h4 {
    margin-left: 0.25rem;
    padding-top: 0.25rem;
  }

  & a {
    color: black;
    text-decoration: none;
  }

  & a:hover {
    color: var(--heart);
    text-decoration: underline;
  }
`

const H2 = styled.h2`
  font-size: 2.5rem;
  font-family: "Alex Brush", cursive;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1rem;
  text-align: center;
`

export default Video
