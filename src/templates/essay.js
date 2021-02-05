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
      wordCount {
        words
      }
    }
  }
`;

export default ({ data }) => {
  const { frontmatter, body, wordCount } = data.mdx;
  return (
    <DefaultLayout
      title={frontmatter.title}
      description={frontmatter.summary}
      article={true}
    >
      <header>
        <h1
          className="
          font-clearface-bold font-semibold
          text-3xl md:text-5xl
          ml-3 mt-5
          "
        >
          {frontmatter.title}
        </h1>
        <p className="mt-1 ml-3 italic text-sm md:text-base">
          {frontmatter.summary}
          <br className="block md:hidden" /> ({wordCount.words} words)
        </p>
        <hr className="mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
      </header>
      <article className="mt-5 md:mt-20 md:ml-10 md:w-8/12 text-justify">
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </DefaultLayout>
  );
};
