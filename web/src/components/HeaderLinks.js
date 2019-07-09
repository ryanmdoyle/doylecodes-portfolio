import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const HeaderLinks = () => {
  return (
    <div className='icons'>
      <ul>
        <li><FontAwesomeIcon icon={faGithub} /></li>
        <li><FontAwesomeIcon icon={faDev} /></li>
        <li><FontAwesomeIcon icon={faFreeCodeCamp} /></li>
        <li><FontAwesomeIcon icon={faCodepen} /></li>
        <li><FontAwesomeIcon icon={faTwitter} /></li>
      </ul>
    </div>

  );
};

export default HeaderLinks;