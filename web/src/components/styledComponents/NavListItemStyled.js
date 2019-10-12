import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components'

const StyledNavListItem = styled.li`
  padding: 0.7rem 1rem;
  margin: 1rem 0;
  font-weight: bold;
  transition: color 1s, transform 0.5s;
  position: relative;
  background-color: white;
  z-index: 1;

  a {
    text-decoration: none;
    color: white;
    position: relative;
    transition: color 0.3s;
  }

  :before {
    content: '';
    position: absolute;
    left: -5%;
    top: 0;
    background-color: rebeccapurple;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: transform 1s;
  }

  :after {
    content: '';
    position: absolute;
    left: -5%;
    bottom: 0;
    background-color: rebeccapurple;
    height: 100%;
    width: 110%;
    z-index: -1;
    transition: transform 1s;
  }

  :hover > a {
    color: rebeccapurple;
    transition: color 0.3s;
  }
  :hover:before {
    transform: translateX(-78%) skewX(-15deg);
    transition: transform 0.3s;
  }
  :hover:after {
    transform: translateX(80%) skewX(-15deg);
    transition: transform 0.3s;
  }
`;

export default function NavListItemStyled(props) {
  const {to, title} = props;
  return (
    <StyledNavListItem>
      <Link to={to}>{title}</Link>
    </StyledNavListItem>
  )
}
