import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactModal from "react-modal"

const Modal = ({ showModal, setShowModal, handleCloseModal, modalImage }) => {
  const modalData = useStaticQuery(graphql`
    query ModalQuery {
      modalImage: file(relativePath: { eq: "gallery/beach-donut.jpg" }) {
        childImageSharp {
          fixed(quality: 100, height: 200) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <ReactModal
        isOpen={showModal}
        ariaHideApp={false}
        contentLabel="Minimal Modal Example"
        style={{
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
        }}
      >
        <Img
          fixed={modalData.modalImage.childImageSharp.fixed}
          alt={modalData.modalImage.childImageSharp.fixed.originalName}
        />
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </Fragment>
  )
}

export default Modal
