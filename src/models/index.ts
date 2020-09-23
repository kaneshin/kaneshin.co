export interface Node<T> {
  node: T;
}

export type PageMetadata = {
  title: string;
  titleTemplate: string;
  navTitle: string;
  pathname: string;
};

export type SiteMetadata = {
  description: string;
  siteUrl: string;
  image: string;
} & PageMetadata;
