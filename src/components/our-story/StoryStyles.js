import styled from "styled-components"
import { device } from "../breakpoints"

export const StoryContainer = styled.div`
  max-width: var(--container);
  margin: 2rem auto 6rem;
  padding: 0 2.5rem;
`

export const StoryTop = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  & h2 {
    font-size: 3.5rem;
    font-family: "Alex Brush", cursive;
  }

  & p {
    color: var(--header-gray);
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  @media ${device.maxMd} {
    h2 {
      font-size: 3.7rem;
    }

    & p {
      font-size: 1rem;
    }
  }

  @media ${device.minMd} and (${device.maxLg}) {
    & h2 {
      font-size: 3rem;
    }

    & p {
      font-size: 1.7vw;
    }
  }
`

export const StoryBottom = styled.div`
  display: flex;
  justify-content:center;
  margin: 3rem auto;
  max-width: 1100px;

  & > div:nth-child(1) {
    text-align: right;
  }

  & h3 {
    font-size: 2.5rem;
    font-family: "Alex Brush", cursive;
  }

  & p {
    color: var(--header-gray);
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (max-width: 900px) {
    flex-wrap:wrap;

    & div:nth-child(1) {
      text-align: center;
    }

    & div:nth-child(3) {
      text-align: center;
    }
  }

  @media ${device.maxMd}{
    & div:nth-child(2) {
      margin: 2rem auto;
    }

    & h3 {
      font-size: 2.2rem;
    }

    & p {
      font-size: 1rem;
    }
  }

  @media ${device.minMd} and (${device.maxLg}) {
    & h3 {
      font-size:1.7rem;
    }

    & p {
      font-size: 1.7vw;
    }
`

export const SlideshowDiv = styled.div`
  margin: 0 4rem;

  @media ${device.minMd} and (${device.maxLg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const ScrollWhenAndWhere = styled.div``
