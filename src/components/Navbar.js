import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  // background-color: rgba(0, 0, 0, 0.09);
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1280px;
  z-index: 10;
  color: white;
  // border-bottom: 0.01rem solid #ecf0f1;
  box-shadow: 0 4px 7px -7px #dff9fb;
`

const NavLinks = styled.div`
  display: flex;
`

const NavLink = styled.div`
  padding: 1.8rem 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
`

const Heart = styled.div`
  font-size: 1.2rem;
  padding: 1.55rem 0;
  color: #ff7979;
`

const Navbar = () => {
  return (
    <Nav>
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
    </Nav>
  )
}

export default Navbar
