import React from "react"
import styled from "styled-components"
import Iframe from "react-iframe"

export const RegistryContainer = styled.div`
  text-align: center;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 1rem;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
    margin-bottom: 0;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: inline-block;
  margin: 1rem auto 3rem;

  & p {
    color: var(--header-gray);
  }

  & a {
    cursor: pointer;
    color: var(--heart);
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`

export const Frame = styled(Iframe)`
  border: 1px solid #dcdde1;
  border-radius: 4px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15), 0 3px 7px 0 rgba(0, 0, 0, 0.19);
`

const Registry = () => {
  return (
    <RegistryContainer id="registry">
      <h2>Registry</h2>
      <InfoContainer>
        <p>
          We have a small{" "}
          <a
            href="https://www.zola.com/registry/francisandcherrie"
            target="_blank"
          >
            registry through Zola
          </a>{" "}
          (see below) should you be compelled by extreme generosity. We are
          immensely grateful for both your presence and any contributions as we
          start our lives together!
        </p>
        <p>
          Our registry may seem to be on the smaller side as we both feel we
          have everything we need. On the contrary, any monetary gifts to
          support our dream honeymoon & travel fund would be extraordinarily
          delightful.
        </p>
      </InfoContainer>
      <Frame
        url="https://widget.zola.com/v1/widget/registry/francisandcherrie/html"
        width="100%"
        height="600px"
      />
    </RegistryContainer>
  )
}

export default Registry
