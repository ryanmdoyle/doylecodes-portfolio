import React from "react"
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'

import SEO from "../components/SEO"
import HeaderLinks from "../components/HeaderLinks";
import PageFade from '../components/PageFade';

const IndexPage = () => (
  <PageFade>
    <SEO title="Home" />
    <Welcome>
      <div className='welcome__text'>
        <h1>Hello, I'm Ryan.</h1>
        <h2>Developer, Learner, Educator</h2>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={1000}
        >
          {props => (
            <div style={props}>
              <IconsStyled>
                <HeaderLinks />
              </IconsStyled>
            </div>
          )}
        </Spring>
      </div>
    </Welcome>
  </PageFade>
)

const Welcome = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .welcome__text {
    text-align: center;
  }
`;

const IconsStyled = styled.div`
padding-top: 2rem;
display: flex;
justify-content: center;
align-items: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0 2rem;
    margin: 0;
    color: rebeccapurple;
    transition: transform 0.2s;
  }
  li:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
  a {
    color: rebeccapurple;
    transition: color 0.2s;
  }
  a:hover {
    color: rebeccapurple;
    transition: color 0.2s; 
  }
`;

export default IndexPage
