import React from "react"
import styled from 'styled-components';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContentContainer from '../components/styledComponents/ContentContainer';
import Image from '../components/Image';

const About = () => (
  <>
    <SEO title="About" />
    <h1>About Me</h1>
    <ContentContainer>
      <AboutImage>
        <Image />
      </AboutImage>
      <h2>Hello, I'm Ryan.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus semper ex in volutpat. Integer interdum nisi in diam faucibus, auctor laoreet arcu tincidunt. Donec mollis volutpat eros a viverra. Aenean eu dui nec nisi egestas suscipit nec eu turpis. Nunc dignissim odio quis elit sollicitudin, nec vehicula augue euismod. Etiam eget nunc id dui eleifend finibus quis quis eros. Curabitur rutrum odio sit amet ultricies blandit. Proin quis aliquet tortor. Morbi id diam dapibus mi condimentum pretium vitae a risus. Duis sit amet ante sed elit bibendum iaculis ornare vitae orci. Morbi ac eros elit. Donec vehicula lacus justo, vel pretium massa molestie eget. Etiam ac dui purus. </p>
    </ContentContainer>
  </>
)

const AboutImage = styled.div`
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

export default About
