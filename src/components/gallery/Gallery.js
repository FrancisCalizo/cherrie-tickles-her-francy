import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;

  & > div {
    margin: 4rem auto;

    & > h2 {
      font-size: 3.5rem;
      font-family: "Alex Brush", cursive;
      margin-bottom: 0;
      line-height: 1rem;
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
  }
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Image = styled(Img)`
  margin: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
`

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query galleryQuery {
      galleryImages: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
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

  const compare = (a, b) => {
    const order = [
      "beach-donut.jpg",
      "beach-kiss-cheek.jpg",
      "beach-shoulder-rest.jpg",
      "beach-legs-up-kiss.jpg",
      "tree-hands.jpg",
      "tree-prom.jpg",
      "tree-hair.jpg",
      "tree-kiss.jpg",
    ]

    const pictureA = a.node.childImageSharp.fixed.originalName
    const pictureB = b.node.childImageSharp.fixed.originalName
    let comparison = 0

    return order.indexOf(pictureA) - order.indexOf(pictureB)
  }

  return (
    <GalleryContainer id="gallery">
      <div
        data-sal="fade"
        data-sal-duration="600"
        data-sal-delay="100"
        data-sal-easing="ease-in-out"
      >
        <h2>Gallery</h2>
        <div>
          <Img
            fixed={data.cameraImage.childImageSharp.fixed}
            alt={data.cameraImage.childImageSharp.originalName}
          />
          <h4>: Sam Hampshire</h4>
        </div>
      </div>
      <ImagesContainer>
        {data.galleryImages.edges.sort(compare).map((img, idx) => (
          <div
            key={idx}
            data-sal="fade"
            data-sal-duration="600"
            data-sal-delay={100 * idx}
            data-sal-easing="ease-in-out"
          >
            <Image
              fixed={img.node.childImageSharp.fixed}
              alt="img.galleryImages.childImageSharp.fixed.originalName"
            />
          </div>
        ))}
      </ImagesContainer>
    </GalleryContainer>
  )
}

export default Gallery
