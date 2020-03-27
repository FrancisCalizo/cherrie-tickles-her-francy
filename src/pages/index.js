import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Navbar from "../components/layout/Navbar"
import Header from "../components/header/Header"
import Story from "../components/our-story/Story"
import WhenAndWhere from "../components/when-and-where/WhenAndWhere"
import Gallery from "../components/gallery/Gallery"
import Faqs from "../components/faqs/Faqs"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
`
const CSSVariables = styled.div`
  // Colors
  --heart: #ff7979;
  --header-gray: #636e72;

  // Widths
  --container: 1280px;
`

const index = () => {
  return (
    <div>
      <CSSVariables>
        <Navbar />
        <GlobalStyle />
        <Header />
        <Story />
        <WhenAndWhere />
        <Gallery />
        <Faqs />
      </CSSVariables>
    </div>
  )
}

export default index
