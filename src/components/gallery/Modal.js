import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactModal from "react-modal"

const Modal = ({ showModal, handleCloseModal, modalImage }) => {
  const modalData = useStaticQuery(graphql`
    query ModalQuery {
      modalImages: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, height: 600, width: 400) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
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
          fixed={modalData.modalImages.edges[0].node.childImageSharp.fixed}
          alt={
            modalData.modalImages.edges[0].node.childImageSharp.fixed
              .originalName
          }
        />
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </Fragment>
  )
}

export default Modal
