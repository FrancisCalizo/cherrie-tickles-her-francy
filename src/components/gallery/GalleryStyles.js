import styled from "styled-components"
import Img from "gatsby-image"

export const GalleryContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;

  & > div {
    margin: 4rem auto;

    & > h2 {
      font-size: 3.5rem;
      font-family: "Alex Brush", cursive;
      margin-bottom: 0;
      line-height: 1rem;
    }

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      & > h4 {
        margin-left: 0.25rem;
        padding-top: 0.25rem;
      }
    }
  }
`

export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Image = styled(Img)`
  margin: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
`
