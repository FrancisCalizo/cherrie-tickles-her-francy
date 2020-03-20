import React from "react"
import styled from "styled-components"
import SlideShow from "../our-story/Slideshow"

const StoryContainer = styled.div`
  max-width: var(--container);
  margin: 0 auto;
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
`

const StoryBottom = styled.div`
  display: flex;
  margin: 3rem auto;
  max-width: 1100px;

  & > div:nth-child(1) {
    text-align: right;
  }

  & h3 {
    font-size: 2.5rem;
    font-family: "Alex Brush", cursive;
    margin: 0 auto;
  }

  & p {
    color: var(--header-gray);
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const SlideshowDiv = styled.div`
  margin: 0 4rem;
`

const Story = () => {
  return (
    <StoryContainer>
      <StoryTop>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aperiam tenetur temporibus blanditiis vel incidunt nulla maiores
          impedit, in saepe atque aliquid. Corrupti labore ad molestias libero,
          tempora facilis id quas! Quae sed laudantium libero. Possimus odit
          asperiores vel optio minus id. Temporibus magnam est placeat labore
          saepe, dolor minus iusto quo, blanditiis in nesciunt molestiae
          reprehenderit. Delectus omnis sequi nemo, temporibus, voluptas eveniet
          iure deleniti quam sed eum nam dolorem, earum nihil blanditiis. Modi
          nobis voluptates laborum suscipit iure pariatur quos officiis adipisci
          dolores sequi, officia dicta, repellendus ex earum unde quod facere
          assumenda? Sint consectetur maxime repellat porro accusamus sapiente.
          Dolor accusamus qui iste voluptate? Culpa illum sequi assumenda magnam
          quia molestiae autem amet saepe est vitae? Eligendi corrupti quisquam
          aperiam ea ab doloribus suscipit repudiandae deserunt nulla, molestias
          aspernatur ad saepe. Unde hic aut cum, provident amet.
        </p>
      </StoryTop>
      <StoryBottom>
        <div>
          <h3>Francis Calizo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            molestiae, quae perspiciatis aliquam, corporis fugit voluptatem
            doloremque, ut iusto reprehenderit culpa labore sit voluptas ipsa
            rem odit quia esse consectetur placeat incidunt quos sequi. Quos
            eveniet beatae voluptatibus nisi? Tempore fuga vel impedit quam
            voluptas autem dolor ullam voluptatem fugit provident saepe sequi
            assumenda cumque consequuntur obcaecati culpa, omnis distinctio
            minus laudantium dolores, ducimus unde? Iste corrupti fugiat iure
            error consequuntur vero maiores doloremque reprehenderit sapiente.
          </p>
        </div>
        <SlideshowDiv>
          <SlideShow />
        </SlideshowDiv>
        <div>
          <h3>Cherrie Sarmiento</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni
            sunt enim aliquid, ad quae recusandae nostrum eius officia, tenetur
            suscipit hic voluptate, ipsum tempora at illo cupiditate porro aut
            mollitia explicabo! Aliquam nam architecto ex tenetur maxime fugiat
            minus, asperiores magnam nesciunt a inventore omnis quam, deserunt
            at aut quia. Accusamus consectetur eius, deleniti obcaecati soluta
            ipsam ratione aperiam accusantium maiores, quas, sit ullam! Mollitia
            dolor quam velit nostrum alias cum blanditiis, magni, ullam rerum
            quasi iste dolore ducimus quas optio rem enim nihil itaque laborum
            libero, id cumque! Quidem beatae est odio velit dolorum ipsa, autem
            fuga modi!
          </p>
        </div>
      </StoryBottom>
    </StoryContainer>
  )
}

export default Story
