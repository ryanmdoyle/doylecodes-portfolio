import styled from 'styled-components';

const ContentContainer = styled.div`
  margin: 0;
  padding: 2rem;
  width: 100%;
  min-height: 500px;
  max-height: 90vh;
  border-radius: 0.25rem;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width:900px) {
    padding: 0;
  }
`;

export default ContentContainer;