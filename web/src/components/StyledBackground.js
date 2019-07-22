import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery } from 'gatsby';
import styled from 'styled-components';

const BackgroundSection = ({ className }) => (
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
          <h1>Hello gatsby-background-image</h1>
        </BackgroundImage>
      )
    }
    }
  />
)

const StyledBackground = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackground