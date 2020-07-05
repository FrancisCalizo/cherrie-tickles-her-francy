import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./Footer.css"
import {
  FooterContainer,
  FooterText,
  ArrowUp,
  IconContainer,
} from "./FooterStyles"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query ringImageQuery {
      ringImage: file(relativePath: { eq: "footer-icons/rings.png" }) {
        childImageSharp {
          fixed(quality: 70, width: 70) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
      coupleImage: file(relativePath: { eq: "footer-icons/couple.png" }) {
        childImageSharp {
          fixed(quality: 70, width: 70) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
      toastImage: file(relativePath: { eq: "footer-icons/toast.png" }) {
        childImageSharp {
          fixed(quality: 70, width: 70) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <svg viewBox="0 0 120 20">
        <defs>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use id="wave3" className="wave" href="#wave" x="0" y="-1"></use>
        <use id="wave2" className="wave" href="#wave" x="0" y="0"></use>
      </svg>
      <FooterText>
        <div onClick={() => scrollTo("#header")} tabIndex={-1}>
          <ArrowUp icon={faAngleDoubleUp} size="2x" color="white" />
        </div>
        <IconContainer>
          <Img
            fixed={data.ringImage.childImageSharp.fixed}
            alt={data.ringImage.childImageSharp.fixed.originalName}
          />
          <Img
            fixed={data.coupleImage.childImageSharp.fixed}
            alt={data.coupleImage.childImageSharp.fixed.originalName}
          />
          <Img
            fixed={data.toastImage.childImageSharp.fixed}
            alt={data.toastImage.childImageSharp.fixed.originalName}
          />
        </IconContainer>
        <h3>
          <span role="img" aria-label="coder">
            👨🏽‍💻
          </span>{" "}
          Designed & Built by:{" "}
          <a
            href="https://www.franciscalizo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Francis Calizo
          </a>
        </h3>
        <h3>
          <span role="img" aria-label="camera">
            📷
          </span>{" "}
          Engagement Photos by:{" "}
          <a
            href="https://www.instagram.com/samkohai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sam Hampshire
          </a>
        </h3>
        <h3>
          <span role="img" aria-label="computer">
            💻
          </span>{" "}
          Made with{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby.js
          </a>{" "}
          &{" "}
          <a
            href="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>
        </h3>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
