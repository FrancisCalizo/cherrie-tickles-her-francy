import styled from "styled-components"
import { device } from "../breakpoints"
import Img from "gatsby-image"

export const CardContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 410px;
  margin: 2rem 2rem;
  display: flex;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.4);
  background: white;

  @media ${device.maxMd} {
    width: 390px;
    margin: 2rem 0;
  }

  @media ${device.maxSm} {
    width: 330px;
  }
`

export const InfoContainer = styled.div`
  position: relative;
  background: #fff;

  &::before {
    content: " ";
    position: absolute;
    display: block;
    width: 45px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    background: white;
    transform-origin: top right;
    -ms-transform: skew(-10deg, 0deg);
    -webkit-transform: skew(-10deg, 0deg);
    transform: skew(-10deg, 0deg);
    border-left: 0.1rem solid #b2bec3;
  }
`

export const Image = styled(Img)`
  @media ${device.maxSm} {
    width: 130px !important;
  }
`

export const Info = styled.div`
  position: absolute;
  z-index: 10;
  width: 200px;

  & h3 {
    font-size: 1.3rem;
    margin: 1.3rem auto 0;
  }

  & > div {
    display: inline-block;
    padding: 0.4rem 0.7rem;
    margin: 0.4rem auto;
    background-color: #1e3799;
    color: white;
    font-size: 0.9rem;
    border-radius: 6px;
  }

  & p {
    font-size: 0.9rem;
    color: var(--header-gray);
    margin-top 0.5rem;
  }

  @media ${device.maxMd} {
    & h3 {
      font-size: 1.15rem;
    }

    & div {
      margin: 0.8rem auto 0.5rem;
    }

    & p {
      font-size: 0.85rem;
      padding-right: 0.75rem;
    }
  }

  @media ${device.MaxSm} {
  }
`
