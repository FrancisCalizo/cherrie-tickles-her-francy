import React from "react"
import { createGlobalStyle } from "styled-components"

import Navbar from "../components/layout/Navbar"
import CheckScroll from "../components/layout/CheckScroll"
import Header from "../components/header/Header"
import Story from "../components/our-story/Story"
import Slideshow from "../components/our-story/Slideshow"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
`

const index = () => {
  return (
    <div>
      <CheckScroll />
      {/* <Navbar /> */}
      <GlobalStyle />
      <Header />
      {/* <Story /> */}
      <Slideshow />
    </div>
  )
}

export default index
