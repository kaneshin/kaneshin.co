const React = require("react");
const siteConfig = require("./site.config.js");

const facebookSdkOptions = {
  appId: siteConfig.facebookSdk.appId,
  autoLogAppEvents: true,
  xfbml: true,
  version: "v8.0",
};

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }, pluginOptions) => {
  setHtmlAttributes(siteConfig.htmlAttributes);
  setHeadComponents([
    <link
      key="font-lato"
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
      rel="stylesheet"
    />,
    <script key="font-awesome" src="https://kit.fontawesome.com/fc2c56537d.js" crossOrigin="anonymous"></script>,
    <script key="embedly" async={true} crossOrigin="anonymous" src="//cdn.embedly.com/widgets/platform.js"></script>,
  ]);

  const preBodyComponents = [];
  if (facebookSdkOptions.appId) {
    preBodyComponents.push(
      <script
        key="facebook-async-init"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {FB.init(${JSON.stringify(facebookSdkOptions)})}`,
        }}
      />,
      <script
        key="facebook-sdk"
        async={true}
        defer={true}
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js"
      ></script>,
    );
  }
  setPreBodyComponents(preBodyComponents);
};
