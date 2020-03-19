import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Navbar from "../components/layout/Navbar"
import Header from "../components/header/Header"
import Story from "../components/our-story/Story"
import Slideshow from "../components/our-story/Slideshow"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
`
const CSSVariables = styled.div`
  --heart: #ff7979;
`

const index = () => {
  return (
    <div>
      <CSSVariables>
        <Navbar />
        <GlobalStyle />
        <Header />
        {/* <Story /> */}
        <Slideshow />
      </CSSVariables>
    </div>
  )
}

export default index
