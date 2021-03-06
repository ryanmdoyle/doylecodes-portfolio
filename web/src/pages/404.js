import React from "react"

import SEO from "../components/SEO"
import PageFade from '../components/PageFade';

const NotFoundPage = () => (
  <PageFade>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageFade>
)

export default NotFoundPage
