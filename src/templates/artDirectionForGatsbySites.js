import { graphql } from "gatsby";
import React from "react";
import { ArtDirectionHeader } from "../contrib";

import { DefaultLayout } from "../layouts";
import { Article, CommentBox, DefaultEssayHeader } from "../organisms";

export const query = graphql`
  query artDirectionForGatsbySites($id: String!) {
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

const ArtDirectionForGatsbySitesEssay = ({ data }) => {
  const {
    frontmatter: { title, summary, background },
    body,
    wordCount,
  } = data.mdx;

  return (
    <DefaultLayout
      title={title}
      description={summary}
      article={true}
      background={background}
    >
      <ArtDirectionHeader>{title}</ArtDirectionHeader>
      <Article className="mt-5 md:mt-20" body={body} />
      <CommentBox theme="github-dark-orange" />
    </DefaultLayout>
  );
};

export default ArtDirectionForGatsbySitesEssay;
