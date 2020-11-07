import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { format } from "util";
import get from "lodash/get";
import { SiteMetadata } from "../../models";
import { joinSafety, baseUrl } from "../../utils";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const maxLengthOfTitle = 60;
const maxLengthOfDescription = 240;

export default (props: SEOProps) => {
  const { pathname } = useLocation();
  const siteMetadata: SiteMetadata = get(useStaticQuery(query), "site.siteMetadata");

  const seo = {
    title: props.title || siteMetadata.title,
    titleTemplate: siteMetadata.titleTemplate,
    description: props.description || siteMetadata.description,
    image: props.image || siteMetadata.image,
    twitterUsername: siteMetadata.twitterUsername,
    url: joinSafety(siteMetadata.siteUrl, pathname),
  };

  // cut to the limit of strings
  seo.title = seo.title.slice(0, maxLengthOfTitle);
  seo.description = seo.description.slice(0, maxLengthOfDescription);
  const parsedTitle: string = format(seo.titleTemplate, seo.title);

  // append siteUrl protocol or/and hostname if lacking of seo.image info
  seo.image = baseUrl(seo.image, siteMetadata.siteUrl);

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:type" content={props.article ? "article" : "website"} />
      {seo.title && <meta property="og:title" content={parsedTitle} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {seo.twitterUsername && <meta name="twitter:creator" content={seo.twitterUsername} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={parsedTitle} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;
