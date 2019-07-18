import styled from 'styled-components';

const ContentContainer = styled.div`
  margin: 0;
  padding: 2rem;
  width: 100%;
  min-height: 500px;
  max-height: 75vh;
  border-radius: 0.25rem;
  background-color: rgb(203, 206, 211, 0.9);
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
`;

export default ContentContainer;