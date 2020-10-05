import { Contentful } from "./contentful";

export type Article = Contentful.PostModel;
export type Tag = Contentful.TagModel;
export type Page = Contentful.Page;

export type PageMetadata = {
  title: string;
  titleTemplate: string;
  pathname: string;
};

export type SiteMetadata = {
  description: string;
  siteUrl: string;
  image: string;
  twitterUsername: string;
} & PageMetadata;
