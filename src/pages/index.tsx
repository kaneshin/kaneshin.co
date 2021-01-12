import React from "react";
import { graphql, PageProps } from "gatsby";
import get from "lodash/get";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import PostGrid from "../components/post-grid";
import { Article } from "../models";
import { Contentful } from "../models/contentful";

const IndexPage: React.FC<PageProps> = props => {
  const articles: Article[] = (get(props, "data.allContentfulPost.edges") as Contentful.Node<Article>[]).map(
    v => v.node,
  );
  const top: Article[] = articles.slice(0, 1);
  const latest: Article[] = articles.slice(1);

  return (
    <Layout location={props.location}>
      <SEO />

      <section className="x-layout my-40px max-w-screen-lg">
        <div className="pb-40px grid grid-cols-1 md:grid-cols-3 gap-20px border-b">
          <div className="col-span-1 flex flex-col sm:flex-row md:flex-col">
            <img className="mb-16px mr-20px h-150px w-150px rounded-full" src="/img/kaneshin.jpg" alt="Shintaro Kaneko" />
            <div className="mb-16px text-left">
              <h2 className="text-20px font-bold">Shintaro Kaneko</h2>
              <p className="mb-8px">Tokyo, Japan</p>
              <p className="font-light">
                Building things with Go. Experiences: Go / C / JavaScript / TypeScript / Swift / Engineering Management
                / Mathematics
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <PostGrid location={props.location} articles={top} cols={1} />
          </div>
        </div>
      </section>

      <section className="x-layout my-40px max-w-screen-lg">
        <PostGrid location={props.location} articles={latest} />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          description
          slug
          external
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
