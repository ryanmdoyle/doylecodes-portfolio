import React from "react";
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from "../components/SEO";
import ContentContainer from '../components/styledComponents/ContentContainer';
import PageFade from '../components/PageFade';
import ProjectCard from '../components/ProjectCard';

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  margin-bottom: 50px;
`;

const Work = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityProjectsOrder {
        nodes {
          projectOrder {
            description
            github
            id
            liveSiteURL
            title
            featureImage {
              asset {
                square: fixed(width: 200, height: 200) {
                  src
                  aspectRatio
                  base64
                  height
                  srcSet
                  srcSetWebp
                  srcWebp
                  width
                }
                rect: fixed(width: 500, height: 200) {
                  src
                  aspectRatio
                  base64
                  height
                  srcSet
                  srcSetWebp
                  srcWebp
                  width
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PageFade>
      <SEO title="Work" />
      <ContentContainer>
        <h3>Projects</h3>
        <PortfolioGrid>
          {data.allSanityProjectsOrder.nodes[0].projectOrder.map(p => (
            <ProjectCard
              title={p.title}
              description={p.description}
              asset={p.featureImage.asset}
              github={p.github}
              liveSite={p.liveSiteURL}
              id={p.title}
            />
          ))}
        </PortfolioGrid>

      </ContentContainer>
    </PageFade>
  )
}

export default Work
