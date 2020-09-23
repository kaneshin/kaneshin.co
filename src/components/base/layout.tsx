import React from "react";
import { Helmet } from "react-helmet";
import { PageRendererProps } from "gatsby";
import "../../assets/styles/index.scss";
import HeaderNav from "./header-nav";
import FooterNav from "./footer-nav";
import favicon from "../../assets/favicon.ico";

const Layout: React.FC<PageRendererProps> = props => (
  <div>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <link rel="icon" href={favicon} />
    </Helmet>

    <header className="bg-white w-full">
      <div className="x-layout max-w-screen-xl">
        <HeaderNav />
      </div>
    </header>

    <>{props.children}</>

    <footer className="bg-white w-full">
      <div className="x-layout max-w-screen-lg">
        <FooterNav />
      </div>
    </footer>
  </div>
);

export default Layout;
