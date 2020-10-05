export namespace Contentful {
  export interface Node<T> {
    node: T;
  }

  export type Text = {
    childMarkdownRemark: {
      html: string;
      rawMarkdownBody: string;
      excerpt: string;
    };
  };

  export type Link = {
    file: {
      url: string;
    };
    fluid: any;
    fixed: any;
  };

  export type TagModel = {
    title: string;
  };

  export type PostModel = {
    title: string;
    description?: string;
    slug: string;
    body?: Text;
    featuredImage?: Link;
    tags: TagModel[];
    publishDate: string;
  };

  export type Page = {
    title: string;
    description: string;
    image?: Link;
  };
}
