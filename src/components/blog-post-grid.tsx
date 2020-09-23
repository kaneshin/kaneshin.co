import React from "react";
import { PageRendererProps, Link } from "gatsby";
import Img from "gatsby-image";
import { Node } from "../models";
import { Article, Tag } from "../models/article";

interface BlogPostGridProps {
  articles: Node<Article>[];
}

const BlogPostGrid: React.FC<PageRendererProps & BlogPostGridProps> = props => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20px">
    {props.articles.map(({ node }: Node<Article>) => (
      <div
        className="col-span-1 shadow-md overflow-hidden hover:shadow-lg transition ease-in-out duration-500"
        key={node.slug}
      >
        <Link to={`/blog/${node.slug}`}>
          <div>
            {node.featuredImage && (
              <Img className="mb-16px w-full h-160px md:h-180px" alt={node.title} fluid={node.featuredImage.fluid} />
            )}

            <div className="px-16px">
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

export default BlogPostGrid;
