module.exports = {
  siteMetadata: {
    title: `_Save-The_Foul`,
    description: `Save the Foul - is a final solution to fight broomrape aka "halook" in Egypt and revive fava-beans aka "Foul"`,
    siteUrl: `https://savetheFoul.gatsbyjs.io/#`,
    author: `@maghin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `_Save-the_Foul`,
        short_name: `savetheFoul`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#675CE2`,
        display: `standalone`,
        icon: `src/assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
