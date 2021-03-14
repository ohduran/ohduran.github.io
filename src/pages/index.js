import React from "react";
import { graphql } from "gatsby";
import "../styles/pages.css";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Moment from "react-moment";
import { DefaultLayout } from "../layouts";

const Home = ({ data }) => {
  return (
    <DefaultLayout title="Home">
      <main className="container mx-auto">
        <section
          className="
        mt-10 mx-auto
        md:w-9/12
      "
        >
          <h2 className="text-lg md:text-3xl">Now</h2>
          <h6 className="text-xs md:text-sm mt-0 md:mt-1">
            (This is{" "}
            <a
              className="text-nord-8 hover:text-nord-10"
              href="https://nownownow.com/about"
            >
              a now page
            </a>
            , and if you have your own site,{" "}
            <a
              className="text-nord-8 hover:text-nord-10"
              href="https://nownownow.com/about"
            >
              you should make one
            </a>
            , too.)
          </h6>
          <br className="my-0 md:my-2" />
          <article className="w-11/12 mx-auto">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </article>
          <footer className="text-xs mt-5">
            Last updated on:{" "}
            <Moment format="Do MMMM YYYY">{data.mdx.frontmatter.date}</Moment>
          </footer>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Home;

export const pageQuery = graphql`
  {
    mdx(frontmatter: { title: { eq: "Now" } }) {
      body
      frontmatter {
        date
      }
    }
  }
`;
