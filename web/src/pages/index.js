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
        <h1 className='greeting'>Hello, I'm Ryan.</h1>
        <h2 className='tagline'>Developer, Learner, Educator</h2>
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
  .greeting {
    color: white;
    width: 100%;
  }
  .tagline {
    color: white;
    width: 100%;
  }
  .welcome__text {
    text-align: center;
  }
`;

const IconsStyled = styled.div`
padding-top: 3rem;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
  }
  li {
    padding: 0 1rem;
    margin: 0;
    font-weight: bold;
    color: white;
    transition: transform 1s;
  }
  li:hover {
    transform: scale(1.2);
    transition: transform 1s;
  }
  a {
    color: white;
    transition: color 0.5s;
  }
  a:hover {
    color: rebeccapurple;
    transition: color 0.5s; 
  }
  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
  }
`;

export default IndexPage
