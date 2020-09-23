import filter from "lodash/filter";
import { Node } from ".";
import { Contentful } from "./contentful";

export type Article = Contentful.PostModel;
export type Tag = Contentful.TagModel;

interface SlugProtocol {
  slug: string;
}

export const removeDummy = <T>(collection: Node<T>[]): Node<T>[] => {
  return filter(collection, (article: Node<T>) => {
    const node = (article.node as unknown) as SlugProtocol;
    if (process.env.NODE_ENV === "development") {
      return true;
    }
    return !RegExp(/^dummy\//).test(node.slug);
  });
};
