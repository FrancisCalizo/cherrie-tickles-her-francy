import React from "react"
import styled from "styled-components"

import "./Footer.css"

const Top = styled.div`
  height: 200px;
`

const Footer = () => {
  return (
    <footer>
      <svg viewBox="0 0 120 20">
        <defs>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use id="wave3" class="wave" href="#wave" x="0" y="-1"></use>
        <use id="wave2" class="wave" href="#wave" x="0" y="0"></use>
      </svg>
      <div>
        <span>wowo</span>
      </div>
    </footer>
  )
}

export default Footer
