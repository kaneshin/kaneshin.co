/**
 * INFO: https://www.gatsbyjs.org/docs/node-apis/#createPages
 */
const Promise = require("bluebird");
const path = require("path");

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Not Found Page
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found.tsx"),
  });

  const blogPostTemplate = path.resolve("./src/templates/blog-post.tsx");

  return new Promise((resolve, reject) => {
    resolve(
      // Create "/blog/:slug"
      graphql(`
        {
          allContentfulPost {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const edges = result.data.allContentfulPost.edges;
        edges.forEach(article => {
          createPage({
            path: path.join("/blog", article.node.slug),
            component: blogPostTemplate,
            context: {
              slug: article.node.slug,
            },
          });
        });
      }),
    );
  });
};
