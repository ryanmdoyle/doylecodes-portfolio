import React from "react";
import styled from 'styled-components';

import SEO from "../components/SEO";
import ContentContainer from '../components/styledComponents/ContentContainer';
import PageFade from '../components/PageFade';
import PortfolioProject from '../components/PortfolioProject';

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`;

const Work = () => (
  <PageFade>
    <SEO title="Work" />
    <h1>Work</h1>
    <ContentContainer>
      <PortfolioGrid>
        <PortfolioProject 
          title={'Portfolio'}
          description={'React | Styled-Components | Gatsby | Sanity'}
          href={'http://www.google.com'}
        />
        <PortfolioProject 
          title={'the title'}
          description={'the description'}
          href={'http://www.google.com'}
        />
        <PortfolioProject 
          title={'the title'}
          description={'the description'}
          href={'http://www.google.com'}
        />
        <PortfolioProject 
          title={'the title'}
          description={'the description'}
          href={'http://www.google.com'}
        />
      </PortfolioGrid>

    </ContentContainer>
  </PageFade>
)

export default Work
