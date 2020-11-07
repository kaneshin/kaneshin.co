const React = require("react");

const HeadComponents = [];

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
  setHeadComponents(HeadComponents);
  setPreBodyComponents([facebookSdkComponent]);
};
