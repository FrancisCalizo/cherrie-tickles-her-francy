import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;

  & > h2 {
    font-size: 3.5rem;
    font-family: "Alex Brush", cursive;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > h4 {
      margin-left: 0.25rem;
      padding-top: 0.25rem;
    }
  }
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Image = styled(Img)`
  margin: 0.5rem;
`

const g = [
  "beach-kiss-cheek.jpg",
  "beach-donut.jpg",
  "beach-shoulder-rest.jpg",
  "beach-legs-up-kiss.jpg",
  "tree-prom.jpg",
  "tree-hands.jpg",
  "tree-hair.jpg",
  "tree-kiss.jpg",
]

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query galleryQuery {
      allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 380, width: 240) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }

      cameraImage: file(relativePath: { eq: "camera-brown.png" }) {
        childImageSharp {
          fixed(width: 40, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <GalleryContainer id="gallery">
      <h2>Gallery</h2>
      <div>
        <Img
          fixed={data.cameraImage.childImageSharp.fixed}
          alt={data.cameraImage.childImageSharp.originalName}
        />
        <h4>: Sam Hampshire</h4>
      </div>
      <ImagesContainer>
        {data.allFile.edges.map((img, idx) => (
          <Image
            key={idx}
            fixed={img.node.childImageSharp.fixed}
            alt="img.node.childImageSharp.fixed.originalName"
          />
        ))}
      </ImagesContainer>
    </GalleryContainer>
  )
}

export default Gallery
