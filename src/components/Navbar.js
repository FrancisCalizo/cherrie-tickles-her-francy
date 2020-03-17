import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1280px;
  z-index: 10;
  color: white;
`

const NavLinks = styled.div`
  display: flex;
`

const NavLink = styled.div`
  padding: 1.5rem 2rem;
  text-transform: uppercase;
`

const Heart = styled.div`
  font-size: 1.2rem;
  padding: 1.5rem 0;
  color: #ff7979;
`

const Navbar = () => {
  return (
    <Nav>
      <div>Logo</div>
      <NavLinks>
        <NavLink>Our Story</NavLink>
        <Heart>❣</Heart>
        <NavLink>Where & Where</NavLink>
        <Heart>❣</Heart>
        <NavLink>Wedding Party</NavLink>
        <Heart>❣</Heart>
        <NavLink>Registry</NavLink>
        <Heart>❣</Heart>
        <NavLink>RSVP</NavLink>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
