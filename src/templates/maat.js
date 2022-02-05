import { graphql } from "gatsby";
import React from "react";

import { ReligiousLayout } from "../layouts";
import { Article, CommentBox } from "../organisms";

export const query = graphql`
  query maat($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        summary
        background
      }
      wordCount {
        words
      }
    }
  }
`;

const DefaultEssay = ({ data }) => {
  const {
    frontmatter: { title, summary, background },
    body,
    wordCount,
  } = data.mdx;

  return (
    <ReligiousLayout title={title} description={summary} article={true}>
      <Article className="mt-5 md:mt-20" body={body} />
    </ReligiousLayout>
  );
};

export default DefaultEssay;
