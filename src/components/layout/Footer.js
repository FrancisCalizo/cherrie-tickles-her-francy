import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  background-color: #b2bec3;
  border-top: 3px solid black;
  box-shadow: 0 0 0 4px var(--heart);
  margin: 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <h2 style={{ color: "white", margin: 0 }}>
        Designed & Built By{" "}
        <a
          href="https://www.franciscalizo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-gold-500"
        >
          Francis Calizo
        </a>
        <br />
      </h2>
    </FooterContainer>
  )
}

export default Footer
