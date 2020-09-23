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
};
