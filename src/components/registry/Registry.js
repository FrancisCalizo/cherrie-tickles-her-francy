import React from "react"
import styled from "styled-components"
import Iframe from "react-iframe"

export const RegistryContainer = styled.div`
  text-align: center;
  max-width: var(--container);
  margin: 0 auto;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
  }
`

export const Frame = styled(Iframe)`
  border: none;
`

const Registry = () => {
  return (
    <RegistryContainer id="registry">
      <h2>Registry</h2>
      <Frame
        url="https://widget.zola.com/v1/widget/registry/francisandcherrie/html"
        width="100%"
        height="600px"
      />
    </RegistryContainer>
  )
}

export default Registry
