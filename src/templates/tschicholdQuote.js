import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { DefaultLayout } from "../layouts";
import { CommentBox } from "../organisms";

export const query = graphql`
  query tschicholdQuotePostByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        summary
      }
    }
  }
`;

const TschischoldQuote = ({ data }) => {
  require("../styles/tschischold.css");
  const {
    frontmatter: { title, summary },
    body,
  } = data.mdx;

  return (
    <DefaultLayout title={title} description={summary} article={true}>
      <main className="bg-nord-4 px-5 py-10 sm:py-32 md:py-48 shadow-2xl rounded-lg border-8 border-nord-1">
        <div
          className="tschischold-grid-container max-w-xl grid m-auto text-nord-0 font-family-tertiary gap-1 grid-cols-6 lg:grid-cols-8  md:transform md:-rotate-45 md:w-auto lg:w-screen"
          style={{
            maxHeight: "45rem",
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
          <b
            class="red-bar-1 block w-full h-full bg-nord-11 col-start-1 row-start-3 row-span-4"
            style={{
              minWidth: "3em",
            }}
          />
          <b class="red-bar-2 block w-full h-2 bg-nord-11 self-end z-0 col-start-1 lg:col-start-3 col-span-8 lg:col-span-6 row-start-7 lg:row-start-6" />
          <b class="red-circle block rounded-full bg-nord-11 col-start-4 col-span-3 row-start-1 row-span-3 self-center z-0 w-40 h-40 lg:w-52 lg:h-52" />
        </div>
      </main>
      <CommentBox theme="github-dark-orange" />
    </DefaultLayout>
  );
};

export default TschischoldQuote;
