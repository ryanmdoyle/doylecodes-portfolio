import React from "react";
import styled from 'styled-components';

import SEO from "../components/SEO";
import ContentContainer from '../components/styledComponents/ContentContainer';
import FormStyled from '../components/styledComponents/FormStyled';


const Contact = () => (
  <>
    <SEO title="contact" />
    <h1>Contact</h1>
    <ContentContainer>
      <div className='text'>
        <h2>Let's Talk!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus semper ex in volutpat. Integer interdum nisi in diam faucibus, auctor laoreet arcu tincidunt. Donec mollis volutpat eros a viverra. Aenean eu dui nec nisi egestas suscipit nec eu turpis. Nunc dignissim odio quis elit sollicitudin, nec vehicula augue euismod. Etiam eget nunc id dui eleifend finibus quis quis eros. Curabitur rutrum odio sit amet ultricies blandit. Proin quis aliquet tortor. Morbi id diam dapibus mi condimentum pretium vitae a risus. Duis sit amet ante sed elit bibendum iaculis ornare vitae orci. Morbi ac eros elit. Donec vehicula lacus justo, vel pretium massa molestie eget. Etiam ac dui purus. </p>
      </div>
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
  </>
)

export default Contact