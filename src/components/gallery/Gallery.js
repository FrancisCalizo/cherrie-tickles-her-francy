import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query galleryImageQuery {
      allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100, maxWidth: 380) {
                originalImg
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.allFile.edges)
  return (
    <div id="gallery">
      <h1>Photo Gallery</h1>
      <GalleryContainer></GalleryContainer>
    </div>
  )
}

export default Gallery
