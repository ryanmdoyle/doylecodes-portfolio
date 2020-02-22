import PropTypes from "prop-types";
import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const BackgroundSection = ({ className, children }) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "mountains.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }
    }
  />
)

BackgroundSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const StyledBackground = styled(BackgroundSection)`
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default StyledBackground