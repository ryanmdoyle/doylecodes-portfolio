import React from "react";
import styled from 'styled-components';
import { graphql } from 'gatsby';

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

const Work = ({ data }) => (
  <PageFade>
    <SEO title="Work" />
    <h1>Work</h1>
    <ContentContainer>
      <PortfolioGrid>
        {data.allSanityProject.nodes.map(p => (
          <PortfolioProject
            title={p.title}
            description={p.description}
            background={p.featureImage.asset.fixed.src}
            github={p.github}
            liveSite={p.liveSiteURL}
          />
        ))}
      </PortfolioGrid>

    </ContentContainer>
  </PageFade>
)

export const query = graphql`
  query MyQuery {
    allSanityProject {
      nodes {
        description
        id
        title
        github
        liveSiteURL
        featureImage {
          asset {
            fixed(width: 300) {
              src
            }
          }
        }
      }
    }
  }
`;

export default Work
