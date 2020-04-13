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
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Álvaro Durán",
        short_name: "Álvaro Durán",
        start_url: "/",
        background_color: "#3b4252",
        theme_color: "#5e81ac",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
