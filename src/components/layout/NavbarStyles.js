import styled from "styled-components"
import { device } from "../breakpoints"

export const Nav = styled.nav`
  background-color: ${props => {
    switch (true) {
      case props.state === "entering":
      case props.state === "entered":
        return "white"
      case props.state !== "entered" &&
        props.state !== "entering" &&
        props.isHamburgerOpen:
        return "rgba(70, 70, 70, 0.75)"
      default:
        return "transparent"
    }
  }};
  opacity: ${props => (props.state === "entering" ? 0.0 : 1.0)};
  height: ${props => (props.state === "entering" ? 0 : "85px")};
  color: ${props => (props.isNavColored ? "var(--header-gray)" : "white")};
  box-shadow: ${props =>
    props.isNavColored
      ? "0 3px 1px -1px var(--heart)"
      : "0 4px 7px -7px #dff9fb"};
  transition: height 500ms ease-in, opacity 100ms ease-in,
    background-color 100ms ease-in-out 100ms, color 100ms ease-in 300ms,
    box-shadow 100ms ease-in 300ms;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 15;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container);
  margin: 0 auto;
  height: 100%;

  @media ${device.maxLg} {
    margin: auto 3rem;
  }

  @media ${device.maxMd} {
    margin: auto 1.2rem;
  }

  @media ${device.minLg} {
    justify-content: space-around;
  }
`

export const NavLinks = styled.div`
  display: none;

  @media ${device.minLg} {
    display: flex;
  }
`

export const Hamburger = styled.div`
  /*border: 1px solid ${props =>
    props.isNavColored ? "var(--header-gray)" : "white"};*/
  border-radius: 10px;
  padding: 0.40rem 0.7rem;
  cursor: pointer;

  @media ${device.minLg}{
    display: none;
  }
`

export const HamburgerLinks = styled.div`
  position: fixed;
  top: 85px;
  z-index: 10;
  width: 100%;
  display: ${props => (props.isHamburgerOpen ? "flex" : "none")};
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-weight: 700;
  background: ${props =>
    props.isNavColored ? "white" : "rgba(70,70,70, 0.75)"};
  color: ${props => (props.isNavColored ? "var(--header-gray)" : "white")};
  z-index: 20;
  opacity: ${props => (props.state === "entered" ? 1 : 0)};

  transition: opacity 0.2s ease-in-out, background-color 1.4s;

  /* & div:nth-child(8) {
    border-bottom: none;
  } */

  @media ${device.minLg} {
    display: none;
  }
`

export const HamburgerLink = styled.div`
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  border-bottom: ${props =>
    props.isNavColored
      ? "2px solid var(--heart)"
      : "2px solid var(--header-gray)"};

  &:hover {
    background: ${props =>
      props.isNavColored ? "rgba(235,235,235)" : "rgba(100,100,100, 0.75)"};
  }
`

export const BurgerLine = styled.div`
  width: 40px;
  height: 3px;
  background-color: ${props =>
    props.isNavColored ? "var(--header-gray)" : "white"};
  margin: 8px 0;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13), 0 2px 3px 0 rgba(0, 0, 0, 0.15);

  &:nth-child(1) {
    opacity: ${props => (props.isHamburgerOpen ? 0 : 1)};
  }

  &:nth-child(2) {
    transform: ${props =>
      props.isHamburgerOpen ? "rotate(45deg)" : "rotate(0)"};
  }

  &:nth-child(3) {
    transform: ${props =>
      props.isHamburgerOpen
        ? "rotate(-45deg) translate(7px, -8px);"
        : "rotate(0)"};
  }

  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
`

export const NavLink = styled.div`
  margin: 1.9rem 0.85rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  transform: translateY(3px);

  & > div {
    padding: 1rem 0;
  }

  & > div:hover {
    border-bottom: 2px solid var(--heart);
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const Heart = styled.div`
  font-size: 1.2rem;
  padding: 2.72rem 0;
  color: var(--heart);
`

export const LogoContainer = styled.div`
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

  @media ${device.maxSm} {
    font-size: 0.8rem;
  }
`
