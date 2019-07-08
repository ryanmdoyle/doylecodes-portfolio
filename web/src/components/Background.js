import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Background = ({ className, children }) => (
  <StaticQuery
    query={backgroundQuery}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag='section'
          className={className}
          fluid={imageData}
          backgroundColor={'gray'}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundImage = styled(Background)`
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const backgroundQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "mountains.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default StyledBackgroundImage;