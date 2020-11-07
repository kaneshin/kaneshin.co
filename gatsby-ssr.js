const React = require("react");

const HeadComponents = [];

const PreBodyComponents = [
  <>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
  </>,
];

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }, pluginOptions) => {
  setHtmlAttributes({ lang: "ja" });
  setHeadComponents(HeadComponents);
  setPreBodyComponents(PreBodyComponents);
};
