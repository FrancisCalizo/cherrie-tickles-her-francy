import styled from "styled-components"
import { device } from "../breakpoints"

export const FooterContainer = styled.div`
  width: 100%;
  bottom: 0px;
  padding: 3rem 0 0;
`

export const FooterText = styled.div`
  text-align: center;
  padding-bottom: 3rem;
  background-color: var(--heart);

  & > h3 {
    color: #f5f6fa;
    margin: 0 auto;
    font-weight: normal;
  }

  @media ${device.maxMd} {
    & > h3 {
      font-size: 0.85rem;
    }
  }

  & a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  & a:hover {
    text-decoration: underline;
    color: #ff6666;
  }
`

export const IconContainer = styled.div`
  margin: 1rem auto;
  & div {
    margin: 0 0.3rem;
  }
`
