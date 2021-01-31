import * as React from "react";
import { graphql, Link } from "gatsby";
import Moment from "react-moment";

import { DefaultLayout } from "../layouts";

const Essays = ({ data }) => {
  return (
    <DefaultLayout>
      <main className="mt-12">
        {data.allMdx.nodes.map(({ frontmatter, slug }) => (
          <>
            <div className="mt-5 flex justify-between">
              <Link id="special-link" to={slug}>
                <h1 className="text-4xl">{frontmatter.title}</h1>
              </Link>
              <Moment className="text-sm" format="Do MMMM YYYY">
                {frontmatter.date}
              </Moment>
            </div>
            <article className="mt-2">{frontmatter.summary}</article>
          </>
        ))}
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
      }
    }
  }
`;
