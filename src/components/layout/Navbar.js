import React, { useEffect, useState } from "react"
import { Transition } from "react-transition-group"
import scrollTo from "gatsby-plugin-smoothscroll"

import {
  Nav,
  Container,
  NavLinks,
  NavLink,
  Hamburger,
  BurgerLine,
  Heart,
  LogoContainer,
} from "./NavbarStyles"

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
              Orlando, FL <br /> February 6, 2021
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
