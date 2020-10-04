import React from "react";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import get from "lodash/get";
import { Page } from "../models";

const ContactPage: React.FC<PageProps> = props => {
  const page: Page = get(props, "data.contentfulPage");

  return (
    <Layout location={props.location}>
      <SEO title={page.title} description={page.description} />

      <section className="mb-40px">
        {page.image && <Img className="w-full h-320px md:h-400px" alt={page.title} fluid={page.image.fluid} />}
      </section>

      <section className="x-layout  max-w-screen-lg">
        <iframe
          className="mx-auto max-w-screen-sm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfIMZe-mlZtwX3qfuWV0dXTqO4WgYstneswXp4lPt1S6siMEQ/viewform?embedded=true"
          width="100%"
          height={960}
          frameBorder={0}
        >
          Loading…
        </iframe>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplateQuery {
    contentfulPage(contentful_id: { eq: "1CuZvFItWucGIcD5RnnAUW" }) {
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
