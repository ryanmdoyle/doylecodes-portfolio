import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'

import Header from "./Header"
import "./layout.css"

const MainStyled = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.1rem 1.5rem 1.1rem;
`;

const Layout = ({ children }) => {

  return (
      <div style={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(https://res.cloudinary.com/dwut3uz4n/image/upload/v1563496204/mountains.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'}
      }>
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
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
