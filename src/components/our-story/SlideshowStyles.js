import Img from "gatsby-image"
import styled from "styled-components"

export const Slides = styled(Img)`
  width: 300px;
  border-radius: 500px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  transition: opacity 1000ms ease-in-out;
  opacity: ${props => {
    switch (props.state) {
      case "entering":
        return 0.25
      case "entered":
        return 1.0
      default:
        return 0
    }
  }};
`
