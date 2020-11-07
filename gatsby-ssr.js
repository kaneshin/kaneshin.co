const React = require("react");

const facebookSdkOptions = {
  appId: "822757664484359",
  autoLogAppEvents: true,
  xfbml: true,
  version: "v8.0",
};

const facebookSdkComponent = (
  <>
    <script
      key="facebook-async-init"
      dangerouslySetInnerHTML={{
        __html: `window.fbAsyncInit = function() {FB.init(${JSON.stringify(facebookSdkOptions)})}`,
      }}
    />
    <script
      key="facebook-sdk"
      async={true}
      defer={true}
      crossOrigin="anonymous"
      src="https://connect.facebook.net/en_US/sdk.js"
    ></script>
  </>
);

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }, pluginOptions) => {
  setHtmlAttributes({ lang: "ja" });
  setHeadComponents([
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />,
    <script key="font-awesome" src="https://kit.fontawesome.com/fc2c56537d.js" crossOrigin="anonymous"></script>,
    <script key="hatena-bookmark" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async={true} crossOrigin="anonymous"></script>
  ]);
  setPreBodyComponents([facebookSdkComponent]);
};
