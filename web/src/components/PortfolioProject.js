import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';

const ProjectCard = styled.div`
  .card {
    height: 200px;
    width: 300px;
    margin: 1rem;
    background-repeat: no-repeat;
    background-position: center; 
    overflow: hidden;
    transition: box-shadow 0.3s;
    box-shadow: 0 0 5px 2px rgb(0, 0, 0, 0.2);
  }

  .card:hover {
    box-shadow: 0 0 20px 5px rgb(0, 0, 0, 0.5);
    transition: box-shadow 0.3s;
  }

  .card--hover {
    height: 100%;
    width: 100%;
    padding: 1rem;
    background-color: rgb(66,33,99,0.7);
    color: white;
    opacity: 0;
    transition: opacity 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card--hover > h2 {
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
  }

  .card--hover:hover {
    opacity: 0.8;
    transition: opacity 1s;
  }

  a {
    color: white;
    border: 1px solid white;
    padding: 5px;
    text-decoration: none;
    transition: border-radius 0.5s;
  }
  a:hover {
    border: 1px solid white;
    border-radius: 5px;
    transition: border-radius 0.5s;
  }
`;


const PortfolioProject = (props) => {
  return (
    <ProjectCard>
      <div className='card' style={{ backgroundImage: `url('${props.background}')` }}>
        <div className='card--hover'>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href={props.href}>See More</a>
        </div>
      </div>
    </ProjectCard>

  );
};

export default PortfolioProject;