/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'

import Header from "./Header"
import "./layout.css"
import Background from './Background';

const MainStyled = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.1rem 1.5rem 1.1rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Background >
      <Header siteTitle={data.site.siteMetadata.title} />
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
