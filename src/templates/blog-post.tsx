import React from "react";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image";
import get from "lodash/get";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import { SiteMetadata } from "../models";
import { Article, Tag } from "../models/article";

const cheerio = require("cheerio");

const BlogPostTemplate: React.FC<PageProps> = props => {
  const metadata: SiteMetadata = get(props, "data.site.siteMetadata");
  const article: Article = get(props, "data.contentfulPost");

  const $ = cheerio.load(article.body.childMarkdownRemark.html);
  const seoDescription = article.description || ($.text() || "").replace(/\r?\n/g, "");
  const seoImage = article.featuredImage?.file?.url || "";

  return (
    <Layout location={props.location}>
      <SEO
        title={article.title}
        titleTemplate={metadata.titleTemplate}
        description={seoDescription}
        image={seoImage}
        article={true}
      />

      <div className="mx-auto pt-24px mb-64px max-w-screen-sm">
        {article.featuredImage && (
          <Img className="entry-article-image" alt={article.title} fluid={article.featuredImage.fluid} />
        )}

        <div className="entry-article-head">
          <h1>{article.title}</h1>
          <div className="mt-20px mb-20px md:mb-40px flex items-center">
            <img className="w-40px h-40px rounded-full mr-12px" src="/img/kaneshin.jpg" />
            <div className="text-14px">
              <p className="">Shintaro Kaneko</p>
              <p className="text-gray-500">{article.publishDate}</p>
            </div>
          </div>
        </div>

        <div className="entry-article" dangerouslySetInnerHTML={{ __html: article.body.childMarkdownRemark.html }} />

        <div className="entry-article-foot">
          <div className="mb-16px text-13px text-gray-500 flex flex-wrap justify-start">
            {article.tags?.map(({ title }: Tag) => (
              <span className="mr-8px leading-relaxed" key={title}>
                #{title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        titleTemplate
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
