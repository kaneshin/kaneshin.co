import React from "react";
import { Helmet } from "react-helmet";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import "../../assets/styles/index.scss";
import HeaderNav from "./header-nav";
import FooterNav from "./footer-nav";
import { SiteMetadata } from "../../models";

const Layout: React.FC<PageRendererProps> = props => {
  const { site } = useStaticQuery(query);
  const siteMetadata: SiteMetadata = site.siteMetadata;

  return (
    <div>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <link rel="icon" />
      </Helmet>

      <header className="bg-white w-full fixed top-0 left-0 z-50">
        <div className="mx-auto px-8px md:px-24px max-w-screen-xl">
          <HeaderNav />
        </div>
      </header>

      <div className="mt-60px md:mt-90px">{props.children}</div>

      <footer className="bg-white w-full">
        <div className="mx-auto px-8px md:px-32px max-w-screen-lg">
          <FooterNav />
        </div>
      </footer>
    </div>
  );
};

export default Layout;

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        navTitle
        pathname
        siteUrl
      }
    }
  }
`;
