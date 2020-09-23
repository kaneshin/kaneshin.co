import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/base/layout";
import SEO from "../components/base/seo";

const IndexPage: React.FC<PageProps> = props => {
  return (
    <Layout location={props.location}>
      <SEO />

      <section className="x-layout max-w-screen-lg">
        <div className="py-40px md:flex md:justify-between">
          <div className="mb-16px md:mb-0px md:mr-24px md:flex">
            <img
              className="mx-auto mb-16px md:ml-0px md:mr-24px h-80px w-80px md:h-96px md:w-96px rounded-full"
              src="/img/kaneshin.jpg"
            />
            <div className="text-center md:text-left">
              <h2 className="text-20px">Shintaro Kaneko</h2>
              <p className="mb-8px">Tokyo, Japan</p>
              <p className="font-light">Hi, this is kaneshin. Building things with Go.</p>
              <p className="font-light">
                Experiences: Go / C / JavaScript / TypeScript / Swift / Engineering Management / Mathematics
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="x-layout max-w-screen-lg">
        <h2 className="text-32px md:text-40px font-semibold">Blog</h2>
      </section>
    </Layout>
  );
};

export default IndexPage;
