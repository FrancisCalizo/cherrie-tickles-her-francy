import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Transition } from "react-transition-group"
import scrollTo from "gatsby-plugin-smoothscroll"

import { device } from "../breakpoints"

const Nav = styled.nav`
  background-color: ${props =>
    props.state === "entering" || props.state === "entered"
      ? "white"
      : "transparent"};
  opacity: ${props => (props.state === "entering" ? 0.0 : 1.0)};
  height: ${props => (props.state === "entering" ? 0 : "85px")};
  color: ${props => (props.isNavColored ? "var(--header-gray)" : "white")};
  box-shadow: ${props =>
    props.isNavColored
      ? "0 3px 1px -1px var(--heart);"
      : "0 4px 7px -7px #dff9fb;"}
  transition: height 500ms ease-in, opacity 100ms ease-in,
    background-color 100ms ease-in 300ms, color 100ms ease-in 300ms,
    box-shadow 100ms ease-in 300ms;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container);
  margin: 0 auto;
  height: 100%;

  @media ${device.maxLg} {
    margin: auto 3rem;
  }

  @media ${device.minLg} {
    justify-content: space-around;
  }
`

const NavLinks = styled.div`
  display: none;

  @media ${device.minLg} {
    display: flex;
  }
`

const Hamburger = styled.div`
  border: 1px solid ${props =>
    props.isNavColored ? "var(--header-gray)" : "white"};;
  border-radius: 10px;
  padding 0.40rem 0.7rem;

  @media ${device.minLg}{
    display: none;
  }
`

const BurgerLine = styled.div`
  width: 40px;
  height: 3px;
  background-color: ${props =>
    props.isNavColored ? "var(--header-gray)" : "white"};
  margin: 8px 0;
  border-radius: 5px;
`

const NavLink = styled.div`
  margin: 2rem 0.85rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;

  & > div {
    padding: 1rem 0;
  }

  & > div:hover {
    border-bottom: 3px solid var(--heart);
    transform: scale(1.05);
    cursor: pointer;
  }
`

const Heart = styled.div`
  font-size: 1.2rem;
  padding: 2.72rem 0;
  color: var(--heart);
`

const LogoContainer = styled.div`
  transition: border 500ms ease-in;
  border: 1px solid
    ${props => (props.isNavColored ? "var(--header-gray)" : "white")};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  padding: 0.3rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;

  @media ${device.maxLg} {
    font-size: 0.9rem;
  }
`

const Navbar = () => {
  const [isNavColored, setisNavColored] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (window.scrollY > 150) {
        setisNavColored(true)
      } else {
        setisNavColored(false)
      }
    })
  }, [])

  return (
    <Transition in={isNavColored} timeout={500}>
      {state => (
        <Nav state={state} isNavColored={isNavColored}>
          <Container>
            <LogoContainer
              isNavColored={isNavColored}
              onClick={() => scrollTo("#header")}
            >
              <u>
                <strong>Save the Date!</strong>
              </u>
              <br />
              Orlando, FL <br /> February 20, 2021
            </LogoContainer>
            <Hamburger isNavColored={isNavColored}>
              <BurgerLine isNavColored={isNavColored}></BurgerLine>
              <BurgerLine isNavColored={isNavColored}></BurgerLine>
              <BurgerLine isNavColored={isNavColored}></BurgerLine>
            </Hamburger>
            <NavLinks>
              <NavLink onClick={() => scrollTo("#story")}>
                <div>Our Story</div>
              </NavLink>
              <Heart>❣</Heart>
              <NavLink onClick={() => scrollTo("#when-and-where")}>
                <div>When & Where</div>
              </NavLink>
              <Heart>❣</Heart>
              <NavLink onClick={() => scrollTo("#party")}>
                <div>Wedding Party</div>
              </NavLink>
              <Heart>❣</Heart>
              <NavLink onClick={() => scrollTo("#registry")}>
                <div>Registry</div>
              </NavLink>
              <Heart>❣</Heart>
              <NavLink onClick={() => scrollTo("#gallery")}>
                <div>Gallery</div>
              </NavLink>
              <Heart>❣</Heart>
              <NavLink onClick={() => scrollTo("#faqs")}>
                <div>FAQs</div>
              </NavLink>
              <Heart>❣</Heart>
              <NavLink onClick={() => scrollTo("#contact")}>
                <div>Contact Us</div>
              </NavLink>
            </NavLinks>
          </Container>
        </Nav>
      )}
    </Transition>
  )
}

export default Navbar
