export namespace Contentful {
  export type id = string;

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

  export type MediaMetadataModel = {
    // [INFO] don't use on Gatsby: entryTitle: string
    description: Text;
    ogImage: Link;
    featuredImage: Link;
    twitterUsername: string;
  };

  export type CategoryModel = {
    slug: string;
    title: string;
    order: number;
  };

  export type ColumnModel = {
    slug: string;
    title: string;
    body: Text;
    category?: CategoryModel[];
    featuredImage?: Link;
    publishDate: string;
    seoTitle?: string;
    seoDescription?: Text;
    seoImage?: Link;
    disableRegistrationButton?: boolean;
  };

  export type HappyModel = {
    title: string;
    slug: string;
    interview: string;
    featuredImage: Link;
    users: HappyUser[];
    body: Text;
    publishDate: string;
  };

  export type HappyUser = {
    name: string;
    age: number;
    gender: string;
    period: number;
    hometown: string;
    job: string;
    hobby: string;
  };
}
