import React from "react"
import styled from "styled-components"
import SlideShow from "../our-story/Slideshow"

import { device } from "../breakpoints"

const StoryContainer = styled.div`
  max-width: var(--container);
  margin: 0 1.5rem;
`

const StoryTop = styled.div`
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

  @media ${device.maxMd}{
    h2 {
      font-size: 3.7rem;
    }

    & p {
      font-size: 1rem;
    }
  }

  @media ${device.minMd} and ${device.maxLg} {
    & h2 {
      font-size: 3rem;
    }

    & p {
      font-size: 1.7vw;
    }
  }
`

const StoryBottom = styled.div`
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

  @media ${device.maxMd}{
    flex-wrap: wrap;

    & div:nth-child(1) {
      text-align: center;
    }

    & div:nth-child(2) {
      margin: 2rem auto;
    }

    & div:nth-child(3) {
      text-align: center;
    }

    & h3 {
      2.2rem;
    }

    & p {
      font-size: 1rem;
    }
  }

  @media ${device.minMd} and ${device.maxLg} {
    & h3 {
      1.7rem;
    }

    & p {
      font-size: 1.7vw;
    }
`

const SlideshowDiv = styled.div`
  margin: 0 4rem;

  @media ${device.minMd} and ${device.maxLg} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Story = () => {
  return (
    <StoryContainer id="story">
      <StoryTop data-sal="fade" data-sal-duration="1500" data-sal-easing="ease">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus
          maiores vel quia in aliquid repudiandae perferendis temporibus! Enim
          quasi aliquam ipsam quibusdam inventore harum ut magni sit! Officia
          exercitationem ab cum quis quo? Sed ipsa qui asperiores reiciendis
          impedit eaque incidunt animi, repellat, unde iure corrupti sapiente
          aut exercitationem pariatur nisi non? Molestiae quo enim ex quae. Quae
          eveniet qui facere optio iure libero praesentium? Natus odit veritatis
          soluta blanditiis error, deserunt at consequatur numquam, quaerat
          culpa repellat suscipit iste reprehenderit iure cumque atque molestias
          nisi dolorem quia placeat corrupti vitae in autem fuga! Repellendus
          ducimus sunt magni, itaque corporis aspernatur quos possimus esse vero
          explicabo neque, ex et, minima omnis eaque corrupti vel quis nihil ut
          autem harum enim perspiciatis? Distinctio commodi placeat cum odio
          temporibus. Et temporibus ad voluptate, eos culpa sapiente harum. Sit,
          hic dicta praesentium rerum, quaerat veniam commodi soluta aperiam
          asperiores necessitatibus, aliquid voluptate?
        </p>
      </StoryTop>
      <StoryBottom>
        <div
          data-sal="slide-right"
          data-sal-duration="1500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h3>Francis Calizo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum
            dolor cupiditate esse enim magnam eius sequi consequuntur dolores ex
            doloribus totam fugit itaque ad labore est, rem obcaecati, provident
            vero facilis dolorum aliquid nulla. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aut natus sunt quod corrupti aliquam
            error possimus nulla ipsa, asperiores fugiat.
          </p>
        </div>
        <SlideshowDiv
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          <SlideShow />
        </SlideshowDiv>
        <div
          data-sal="slide-left"
          data-sal-duration="1500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h3>Cherrie Sarmiento</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum
            dolor cupiditate esse enim magnam eius sequi consequuntur dolores ex
            doloribus totam fugit itaque ad labore est, rem obcaecati, provident
            vero facilis dolorum aliquid nulla. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic doloremque iusto sunt cupiditate
            placeat officiis beatae, tempora maiores facere suscipit.
          </p>
        </div>
      </StoryBottom>
    </StoryContainer>
  )
}

export default Story
