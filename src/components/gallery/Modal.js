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
  width: 95vw;
  height: 95vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Close = styled.div`
  position: absolute;
  top: 2rem;
  right: 5rem;
  padding: 1rem 2rem;
  font-size: 2.5rem;
  color: #d2d2d2;
  cursor: pointer;
  font-weight: bold;
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
          <Close onClick={handleCloseModal}>X</Close>
          {imageNode.current.length > 0 && (
            <Img
              fixed={imageNode.current[0].node.childImageSharp.fixed}
              alt={
                modalData.modalImages.edges[0].node.childImageSharp.fixed
                  .originalName
              }
            />
          )}
        </ImageContainer>
      </ReactModal>
    </Fragment>
  )
}

export default Modal
