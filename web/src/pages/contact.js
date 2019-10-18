import React from "react";

import SEO from "../components/SEO";
import ContentContainer from '../components/styledComponents/ContentContainer';
import FormStyled from '../components/styledComponents/FormStyled';
import PageFade from '../components/PageFade';

const Contact = () => (
  <PageFade>
    <SEO title="contact" />
    <ContentContainer>
      <div className='text'>
        <h3>Let's Talk!</h3>
        <p>Want to say hi? Need some help on a project or looking to talk about working on something new? Shot me an email below and we can talk!</p>
      </div>
      <FormStyled>
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <div className='pseudo-table'>
            <input type='text' name='name' />
            <label>Your Name</label>
          </div>
          <div class='pseudo-table'>
            <input type='email' name='name' required />
            <label>Your Email Address</label>
          </div>
          <div class='pseudo-table'>
            <textarea type='text' name='name' required />
            <label>Message</label>
          </div>
          <button type='submit'>Get in touch!</button>
        </form>
      </FormStyled>
    </ContentContainer>
  </PageFade>
)

export default Contact