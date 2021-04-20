import * as React from "react";
import { graphql } from "gatsby";

import { DefaultLayout } from "../layouts";
import { ArtWork } from "../organisms";

const Essays = ({ data }) => {
  return (
    <DefaultLayout title="Essays">
      <main className="mt-6 md:mt-12">
        <ul>
          {data.allMdx.nodes.map(({ frontmatter, slug, wordCount }) => (
            <li className="mt-5">
              <ArtWork
                to={slug}
                title={frontmatter.title}
                subtitle={frontmatter.summary}
                wordCount={wordCount.words}
                date={frontmatter.date}
              />
            </li>
          ))}
        </ul>
      </main>
    </DefaultLayout>
  );
};

export default Essays;

export const query = graphql`
  query ESSAYS_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, seriesName: { eq: null } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        slug
        frontmatter {
          title
          date
          summary
        }
        wordCount {
          words
        }
      }
    }
  }
`;
