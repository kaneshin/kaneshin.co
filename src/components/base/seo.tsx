import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { format } from "util";
import { SiteMetadata } from "../../models";
import { joinSafety, baseUrl } from "../../utils";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

type Props = SEOProps & {
  titleTemplate?: string;
  twitterUsername?: string;
};

const maxLengthOfTitle = 60;
const maxLengthOfDescription = 160;

const SEO = (props: Props) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const siteMetadata: SiteMetadata = site.siteMetadata;
  const siteUrl: string = siteMetadata.siteUrl;

  const seo = {
    title: props.title || siteMetadata.title,
    titleTemplate: props.titleTemplate || siteMetadata.titleTemplate,
    description: props.description || siteMetadata.description,
    image: props.image || siteMetadata.image,
    url: joinSafety(siteUrl, pathname),
  };

  // cut to the limit of strings
  seo.title = seo.title.slice(0, maxLengthOfTitle);
  seo.description = seo.description.slice(0, maxLengthOfDescription);
  const parsedTitle: string = format(seo.titleTemplate, seo.title);

  // append siteUrl protocol or/and hostname if lacking of seo.image info
  seo.image = baseUrl(seo.image, siteUrl);

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(props.article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={parsedTitle} />}

      {seo.description && <meta property="og:description" content={seo.description} />}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {props.twitterUsername && <meta name="twitter:creator" content={props.twitterUsername} />}

      {seo.title && <meta name="twitter:title" content={parsedTitle} />}

      {seo.description && <meta name="twitter:description" content={seo.description} />}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        image
      }
    }
  }
`;
