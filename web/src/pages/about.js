import React from "react"
import styled from 'styled-components';

import SEO from "../components/SEO"
import ContentContainer from '../components/styledComponents/ContentContainer';
import PageFade from '../components/PageFade';
import profile from '../images/profile.png';

const About = ({ data }) => (
  <PageFade>
    <SEO title="About" />
    <h1>About Me</h1>
    <ContentContainer>
      <AboutImage>
        <img src={profile} />
      </AboutImage>
      <h2>Hello, I'm Ryan.</h2>
      <p>I grew up in the Bay Area and have lived around Sacramento for the last 15 years (with a short year in Lancaster, CA). I've spend a decade teaching math and science to 6-8th graders. I love to build new applications and learn new technologies to help me improve everything I've made.  I'm constantly looking at what I can do to make things better (My wife would say I'm a type 1 on the enneagram). When I'm not teaching, coding, or writing about what I'm doing I can be found keeping my daughter occupied, going out to eat and get coffee with my wife, hiking, camping, watching soccer, or nerding out over educational documentaries.</p>
    </ContentContainer>
  </PageFade>
)

const AboutImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  img {
    width: 250px;
  }
`;

export default About
