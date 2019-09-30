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
    grid: 10vh 90vh / 100vw;
  }
`;

const Nav = styled.div`
  height: 100vh;
  padding: 0 2rem 0 1rem;
  margin: 0;
  overflow: hidden;
  background-color: rebeccapurple;

  @media (max-width: 900px) {
    height: 10vh;
  }
`;

const Content = styled.div`
  height: 100vh;
  padding: 2rem;
  margin: 0;
  overflow: hidden;

  @media (max-width: 900px) {
    height: 90vh;
  }
`;

const Layout = ({ children }) => {

  return (
    <MainStyled>
      <Nav>
        <Header />
      </Nav>
      <Content>
        {children}
      </Content>
    </MainStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
