import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
  box-sizing: border-box;

  h2 {
    color: white;
    font-size: 3rem;
    text-align: center;
    padding-bottom: 2rem;
  }
  p {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    line-height: 0.9rem;
    text-align: center;
  }
  .card {
    height: 200px;
    width: 300px;
    margin: 1rem;
    background-repeat: no-repeat;
    background-position: center; 
    overflow: hidden;
    transition: box-shadow 0.3s;
    box-shadow: 0 0 5px 2px rgb(0, 0, 0, 0.2);
    box-sizing: border-box;

  }
  .card:hover {
    box-shadow: 0 0 20px 5px rgb(0, 0, 0, 0.5);
    transition: box-shadow 0.3s;
    box-sizing: border-box;
  }
  .card--hover {
    height: 100%;
    width: 100%;
    padding: 1rem;
    background-color: rgb(66,33,99,0.8);
    color: white;
    opacity: 0;
    transition: opacity 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;

  }
  .card--hover h2 {
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
  }
  .card--hover:hover {
    opacity: 1;
    transition: opacity 1s;
  }
  a {
    color: white;
    border: 1px solid white;
    padding: 1rem;
    text-decoration: none;
    transition: border-radius 0.5s, background-color 0.5s;
    font-size: 1.5rem;
    display: inline-block;
    margin: 0 0.5rem;
  }
  a:hover {
    color: rebeccapurple;
    border: 1px solid white;
    border-radius: 5px;
    background-color: white;
    transition: border-radius 0.5s, background-color 0.5s;
  }
`;


const PortfolioProject = (props) => {
  return (
    <ProjectCard>
      <div className='card' style={{ backgroundImage: `url('${props.background}')` }}>
        <div className='card--hover'>
          <h2>{props.title}</h2>
          {/* <p>{props.description}</p> */}
          <div>
            {props.github && (<a href={props.github}>Github</a>)}
            {props.liveSite && (<a href={props.liveSite}>Live Site</a>)}
          </div>
        </div>
      </div>
    </ProjectCard>

  );
};

export default PortfolioProject;