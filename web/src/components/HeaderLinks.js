import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const HeaderLinks = () => {
  return (
    <StyledLinks>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://github.com/ryanmdoyle'>
            <FontAwesomeIcon icon={faGithub} size='3x'/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://dev.to/doylecodes'>
            <FontAwesomeIcon icon={faDev} size='3x' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://www.freecodecamp.org/ryanmdoyle'>
            <FontAwesomeIcon icon={faFreeCodeCamp} size='3x' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://codepen.io/ryanmdoyle/#'>
            <FontAwesomeIcon icon={faCodepen} size='3x' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://twitter.com/doylecodes'>
            <FontAwesomeIcon icon={faTwitter} size='3x' />
          </a>
        </li>
      </ul>
    </StyledLinks>

  );
};

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 100%;
  }
`;

export default HeaderLinks;