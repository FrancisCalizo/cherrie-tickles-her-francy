import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Transition } from "react-transition-group"

import useInterval from "../hooks/useInterval"
import { Slides } from "./SlideshowStyles"

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

  const [trans, setTrans] = useState(true)
  const [currentPhoto, setCurrentPhoto] = useState(
    data.slideshowOne.childImageSharp.fluid
  )

  useInterval(() => {
    setTrans(false)
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
      default:
        return
    }
    setTrans(true)
  }, 5000)

  return (
    <div>
      <Transition in={trans} timeout={200}>
        {state => (
          <div>
            <Slides alt="slideshow-pics" fluid={currentPhoto} state={state} />
          </div>
        )}
      </Transition>
    </div>
  )
}

export default Slideshow
