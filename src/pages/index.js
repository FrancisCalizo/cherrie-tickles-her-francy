import React from "react"
import { createGlobalStyle } from "styled-components"

import Header from "../components/header/Header"
import Navbar from "../components/layout/Navbar"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
`

const index = () => {
  return (
    <div>
      <Navbar />
      <GlobalStyle />
      <Header />
    </div>
  )
}

export default index
