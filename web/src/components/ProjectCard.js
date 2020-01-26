import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { DiGithubBadge } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi"

const CardContainerStyled = styled.div`
  --mobileBreak: 550px;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  min-height: 200px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  transition: box-shadow 0.3s, background-color 0.3s;
  
  display: flex;
  flex-wrap: wrap;
  
  :hover{
    box-shadow: 0 0 15px 5px rgb(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 1);
    transition: box-shadow 0.3s, background-color 0.3s;
  }

  .image {
    width: 200px;
    height: 100%;
    /*  Desktop Images */
    @media (min-width: 550px) {
      .mobile { display: none; }
      .square { display: inline-block; }
    }
    /* Mobile Images */
    @media (max-width: 550px) {
      .mobile { display: inline-block; }
      .square { display: none; }
    }
  }

  .content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: calc(100% - 200px);
    padding-left: 10px;
    
    h4 {
      margin: 0;
    }

    p {
      font-weight: 300;
    }
  }

  @media (min-width: 1350px) {
    max-width: calc(50% - 20px);
  }

  @media (max-width: 550px) {
    flex-direction: column;
    .image {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center
    }
    .content {
      width: 100%;
      height: 200px;
      margin-top:10px;
    }
  }

`;

const IconStyled = styled.div`
  justify-self: end;
  svg {
    height: 40px;
    width: 40px;
  }
`;

const ProjectCard = ({ title, description, liveSite, github, asset }) => {

  return (
    <CardContainerStyled>
      <div className='image'>
        <Img fixed={asset.square} className='square' style={{ display: 'inherit' }} />
        <Img fixed={asset.rect} className='mobile' style={{ display: 'inherit' }} />
      </div>
      <div className='content'>
        <h4>{title}</h4>
        <p>{description}</p>
        <IconStyled>
          {github ? <a href={github} target="_blank" rel="noopener noreferrer"><DiGithubBadge /></a> : null}
          {liveSite ? <a href={liveSite} target="_blank" rel="noopener noreferrer"><FiExternalLink /></a> : null}
        </IconStyled>

      </div>
    </CardContainerStyled>
  );
};

export default ProjectCard;