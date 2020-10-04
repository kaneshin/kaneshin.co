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
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("./tailwind.config.js")],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
};
