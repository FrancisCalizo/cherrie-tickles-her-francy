import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryContainer = styled.div`
  max-width: var(--container);
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ImageContainer = styled.div`
  width: 21%;
  max-width: 320px;
  text-align: center;
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

const sortFunction = (a, b) => {
  const imageA = a.node.childImageSharp.fixed.originalName
  const imageB = b.node.childImageSharp.fixed.originalName

  let comparison = 0
}

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query galleryImageQuery {
      allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 350, width: 230) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  console.log(
    data.allFile.edges.map((img, idx) => {
      return img.node.childImageSharp.fixed
    })
  )

  return (
    <GalleryContainer id="gallery">
      <h1>Photo Gallery</h1>
      <ImagesContainer>
        {data.allFile.edges.map((img, idx) => (
          <ImageContainer key={idx}>
            <Img
              fixed={img.node.childImageSharp.fixed}
              alt="img.node.childImageSharp.fixed.originalName"
            />
          </ImageContainer>
        ))}
      </ImagesContainer>
    </GalleryContainer>
  )
}

export default Gallery
