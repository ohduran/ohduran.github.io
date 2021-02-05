import * as React from "react";
import { graphql, Link } from "gatsby";
import Moment from "react-moment";

import { DefaultLayout } from "../layouts";

const Essays = ({ data }) => {
  return (
    <DefaultLayout title="Essays">
      <main className="mt-6 md:mt-12">
        <ul>
          {data.allMdx.nodes.map(({ frontmatter, slug, wordCount }) => (
            <li>
              <div className="mt-5 flex justify-between items-end md:items-start">
                <Link id="special-link" to={slug}>
                  <h1 className="text-3xl md:text-4xl">{frontmatter.title}</h1>
                </Link>
                <Moment className="text-xs md:text-sm" format="MMMM YYYY">
                  {frontmatter.date}
                </Moment>
              </div>
              <article className="mt-3 text-sm md:text-base">
                {frontmatter.summary}
                <br className="block md:hidden" /> ({wordCount.words} words)
              </article>
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
      filter: { frontmatter: { published: { eq: true } } }
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
