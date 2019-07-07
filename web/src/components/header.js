import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import { Location } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import anime from 'lib/anime.es.js';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: rebeccapurple;
  height: 80px;
  color: white;
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
  }
  a {
    color: white;
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
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <Link to="/page-2/">Go to page 2</Link>
          </li>
        </ul>
      </div>
      <Location>
        {({ location }) => {
          if (location.pathname !== "/") return (
            <div className='icons'>
              <ul>
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faDev} /></li>
                <li><FontAwesomeIcon icon={faFreeCodeCamp} /></li>
                <li><FontAwesomeIcon icon={faCodepen} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
              </ul>
            </div>
          )
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

export default Header
