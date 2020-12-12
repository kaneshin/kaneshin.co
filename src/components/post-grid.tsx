import React from "react";
import { PageRendererProps, Link } from "gatsby";
import Img from "gatsby-image";
import { Article, Tag } from "../models";

interface PostGridProps {
  articles: Article[];
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
      {props.articles.map((article: Article) => (
        <div
          className="post-grid col-span-1 overflow-hidden transition duration-300 ease-in-out hover:opacity-80"
          key={article.slug}
        >
          <Link to={`/posts/${article.slug}`}>
            <div className="border">
              {article.featuredImage && (
                <Img className="w-full h-160px md:h-200px" alt={article.title} fluid={article.featuredImage.fluid} />
              )}

              <div className="pt-16px px-16px">
                <p className="mb-8px text-18px font-bold">{article.title}</p>
                {article.description && <p className="mb-16px text-14px font-medium">{article.description}</p>}
                <div className="mb-16px text-13px text-gray-500 flex flex-wrap justify-start">
                  {article.tags?.map(({ title }: Tag) => (
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
