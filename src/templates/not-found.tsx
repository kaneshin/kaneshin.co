import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";

const NotFoundPage: React.FC<PageProps> = props => {
  return (
    <Layout location={props.location}>
      <SEO title="記事が見つかりませんでした。" description="記事が見つかりませんでした。" />

      <div className="mx-auto px-20px md:px-32px max-w-screen-md">
        <div className="pt-60px pb-40px md:h-400px flex items-center">
          <div className="mx-auto text-center">
            <p className="mb-16px text-24px md:text-32px font-semibold">404 Not Found</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
