import React from "react";
import { useLocation } from "@reach/router";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image";
import get from "lodash/get";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";
import { SiteMetadata, Article, Tag } from "../models";
import { joinSafety } from "../utils";

const PostsTemplate: React.FC<PageProps> = props => {
  const { pathname } = useLocation();
  const siteMetadata: SiteMetadata = get(props, "data.site.siteMetadata");
  const article: Article = get(props, "data.contentfulPost");
  const seoDescription = article.description || article.body?.childMarkdownRemark.excerpt || article.title;
  const seoImage = article.featuredImage?.file?.url || "";

  const link = joinSafety(siteMetadata.siteUrl, pathname);
  const share = {
    facebook: () => {
      FB.ui({
        display: "popup",
        method: "share",
        href: link,
      });
    },
    twitter: () => {
      const url = new URL("https://twitter.com/intent/tweet");
      url.searchParams.set(
        "hashtags",
        article.tags
          ?.map(({ title }: Tag) => {
            return title.toLowerCase();
          })
          .join(","),
      );
      url.searchParams.set("original_referer", siteMetadata.siteUrl);
      url.searchParams.set("text", article.title);
      url.searchParams.set("url", link);
      if (siteMetadata.twitterUsername && siteMetadata.twitterUsername.slice) {
        url.searchParams.set("via", siteMetadata.twitterUsername.slice(1));
      }
      window.open(url.toString());
    },
    hatena: () => {
      const url = new URL("https://b.hatena.ne.jp/entry/panel/");
      url.searchParams.set("url", link);
      window.open(url.toString());
    },
    linkedin: () => {
      const url = new URL("https://www.linkedin.com/sharing/share-offsite");
      url.searchParams.set("mini", "true");
      url.searchParams.set("url", link);
      url.searchParams.set("title", article.title);
      window.open(url.toString());
    },
  };

  return (
    <Layout location={props.location}>
      <SEO title={article.title} description={seoDescription} image={seoImage} article={true} />

      <div className="mx-auto pt-24px mb-64px max-w-screen-md">
        {article.featuredImage && (
          <Img className="entry-article-image" alt={article.title} fluid={article.featuredImage.fluid} />
        )}

        <div className="entry-article-head">
          <h1>{article.title}</h1>
          <div className="mb-20px text-13px text-gray-500 flex flex-wrap justify-start">
            {article.tags?.map(({ title }: Tag) => (
              <span className="mr-8px leading-relaxed" key={title}>
                #{title}
              </span>
            ))}
          </div>
        </div>

        {article.body && (
          <div className="entry-article" dangerouslySetInnerHTML={{ __html: article.body.childMarkdownRemark.html }} />
        )}

        <div className="entry-article-foot">
          <div className="w-204px mb-40px flex justify-between text-white text-20px text-center">
            <div
              className="bg-facebook flex items-center justify-center w-40px h-40px pt-2px rounded-full"
              role="button"
              onClick={share.facebook}
            >
              <i className="fab fa-facebook-f"></i>
            </div>

            <div
              className="bg-twitter flex items-center justify-center w-40px h-40px pt-2px pl-2px rounded-full"
              role="button"
              onClick={share.twitter}
            >
              <i className="fab fa-twitter"></i>
            </div>

            <div
              className="bg-hatena flex items-center justify-center w-40px h-40px font-bold rounded-full"
              style={{ fontFamily: "Verdana" }}
              role="button"
              onClick={share.hatena}
            >
              B!
            </div>

            <div
              className="bg-linkedin flex items-center justify-center w-40px h-40px rounded-full"
              role="button"
              onClick={share.linkedin}
            >
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>

          <div className="mb-40px flex items-center">
            <img className="w-40px h-40px rounded-full mr-12px" src="/img/kaneshin.jpg" />
            <div className="text-14px">
              <p className="">Shintaro Kaneko</p>
              <p className="text-gray-500">{article.publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostsTemplate;

export const pageQuery = graphql`
  query PostsTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterUsername
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      description
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
          excerpt(truncate: true, format: PLAIN, pruneLength: 200)
          html
        }
      }
    }
  }
`;
