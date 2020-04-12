/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Álvaro Durán",
    titleTemplate: "%s · Consultor Digital",
    description:
      "La digitalización de tu empresa, ahora",
    siteUrl: "https://www.alvaroduran.com",
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131540516-1",
      },
    },
  ],
}
