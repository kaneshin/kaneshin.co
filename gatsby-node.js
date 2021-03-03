const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Not Found Page
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found.tsx"),
  });

  const postsTemplate = path.resolve("./src/templates/posts.tsx");

  return new Promise((resolve, reject) => {
    resolve(
      // Create "/posts/:slug"
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
          const slug = article.node.slug;
          createPage({
            path: path.join("/posts", slug),
            component: postsTemplate,
            context: { slug },
          });
        });
      }),
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
  const config = {};
  if (getConfig().mode === "production") {
    if (stage === "build-javascript") {
      config["devtool"] = false;
    }
  }
  config["resolve"] = {
    fallback: {
      util: require.resolve("util/"),
      path: require.resolve("path-browserify"),
    },
  };
  actions.setWebpackConfig(config);
};
