import Iframe from "react-iframe"
import styled from "styled-components"

export const RegistryContainer = styled.div`
  text-align: center;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 4rem;

  & h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
    margin-bottom: 0;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: inline-block;
  margin: 1rem auto 3rem;

  & p {
    color: var(--header-gray);
  }

  & a {
    cursor: pointer;
    color: var(--heart);
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
    color: #ff9999;
  }
`

export const Frame = styled(Iframe)`
  border: 1px solid #dcdde1;
  border-radius: 4px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15), 0 3px 7px 0 rgba(0, 0, 0, 0.19);
`

export const ScrollFaqs = styled.div`
  position: relative;
  bottom: 3rem;
`
