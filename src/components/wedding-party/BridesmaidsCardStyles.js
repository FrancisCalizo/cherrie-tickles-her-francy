import styled from "styled-components"
import Img from "gatsby-image"

export const CardContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 410px;
  margin: 2rem 2rem;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.4);
  background: white;
`

export const Image = styled(Img)`
  text-align: right;
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
    right: 0;
    z-index: 5;
    background: white;
    transform-origin: top right;
    -ms-transform: skew(10deg, 0deg);
    -webkit-transform: skew(10deg, 0deg);
    transform: skew(10deg, 0deg);
    border-right: 0.1rem solid #b2bec3;
  }
`

export const Info = styled.div`
  position: relative;
  left: 0;
  z-index: 10;
  width: 200px;

  & h3 {
    font-size: 1.35rem;
    margin: 1.3rem auto 0;
  }

  & > div {
    display: inline-block;
    padding: 0.4rem 0.7rem;
    margin: 0.4rem auto;
    background-color: var(--heart);
    color: white;
    font-size: 0.9rem;
    border-radius: 6px;
  }

  & p {
    font-size: 0.9rem;
    color: var(--header-gray);
  }
`