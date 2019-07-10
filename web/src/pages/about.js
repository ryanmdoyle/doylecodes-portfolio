import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContentContainer from '../components/styledComponents/ContentContainer';

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <ContentContainer>
      <p>in the container</p>
    </ContentContainer>
  </Layout>
)

export default About
