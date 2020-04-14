import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Modal from "./Modal"
import {
  Container,
  GalleryContainer,
  ImagesContainer,
  Image,
  ScrollRegistry,
} from "./GalleryStyles"

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

  const [showModal, setShowModal] = useState(false)
  const [modalImageName, setmodalImageName] = useState(null)

  const handleOpenModal = e => {
    setmodalImageName(e.target.alt)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setmodalImageName(null)
    setShowModal(false)
  }

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
    <Container>
      <GalleryContainer id="gallery">
        <Modal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          modalImageName={modalImageName}
        />
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
            <h4>
              :{" "}
              <a
                href="https://www.instagram.com/samkohai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sam Hampshire
              </a>
            </h4>
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
              onClick={handleOpenModal}
            >
              <Image
                fixed={img.node.childImageSharp.fixed}
                alt={img.node.childImageSharp.fixed.originalName}
              />
            </div>
          ))}
        </ImagesContainer>
      </GalleryContainer>
      <ScrollRegistry id="scroll-registry" />
    </Container>
  )
}

export default Gallery
