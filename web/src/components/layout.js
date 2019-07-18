import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'

import Header from "./Header"
import "./Layout.css"
import bgImage from '../images/mountains.jpg';

const MainStyled = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.1rem 1.5rem 1.1rem;
`;

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Layout = ({ children }) => {

  return (
    <Background >
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
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
