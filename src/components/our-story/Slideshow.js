import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import useInterval from "../hooks/useInterval"

const Slides = styled(Img)`
  width: 300px;
  // border-radius: 300px
`

const Slideshow = () => {
  const data = useStaticQuery(graphql`
    query slideshowImageQuery {
      slideshowOne: file(
        relativePath: { eq: "slideshow/beach-shoulder-rest.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      slideshowTwo: file(relativePath: { eq: "slideshow/beach-kiss.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      slideshowThree: file(
        relativePath: { eq: "slideshow/beach-kiss-cheek.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      slideshowFour: file(relativePath: { eq: "slideshow/beach-held.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [currentPhoto, setCurrentPhoto] = useState(
    data.slideshowOne.childImageSharp.fluid
  )

  useInterval(() => {
    switch (true) {
      case currentPhoto === data.slideshowOne.childImageSharp.fluid:
        setCurrentPhoto(data.slideshowTwo.childImageSharp.fluid)
        break
      case currentPhoto === data.slideshowTwo.childImageSharp.fluid:
        setCurrentPhoto(data.slideshowThree.childImageSharp.fluid)
        break
      case currentPhoto === data.slideshowThree.childImageSharp.fluid:
        setCurrentPhoto(data.slideshowFour.childImageSharp.fluid)
        break
      case currentPhoto === data.slideshowFour.childImageSharp.fluid:
        setCurrentPhoto(data.slideshowOne.childImageSharp.fluid)
        break
    }
  }, 3000)

  return (
    <div id="story">
      <Slides alt="default-photo-francis" fluid={currentPhoto} />
    </div>
  )
}

export default Slideshow
