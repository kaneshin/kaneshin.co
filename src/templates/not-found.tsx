import React from "react";
import { graphql, PageProps } from "gatsby";
import get from "lodash/get";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import { Page } from "../models";

const NotFoundPage: React.FC<PageProps> = props => {
  const page: Page = get(props, "data.contentfulPage");

  return (
    <Layout location={props.location}>
      <SEO title={page.title} description={page.description} />

      <div className="mx-auto px-20px md:px-32px max-w-screen-md">
        <div className="pt-60px pb-40px md:h-400px flex items-center">
          <div className="mx-auto text-center">
            <p className="mb-16px text-24px md:text-32px font-semibold">404 Not Found</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPageQuery {
    contentfulPage(contentful_id: { eq: "3ca7G1hIgRjbEc8iCeAAaQ" }) {
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
