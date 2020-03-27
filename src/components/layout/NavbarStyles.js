import styled from "styled-components"
import { device } from "../breakpoints"

export const Nav = styled.nav`
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
  border: 1px solid ${props =>
    props.isNavColored ? "var(--header-gray)" : "white"};;
  border-radius: 10px;
  padding 0.40rem 0.7rem;

  @media ${device.minLg}{
    display: none;
  }
`

export const BurgerLine = styled.div`
  width: 40px;
  height: 3px;
  background-color: ${props =>
    props.isNavColored ? "var(--header-gray)" : "white"};
  margin: 8px 0;
  border-radius: 5px;
`

export const NavLink = styled.div`
  margin: 1.9rem 0.85rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  transform: translateY(2px);

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
`
