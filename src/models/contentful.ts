export namespace Contentful {
  export type Text = {
    childMarkdownRemark: {
      html: string;
      rawMarkdownBody: string;
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
    body: Text;
    featuredImage?: Link;
    tags: TagModel[];
    publishDate: string;
  };
}
