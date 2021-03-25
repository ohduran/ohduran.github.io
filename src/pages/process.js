import React from "react";
import { graphql } from "gatsby";
import "../styles/global.css";
import "../styles/pages.css";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { DefaultLayout } from "../layouts";

const Process = ({ data }) => {
  return (
    <DefaultLayout title="Process">
      <main className="container mx-auto">
        <section
          className="
        mt-10 mx-auto
        md:w-9/12
      "
        >
          <h2 className="text-lg md:text-3xl font-semibold font-family-secondary">
            How I work
          </h2>
          <article className="w-11/12 md:w-8/12 mt-5 md:mt-10 mx-auto">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </article>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Process;

export const pageQuery = graphql`
  {
    mdx(frontmatter: { title: { eq: "Process" } }) {
      body
      frontmatter {
        date
      }
    }
  }
`;