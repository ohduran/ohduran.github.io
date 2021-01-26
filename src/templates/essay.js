import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

import { DefaultLayout } from "../layouts";
import "../styles/pages.css";

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        summary
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <DefaultLayout>
      <header>
        <h1
          className="
          font-clearface-bold font-semibold
          text-5xl
          ml-3 mt-5
          "
        >
          {frontmatter.title}
        </h1>
        <p className="mt-1 ml-3 italic">{frontmatter.summary}</p>
        <hr className="mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
      </header>
      <article className="mt-5">
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </DefaultLayout>
  );
};
