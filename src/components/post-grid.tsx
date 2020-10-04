import React from "react";
import { PageRendererProps, Link } from "gatsby";
import Img from "gatsby-image";
import { Node } from "../models";
import { Article, Tag } from "../models";

interface PostGridProps {
  articles: Node<Article>[];
  cols?: number | undefined;
}

const PostGrid: React.FC<PageRendererProps & PostGridProps> = props => {
  const gridCols: string = ((): string => {
    // To be able to detect them by PurgeCSS
    switch (props.cols) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
    }
    return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  })();

  return (
    <div className={`items-start grid ${gridCols} gap-20px`}>
      {props.articles.map(({ node }: Node<Article>) => (
        <div
          className="col-span-1 overflow-hidden transition duration-300 ease-in-out hover:opacity-80"
          key={node.slug}
        >
          <Link to={`/posts/${node.slug}`}>
            <div className="">
              {node.featuredImage && (
                <Img className="w-full h-160px md:h-200px" alt={node.title} fluid={node.featuredImage.fluid} />
              )}

              <div className="pt-16px px-16px border-l border-b border-r">
                <p className="mb-8px text-18px font-bold">{node.title}</p>
                {node.description && <p className="mb-16px text-14px font-medium">{node.description}</p>}
                <div className="mb-16px text-13px text-gray-500 flex flex-wrap justify-start">
                  {node.tags?.map(({ title }: Tag) => (
                    <span className="mr-8px leading-relaxed" key={title}>
                      #{title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
