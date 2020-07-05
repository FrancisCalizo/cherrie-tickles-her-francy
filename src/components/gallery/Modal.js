import React, { Fragment, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactModal from "react-modal"

import { ModalStyles, ImageContainer, Image, Close } from "./ModalStyles"

const Modal = ({ showModal, handleCloseModal, modalImageName }) => {
  const modalData = useStaticQuery(graphql`
    query ModalQuery {
      modalImages: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 90, height: 700, width: 430) {
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

  // useRef to Capture Outside Modal Click
  const wrapper = useRef()

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false)
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickOutside = event => {
    if (wrapper.current === event.target) {
      handleCloseModal()
    }
  }

  return (
    <Fragment>
      <ReactModal isOpen={showModal} ariaHideApp={false} style={ModalStyles}>
        <ImageContainer ref={wrapper}>
          <Close onClick={handleCloseModal}>X</Close>
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
      </ReactModal>
    </Fragment>
  )
}

export default Modal
