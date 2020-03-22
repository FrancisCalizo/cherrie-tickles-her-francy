import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled(Img)`
  height: 380px;
  width: 33%;
`

const g = [
  "beach-kiss-cheek.jpg",
  "beach-donut.jpg",
  "beach-legs-up-kiss.jpg",
  "tree-prom.jpg",
  "tree-hands.jpg",
  "tree-kiss.jpg",
]

const sortFunction = (a, b) => {
  const imageA = a.node.childImageSharp.fluid.originalName
  const imageB = b.node.childImageSharp.fluid.originalName

  let comparison = 0
}

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query galleryImageQuery {
      allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100, maxWidth: 380) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(
    data.allFile.edges.map((img, idx) => {
      return img.node.childImageSharp.fluid
    })
  )

  return (
    <div id="gallery">
      <h1>Photo Gallery</h1>
      <GalleryContainer>
        {data.allFile.edges.map((img, idx) => (
          <Image
            fluid={img.node.childImageSharp.fluid}
            alt="img.node.childImageSharp.fluid.originalName"
          />
        ))}
      </GalleryContainer>
    </div>
  )
}

export default Gallery
