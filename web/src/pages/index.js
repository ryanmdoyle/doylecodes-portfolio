import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeaderLinks from "../components/HeaderLinks";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome>
      <div className='welcome__text'>
        <h1 className='greeting'>Hello, I'm Ryan.</h1>
        <h2 className='tagline'>Developer, Learner, Educator</h2>
        <HeaderLinks />
      </div>
    </Welcome>
  </Layout>
)

const Welcome = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .greeting {
    color: white;
    width: 100%;
  }
  .tagline {
    color: white;
    width: 100%;
  }
  .welcome__text {
    text-align: center;
  }
`

export default IndexPage
