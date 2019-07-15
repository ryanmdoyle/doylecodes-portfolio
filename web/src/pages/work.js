import React from "react";
import styled from 'styled-components';

import SEO from "../components/SEO";
import ContentContainer from '../components/styledComponents/ContentContainer';
import PageFade from '../components/PageFade';

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: red;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  .portfolio--project {
    background-color: green;
    height: 200px;
    width: 250px;
    margin: 0.5rem;
  }
`;

const Work = () => (
  <PageFade>
    <SEO title="Work" />
    <h1>Work</h1>
    <ContentContainer>
      <PortfolioGrid>
        <div className='portfolio--project'>1</div>
        <div className='portfolio--project'>2</div>
        <div className='portfolio--project'>3</div>
        <div className='portfolio--project'>4</div>
        <div className='portfolio--project'>5</div>
        <div className='portfolio--project'>5</div>
        <div className='portfolio--project'>5</div>
        <div className='portfolio--project'>5</div>

      </PortfolioGrid>
    </ContentContainer>
  </PageFade>
)

export default Work
