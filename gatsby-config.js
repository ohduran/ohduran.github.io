const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Studio`,
    titleTemplate: `%s · Alvaro Duran`,
    description: `The primary source for my writing.`,
    siteUrl: `https://alvaroduran.com`,
    image: "/favicon.ico",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/essays`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/misc`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: true,
              wrapperStyle:
                "width: 91.666667%; margin-left: auto; margin-right: auto; margin-top: 1.25rem; margin-bottom: 1.25rem;",
            },
          },
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.summary,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/essays/" + node.slug,
                  guid: site.siteMetadata.siteUrl + "/essays/" + node.slug,
                  custom_elements: [{ "content:encoded": node.body }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                  filter: { frontmatter: { published: { eq: true } } }
                ) {
                  nodes {
                    id
                    excerpt(pruneLength: 250)
                    slug
                    body
                    frontmatter {
                      title
                      date
                      summary
                    }
                    wordCount {
                      words
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Alvaro Duran",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Alvaro Duran Studio",
        short_name: "ADS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/favicon.ico", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
