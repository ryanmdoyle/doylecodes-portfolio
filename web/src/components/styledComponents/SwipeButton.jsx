/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const SwipeButton = () => (
  <>
    <Swipe href="#">
      Swipe
    </Swipe>
  </>
);

const Swipe = styled.a`
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 1.5rem;
  border: 3px solid black;
  margin: 0 1rem;
  padding: 1rem 2rem;
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: yellow;
    height: 100%;
    width: 110%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 0.3s;
  }

  :hover:before {
    transform: rotate(0deg);
  }
`;

export default SwipeButton;
