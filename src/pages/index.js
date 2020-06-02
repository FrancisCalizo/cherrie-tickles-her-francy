import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Head from "../components/head"
import Navbar from "../components/layout/Navbar"
import Header from "../components/header/Header"
import Story from "../components/our-story/Story"
import WhenAndWhere from "../components/when-and-where/WhenAndWhere"
import WeddingParty from "../components/wedding-party/WeddingParty"
import Registry from "../components/registry/Registry"
import Gallery from "../components/gallery/Gallery"
import Faqs from "../components/faqs/Faqs"
import Footer from "../components/layout/Footer"
import Contact from "../components/contact/Contact"
import RSVP from "../components/rsvp/RSVP"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
`
const CSSVariables = styled.div`
  // Colors
  --heart: #ff7979;
  --heart-hover: #ff8383;
  --header-gray: #636e72;

  // Widths
  --container: 1280px;
`

const index = () => {
  return (
    <div>
      <Head />
      <CSSVariables>
        <Navbar />
        <GlobalStyle />
        <Header />
        <Story />
        <WhenAndWhere />
        <WeddingParty />
        <Gallery />
        <Registry />
        <Faqs />
        <RSVP />
        <Contact />
        <Footer />
      </CSSVariables>
    </div>
  )
}

export default index
