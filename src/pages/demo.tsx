import React from "react";
import { graphql, PageProps } from "gatsby";
import get from "lodash/get";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import { Page } from "../models";

const DemoPage: React.FC<PageProps> = props => {
  const page: Page = get(props, "data.contentfulPage");

  return (
    <Layout location={props.location}>
      <SEO title={page.title} description={page.description} />

      <section className="x-layout my-40px max-w-screen-lg">
        <h2 className="uppercase font-bold">Demo</h2>
      </section>
    </Layout>
  );
};

export default DemoPage;

export const pageQuery = graphql`
  query DemoPageQuery {
    contentfulPage(contentful_id: { eq: "1gMjLWLsY8Eq2CTjyLdjE4" }) {
      title
      description
      image {
        file {
          url
        }
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
