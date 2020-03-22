import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  console.log(data.allFile.edges.sort(sortFunction))

  // console.log(
  //   data.allFile.edges.node.childImageSharp.fluid.originalName.sort((a, b) => {
  //     return galleryorder.indexOf(a) - galleryorder.indexOf(b)
  //   })
  // )

  return (
    <div id="gallery">
      <h1>Photo Gallery</h1>
      <GalleryContainer></GalleryContainer>
    </div>
  )
}

export default Gallery
