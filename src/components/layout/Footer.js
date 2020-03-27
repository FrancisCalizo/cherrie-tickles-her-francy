import React from "react"
import styled from "styled-components"

// import "./Footer.css"

const Top = styled.div`
  margin: 0;
  padding: 0;
`

const Footer = () => {
  return (
    <div>
      <Top>
        <svg
          version="1.1"
          id="curved-border"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1600 116.19"
          space="preserve"
        >
          <path
            class="wave"
            d="M0.1,119.43V67.45c0,0,99.87,71.51,322.45,8.12c5.56-1.66,92.01-26.52,125.74-35.72
	c77.28-21.08,219.28-41.4,311.28-38.34c233,7.77,323.98,82.1,469.23,96.61c149.64,14.94,288.45-12.46,371.26-36.99v55.34L0.1,119.43
	z"
          />
        </svg>
      </Top>
    </div>
  )
}

export default Footer
