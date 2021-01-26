import * as React from "react";
import { graphql, Link } from "gatsby";
import Moment from "react-moment";

import { DefaultLayout } from "../layouts";

const Essays = ({ data }) => {
  return (
    <DefaultLayout>
      <header className="row-start-1 col-span-2">
        <h1
          className="
          font-clearface-bold font-semibold
          text-xl text-center
          uppercase
          "
        >
          Essays
        </h1>
        <hr className="mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
      </header>

      <main className="mt-5">
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
            <article className="mt-2 ">{frontmatter.summary}</article>
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
