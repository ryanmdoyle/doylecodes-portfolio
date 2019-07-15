import styled from 'styled-components';

const FormStyled = styled.div`
  label {
    display: block;
    display: table-header-group;
    font-size: 1rem;
    font-weight: bold;
    transition: font-size 0.5s;
  }

  input, textarea {
    display: table-row-group;
    min-width: 500px;
    height: 2rem;
    transition: height 0.5s, background-color 1s;
    border: 1px solid gray;
  }

  textarea {
    max-width: 750px;
  }

  .pseudo-table {
    display: table;
    margin-bottom: 1rem;
  }

  input:focus + label {
    font-size: 1.5rem;
    transition: font-size 0.5s;
    color: rgb(66, 33, 99, 0.8);
    transition: font-size 0.5s, color 1s;
  }

  textarea:focus + label {
    font-size: 1.5rem;
    transition: font-size 0.5s;
    color: rgb(66, 33, 99, 0.8);
    transition: font-size 0.5s, color 1s;
  }

  input:focus, textarea:focus {
    transition: font-size 0.5s;
    height: 2.5rem;
    transition: height 0.5s, background-color 1s;
    border: 2px solid rgb(66, 33, 99, 0.2);
    background-color: rgb(66, 33, 99, 0.2)
  }

  .hidden {
    display: none;
    visibility: hidden;
  }

  button {
    color: white;
    background-color: rgb(66, 33, 99, 0.8);
    border: 2px solid rgb(66, 33, 99, 0.2);
    padding: 0.25rem 0.5rem;
    transition: border 0.3s;
  }
  button:hover {
    border: 2px solid white;
    transition: border 0.3s;
  }
  input:required, textarea:required {
    box-shadow:none;
  }
  input:invalid, textarea:invalid {
    box-shadow: none;
  }
`;

export default FormStyled;