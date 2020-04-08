import styled from "styled-components"

export const ContactContainer = styled.div`
  margin: 5rem 3rem 0;
  text-align: center;

  & h2 {
    margin: 1rem 0;
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
  }

  & div {
    padding: 1rem 2rem;
    border: 1px solid white;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: 3px;
    background: var(--heart);
    color: white;
    margin: 0 auto;
    max-width: 550px;
  }

  & a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  & a:hover {
    text-decoration: underline;
  }
`
