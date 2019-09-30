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
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://dev.to/doylecodes'>
            <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://www.freecodecamp.org/ryanmdoyle'>
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://codepen.io/ryanmdoyle/#'>
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://twitter.com/doylecodes'>
            <FontAwesomeIcon icon={faTwitter} />
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
  font-size: 1.5rem;
`;

export default HeaderLinks;