import React from "react";
import { graphql, PageProps } from "gatsby";
import get from "lodash/get";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import { Page } from "../models";

const AboutPage: React.FC<PageProps> = props => {
  const page: Page = get(props, "data.contentfulPage");

  return (
    <Layout location={props.location}>
      <SEO title={page.title} description={page.description} />

      <section className="x-layout my-40px max-w-screen-lg">
        <img className="mb-16px mr-20px h-150px w-150px rounded-full" src="/img/kaneshin.jpg" />
        <div className="mb-16px text-left">
          <h2 className="text-20px font-bold">Shintaro Kaneko</h2>
          <p className="mb-8px">Tokyo, Japan</p>
          <p>
            Hi, I'm Shintaro Kaneko. Please call me Shin in an English conversation. Experienced Chief Technology
            Officer with a demonstrated history of working in the internet industry. Skills in Go, C, JavaScript,
            TypeScript, Swift, Engineering Management, and Mathematics. Strong scientific information technology
            professional graduated from the Tokyo University of Science.{" "}
          </p>
        </div>
      </section>

      <section className="my-40px">
        <img className="w-full" src="/img/eureka.jpg" />
      </section>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
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
