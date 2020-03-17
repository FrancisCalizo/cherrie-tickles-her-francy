import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  // background-color: rgba(0, 0, 0, 0.09);
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  color: white;
  box-shadow: 0 4px 7px -7px #dff9fb;
`
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`

const NavLinks = styled.div`
  display: flex;
`

const NavLink = styled.div`
  padding: 2.2rem 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
`

const Heart = styled.div`
  font-size: 1.2rem;
  padding: 1.85rem 0;
  color: #ff7979;
`

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <div>
          Orlando, FL <br /> February 20, 2021
        </div>
        <NavLinks>
          <NavLink>Our Story</NavLink>
          <Heart>❣</Heart>
          <NavLink>Where & Where</NavLink>
          <Heart>❣</Heart>
          <NavLink>Wedding Party</NavLink>
          <Heart>❣</Heart>
          <NavLink>Accomodations</NavLink>
          <Heart>❣</Heart>
          <NavLink>Registry</NavLink>
          <Heart>❣</Heart>
          <NavLink>FAQs</NavLink>
          <Heart>❣</Heart>
          <NavLink>RSVP</NavLink>
        </NavLinks>
      </Container>
    </Nav>
  )
}

export default Navbar
