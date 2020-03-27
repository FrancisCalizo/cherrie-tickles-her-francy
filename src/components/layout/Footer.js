import React from "react"
import styled from "styled-components"

import "./Footer.css"

const FooterContainer = styled.div`
  width: 100%;
  bottom: 0px;
  padding: 3rem 0;
`

const FooterText = styled.div`
  text-align: center;

  & > h3 {
    color: #f5f6fa;
    margin: 0 auto;
  }

  & a {
    color: white;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
    color: #ff6666;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <svg viewBox="0 0 120 20">
        <defs>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use id="wave3" className="wave" href="#wave" x="0" y="-1"></use>
        <use id="wave2" className="wave" href="#wave" x="0" y="0"></use>
      </svg>
      <FooterText>
        <h3>
          👨‍💻 Designed & Built by:{" "}
          <a
            href="https://www.franciscalizo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gold-500"
          >
            Francis Calizo
          </a>
        </h3>
        <h3>📷 Photography: Sam Hampshire</h3>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
