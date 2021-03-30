import { graphql } from "gatsby";
import React from "react";

import { DefaultLayout } from "../layouts";
import { Article, CommentBox, DefaultEssayHeader } from "../organisms";

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        summary
      }
      wordCount {
        words
      }
    }
  }
`;

const DefaultEssay = ({ data }) => {
  const {
    frontmatter: { title, summary },
    body,
    wordCount,
  } = data.mdx;

  return (
    <DefaultLayout title={title} description={summary} article={true}>
      <DefaultEssayHeader
        title={title}
        summary={summary}
        wordCount={wordCount.words}
      />
      <Article className="mt-5 md:mt-20" body={body} />
      <CommentBox theme="github-dark-orange" />
    </DefaultLayout>
  );
};

export default DefaultEssay;
