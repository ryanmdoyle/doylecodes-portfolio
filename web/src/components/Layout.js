import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';

import Header from "./Header";
import "./layout.css";
import StyledBackground from '../components/StyledBackground';

const MainStyled = styled.main`
  display: grid;
  grid: 100vh / 25vw 75vw;
  margin: 0;

  @media (max-width: 900px) {
    grid: 25vw 75vw / 100vw;
  }
`;

const Nav = styled.div`
  height: 100vh;
  padding: 1rem;
  margin: 0;
`;

const Content = styled.div`
  height: 100vh;
  padding: 1rem;
  margin: 0;
`;

const Layout = ({ children }) => {

  return (
    <MainStyled>
      <Nav>
        <Header />
      </Nav>
      <Content>
        <StyledBackground>
          {children}
        </StyledBackground>
      </Content>
    </MainStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
