import React from "react";
import styled from 'styled-components';

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContentContainer from '../components/styledComponents/ContentContainer';


const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <h1>Contact</h1>
    <ContentContainer>
      <FormStyled>
        <form
          name='contact'
          method='post'
          data-netlify='true'
          netlify-honeypot='bot-field'
        >
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <div className='pseudo-table'>
            <input type='text' name='name' />
            <label>Name</label>
          </div>
          <div class='pseudo-table'>
            <input type='email' name='name' required />
            <label>Email</label>
          </div>
          <div class='pseudo-table'>
            <textarea type='text' name='name' required />
            <label>Body</label>
          </div>
          <button type='submit'>Get in touch!</button>
        </form>
      </FormStyled>
    </ContentContainer>
  </Layout>
)

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
    width: 30vw;
    height: 2rem;
    transition: height 0.5s, background-color 1s;
    border: 1px solid gray;
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
`;

export default Contact