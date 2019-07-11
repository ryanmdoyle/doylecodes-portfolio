import React from "react"
import styled from 'styled-components';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContentContainer from '../components/styledComponents/ContentContainer';
import Image from '../components/Image';

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <ContentContainer>
      <AboutImage>
        <Image />
      </AboutImage>
    </ContentContainer>
  </Layout>
)

const AboutImage = styled.div`
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

export default About
