import React from "react";
import { graphql, PageProps } from "gatsby";
import get from "lodash/get";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import BlogPostGrid from "../components/blog-post-grid";
import { Node, SiteMetadata } from "../models";
import { Article } from "../models/article";

const IndexPage: React.FC<PageProps> = props => {
  const metadata: SiteMetadata = get(props, "data.site.siteMetadata");
  const articles: Node<Article>[] = get(props, "data.allContentfulPost.edges");

  return (
    <Layout location={props.location}>
      <SEO
        title={metadata.title}
        titleTemplate={metadata.titleTemplate}
        description={metadata.description}
        image={metadata.image}
        article={true}
      />

      <section className="x-layout max-w-screen-lg">
        <div className="my-40px md:flex md:justify-between">
          <div className="mb-16px md:mb-0px md:mr-24px md:flex">
            <img
              className="mx-auto mb-16px md:ml-0px md:mr-24px h-80px w-80px md:h-96px md:w-96px rounded-full"
              src="/img/kaneshin.jpg"
            />
            <div className="text-center md:text-left">
              <h2 className="text-20px">Shintaro Kaneko</h2>
              <p className="mb-8px">Tokyo, Japan</p>
              <p className="font-light">Hi, this is kaneshin. Building things with Go.</p>
              <p className="font-light">
                Experiences: Go / C / JavaScript / TypeScript / Swift / Engineering Management / Mathematics
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="x-layout max-w-screen-lg">
        <div className="mb-40px">
          <BlogPostGrid location={props.location} articles={articles} />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplateQuery {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        pathname
      }
    }
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          description
          slug
          tags {
            title
          }
          publishDate(formatString: "MMMM DD, YYYY")
          featuredImage {
            file {
              url
            }
            fluid(maxWidth: 1180, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
