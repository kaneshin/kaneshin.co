/**
 * INFO: https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
 */
module.exports = ({ stage, getConfig, rules, loaders, actions }) => {
  const config = {};
  if (getConfig().mode === "production") {
    if (stage === "build-javascript") {
      config["devtool"] = false;
    }
  }
  actions.setWebpackConfig(config);
};
