import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'
import { Location } from '@reach/router';

import HeaderLinks from './HeaderLinks';
import SwipeButton from './styledComponents/SwipeButton';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fafafa;
  background-color: rebeccapurple;
  padding: 2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 0;
  }

  h1, h2 {
    margin: 0;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0 1rem;

  @media (max-width: 900px) {
    flex-direction: row;
  }

  li {
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    font-weight: bold;
    transition: color 1s, transform 0.5s;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    position: relative;
  }

  li:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: yellow;
    z-index: -1;
    transform: rotateX('90');
    /* translate here */
    transition: transform 0.3s;
  }

  li:hover, a:hover {
    transform: scale(1.2);
    color: rebeccapurple;
    transition: color 1s, transform 0.5s;
  }
  a {
    color: #fafafa;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <HeaderStyled>
      <NavContainer>
        <NavList>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work/">Work</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          <SwipeButton/>
        </NavList>
      </NavContainer>
      {/* <Location>
        {({ location }) => {
          if (location.pathname !== "/") {
            console.log(location);
            return (
              <Spring
                to={{ opacity: 1 }}>
                {props => (
                  <div style={props}>
                    <HeaderLinks />
                  </div>
                )}
              </Spring>
            )
          }
          if (location.pathname === "/") {
            return (
              <Spring
                to={{ opacity: 0 }}>
                {props => (
                  <div style={props}>
                    <HeaderLinks />
                  </div>
                )}
              </Spring>
            )
          }
        }}
      </Location> */}
    </HeaderStyled>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
export { HeaderStyled };
