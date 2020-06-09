import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { device } from "../components/breakpoints"

const Content = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5), 0 4px 12px 0 rgba(0, 0, 0, 0.23);
  padding: 3.5rem 5rem;
  margin: 0 3rem;
  text-align: center;
  border-radius: 7px;
  font-family: "Raleway", sans-serif;

  @media (max-width: 540px) {
    padding: 2.5rem 3rem;
  }

  @media ${device.maxSm} {
    padding: 2rem;
  }

  h1 {
    font-family: "Alex Brush", cursive;
    font-size: 8rem;
    margin: 0;

    @media ${device.maxMd} {
      font-size: 4.5rem;
    }

    @media (max-width: 540px) {
      font-size: 3.5rem;
    }

    @media ${device.maxSm} {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-top: 0;

    @media ${device.maxMd} {
      font-size: 1rem;
    }

    @media ${device.maxSm} {
      font-size: 0.8 rem;
    }
  }

  a {
    text-decoration: none;
  }
`

export const HeaderImage = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
`

export const BlackOverlay = styled.div`
  display: flex;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
`

export const BackButton = styled.button`
  display: block;
  background: #ff7979;
  color: #fff;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  padding: 0.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  margin: 3rem auto 0;
  border: none;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5), 0 4px 12px 0 rgba(0, 0, 0, 0.23);
  border: 1px solid #c8ced0;
  outline: none;

  &:hover {
    background: #ff8383;
  }

  @media ${device.maxMd} {
    font-size: 1.1rem;
    margin: 2rem auto 0;
  }

  @media ${device.maxSm} {
    font-size: 0.8rem;
    padding: 0.5rem 1.5rem;
  }
`

const RsvpSuccess = () => {
  const data = useStaticQuery(graphql`
    query successImageQuery {
      successImage: file(relativePath: { eq: "beach-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    document.body.style.margin = 0
    return () => {
      document.body.style.margin = null
    }
  }, [])

  return (
    <HeaderImage
      alt="beach-header-photo"
      fluid={data.successImage.childImageSharp.fluid}
    >
      <BlackOverlay>
        <Content>
          <h1>Thank you!</h1>
          <p>
            Your RSVP was submitted successfully. We look forward to seeing you
            on February 6th!
          </p>
          <Link to="/">
            <BackButton>Back to site</BackButton>
          </Link>
        </Content>
      </BlackOverlay>
    </HeaderImage>
  )
}

export default RsvpSuccess
