import styled from 'styled-components';

const FormStyled = styled.div`
  box-sizing: border-box;
  width: 100%;

  label {
    display: block;
    display: table-header-group;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 1.6rem;
    color: #242424;
    transition: font-size 0.5s;
  }

  input, textarea {
    display: table-row-group;
    width: 100%;
    padding: 0.2rem 1rem;
    height: 2rem;
    transition: height 0.5s, background-color 1s;
    border: 1px solid gray;
  }

  textarea {
    max-width: 750px;
    min-height: 10rem;
    padding-top: 0.5rem;
  }

  .pseudo-table {
    display: table;
    margin-bottom: 1rem;
    width: 90%;
    box-sizing: border-box;

  }

  input:focus + label {
    color: rgb(66, 33, 99, 1);
    transition: color 1s;
  }

  textarea:focus + label {
    color: rgb(66, 33, 99, 1);
    transition: color 1s;
  }

  input:focus, textarea:focus {
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
    font-size: 2rem;
    background-color: rgb(66, 33, 99, 1);
    border: 2px solid rgb(66, 33, 99, 1);
    padding: 1rem 1rem;
    transition: border 0.3s, color 0.3s, background-color 0.3s;
  }
  button:hover {
    border: 2px solid rebeccapurple;
    color: rebeccapurple;
    background-color: white;
    transition: border 0.3s, color 0.3s, background-color 0.3s;
  }
  input:required, textarea:required {
    box-shadow:none;
  }
  input:invalid, textarea:invalid {
    box-shadow: none;
  }
`;

export default FormStyled;