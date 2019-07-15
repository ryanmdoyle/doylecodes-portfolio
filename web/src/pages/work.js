import React from "react";

import SEO from "../components/SEO";
import ContentContainer from '../components/styledComponents/ContentContainer';
import PageFade from '../components/PageFade';

const Work = () => (
  <PageFade>
    <SEO title="Work" />
    <h1>Work</h1>
    <ContentContainer>
      <p>Welcome to my portfolio</p>
    </ContentContainer>
  </PageFade>
)

export default Work
