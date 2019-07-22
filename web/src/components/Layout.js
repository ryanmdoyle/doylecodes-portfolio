import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';

import Header from "./Header";
import "./layout.css";
import StyledBackground from '../components/StyledBackground';

const MainStyled = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.1rem 1.5rem 1.1rem;
`;

const Layout = ({ children }) => {

  return (
    <StyledBackground>
      <Header />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {opacity => (
          <div style={opacity}>
            <MainStyled>
              {children}
            </MainStyled>
          </div>
        )}
      </Spring>
    </StyledBackground>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
