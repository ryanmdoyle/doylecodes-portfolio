import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'
import { Location } from '@reach/router';

import HeaderLinks from './HeaderLinks';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  height: 80px;
  color: black;
  padding: 0 2rem 0 2rem;
  h1, h2 {
    margin: 0;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
  }
  li {
    padding: 0 1rem;
    margin: 0;
    font-weight: bold;
    transition: color 1s, transform 0.5s;
  }
  li:hover, a:hover {
    transform: scale(1.2);
    color: rebeccapurple;
    transition: color 1s, transform 0.5s;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <HeaderStyle>
      <div className='nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work/">Work</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </div>
      <Location>
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
      </Location>
    </HeaderStyle>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
export { HeaderStyle };
