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
      }
      wordCount {
        words
      }
    }
  }
`;

const ArtDirectionForGatsbySitesEssay = ({ data }) => {
  const {
    frontmatter: { title, summary },
    body,
    wordCount,
  } = data.mdx;

  return (
    <DefaultLayout
      title={title}
      description={summary}
      article={true}
      backgroundColor="#663399"
    >
      <DefaultEssayHeader
        title={title}
        summary={summary}
        wordCount={wordCount.words}
      >
        <ArtDirectionHeader>{title}</ArtDirectionHeader>
      </DefaultEssayHeader>
      <Article className="mt-5 md:mt-20 md:ml-10" body={body} />
      <CommentBox theme="github-dark-orange" />
    </DefaultLayout>
  );
};

export default ArtDirectionForGatsbySitesEssay;
