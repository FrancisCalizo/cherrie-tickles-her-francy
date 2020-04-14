import React, { useEffect, useState, Fragment } from "react"
import { Transition } from "react-transition-group"
import scrollTo from "gatsby-plugin-smoothscroll"

import {
  Nav,
  Container,
  NavLinks,
  NavLink,
  Hamburger,
  HamburgerLinks,
  HamburgerLink,
  BurgerLine,
  Heart,
  LogoContainer,
} from "./NavbarStyles"

const Navbar = () => {
  const [isNavColored, setisNavColored] = useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleScroll = e => {
    if (window.scrollY > 150) {
      setisNavColored(true)
    } else {
      setisNavColored(false)
    }
  }

  const handleClick = e => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Transition in={isNavColored} timeout={500}>
      {state => (
        <Fragment>
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
                Orlando, FL <br /> February 6, 2021
              </LogoContainer>
              <Hamburger isNavColored={isNavColored} onClick={handleClick}>
                <BurgerLine isNavColored={isNavColored}></BurgerLine>
                <BurgerLine isNavColored={isNavColored}></BurgerLine>
                <BurgerLine isNavColored={isNavColored}></BurgerLine>
              </Hamburger>
              <NavLinks>
                <NavLink onClick={() => scrollTo("#scroll-story")}>
                  <div>Our Story</div>
                </NavLink>
                <Heart>❣</Heart>
                <NavLink onClick={() => scrollTo("#scroll-when-and-where")}>
                  <div>When & Where</div>
                </NavLink>
                <Heart>❣</Heart>
                <NavLink onClick={() => scrollTo("#scroll-party")}>
                  <div>Wedding Party</div>
                </NavLink>
                <Heart>❣</Heart>
                <NavLink onClick={() => scrollTo("#scroll-gallery")}>
                  <div>Gallery</div>
                </NavLink>
                <Heart>❣</Heart>
                <NavLink onClick={() => scrollTo("#scroll-registry")}>
                  <div>Registry</div>
                </NavLink>
                <Heart>❣</Heart>
                <NavLink onClick={() => scrollTo("#scroll-faqs")}>
                  <div>FAQs</div>
                </NavLink>
                <Heart>❣</Heart>
                <NavLink onClick={() => scrollTo("#scroll-contact")}>
                  <div>Contact Us</div>
                </NavLink>
              </NavLinks>
            </Container>
          </Nav>
          <HamburgerLinks
            isHamburgerOpen={isHamburgerOpen}
            isNavColored={isNavColored}
          >
            <HamburgerLink onClick={() => scrollTo("#header")}>
              Home
            </HamburgerLink>
            <HamburgerLink onClick={() => scrollTo("#scroll-story")}>
              Our Story
            </HamburgerLink>
            <HamburgerLink onClick={() => scrollTo("#scroll-when-and-where")}>
              When And Where
            </HamburgerLink>
            <HamburgerLink onClick={() => scrollTo("#scroll-party")}>
              Wedding Party
            </HamburgerLink>
            <HamburgerLink onClick={() => scrollTo("#scroll-gallery")}>
              Gallery
            </HamburgerLink>
            <HamburgerLink onClick={() => scrollTo("#scroll-registry")}>
              Registry
            </HamburgerLink>
            <HamburgerLink onClick={() => scrollTo("#scroll-faqs")}>
              FAQs
            </HamburgerLink>
            <HamburgerLink onClick={() => scrollTo("#scroll-contact")}>
              Contact Us
            </HamburgerLink>
          </HamburgerLinks>
        </Fragment>
      )}
    </Transition>
  )
}

export default Navbar
