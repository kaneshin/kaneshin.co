import React from "react";
import { Helmet } from "react-helmet";
import { PageRendererProps } from "gatsby";
import "../../assets/styles/index.scss";
import HeaderNav from "./header-nav";
import FooterNav from "./footer-nav";
import favicon from "../../assets/favicon.ico";

const Layout: React.FC<PageRendererProps> = props => (
  <div>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>

    <header className="bg-white w-full">
      <div className="x-layout max-w-screen-lg">
        <HeaderNav />
      </div>
    </header>

    <>{props.children}</>

    <footer className="mb-60px bg-white w-full">
      <div className="x-layout max-w-screen-lg">
        <FooterNav />
      </div>
    </footer>
  </div>
);

export default Layout;
