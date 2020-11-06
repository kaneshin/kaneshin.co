require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error("Contentful spaceId and the access token need to be provided.");
}

const exclude = ["/column/dummy/**", "/happy/dummy/**"];
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  siteMetadata: {
    title: "kaneshin.co",
    titleTemplate: "%s | kaneshin.co",
    pathname: "/",
    description: "Who is kaneshin.",
    siteUrl: "https://kaneshin.co",
    image: "/img/ogp.jpg",
    twitterUsername: "@kaneshin0120",
  },
  pathPrefix: "/",
  plugins: [
    {
      // Make sure this plugin is first in the array of plugins
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-71886081-1",
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: exclude,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        exclude: exclude,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) => {
          return [
            {
              url: site.siteMetadata.siteUrl,
              changefreq: `daily`,
              priority: 1.0,
            },
          ].concat(
            allSitePage.nodes.map(node => {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `daily`,
                priority: 1.0,
              };
            }),
          );
        },
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")(tailwindConfig)],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries: [
          {
            query: `{
              allContentfulPost {
                edges {
                  node {
                    objectID: slug
                    title
                    description
                    tags {
                      title
                    }
                    body {
                      childMarkdownRemark {
                        excerpt(truncate: true, format: PLAIN, pruneLength: 200)
                        html
                      }
                    }
                  }
                }
              }
            }`,
            transformer: ({ data }) => data.allContentfulPost.edges.map(({ node }) => node),
            settings: {},
          },
        ],
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: false, // default: false
        matchFields: ["slug", "modified"], // Array<String> default: ['modified']
      },
    },
  ],
};
