import React, { Fragment, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactModal from "react-modal"

const ModalStyles = {
  overlay: {
    zIndex: 20,
    backgroundColor: "transparent",
  },
  content: {
    backgroundColor: "rgba(0,0,0,0.75)",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
  },
}

const ImageContainer = styled.div`
  display: block;
`

const Image = styled(Img)`
  display: block;
`

const Modal = ({ showModal, handleCloseModal, modalImageName }) => {
  const modalData = useStaticQuery(graphql`
    query ModalQuery {
      modalImages: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 800, width: 505) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  // useRef to Filter Which Picture to Use for Modal
  const imageNode = useRef(null)
  imageNode.current = modalData.modalImages.edges.filter(img => {
    return img.node.childImageSharp.fixed.originalName === modalImageName
  })

  return (
    <Fragment>
      <ReactModal isOpen={showModal} ariaHideApp={false} style={ModalStyles}>
        <ImageContainer>
          {imageNode.current.length > 0 && (
            <Image
              fixed={imageNode.current[0].node.childImageSharp.fixed}
              alt={
                modalData.modalImages.edges[0].node.childImageSharp.fixed
                  .originalName
              }
            />
          )}
        </ImageContainer>
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </Fragment>
  )
}

export default Modal
