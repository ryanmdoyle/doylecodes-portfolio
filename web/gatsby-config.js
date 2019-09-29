module.exports = {
  siteMetadata: {
    title: `Doyle Codes Portfolio`,
    description: `The portfolio and blog of Ryan Doyle`,
    author: `@doylecodes`,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'cbmuj639',
        dataset: 'portfolio',
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ["SANITY_TOKEN"]
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-transition-link',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans', 'Patua One']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
