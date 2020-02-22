import PropTypes from "prop-types";
import React from 'react';
import { Spring } from 'react-spring/renderprops'


const PageFade = ({ children }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}>
      {props => <div style={props}>{children}</div>}
    </Spring>
  );
};

PageFade.propTypes = {
  children: PropTypes.any
}

export default PageFade;