import React from "react"
import styled from "styled-components"

export const RegistryContainer = styled.div`
  text-align: center;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
  }
`

const Registry = () => {
  return (
    <RegistryContainer>
      <h2>Registry</h2>
      <a href="https://www.zola.com/registry/francisandcherrie" target="_blank">
        Our wedding registry via Zola
      </a>
    </RegistryContainer>
  )
}

export default Registry
