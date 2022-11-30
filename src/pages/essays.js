import * as React from "react";
import { graphql } from "gatsby";

import { DefaultLayout } from "../layouts";

const Essays = ({ data }) => {
  return (
    <>
      <main className="px-2 pt-2 min-h-screen bg-nord-6">
        <header>
          <h1 className="text-xs text-center font-family-tertiary font-semibold">ÁD Studio</h1>
        </header>
        <article className="w-11/12 mx-auto">
          <ul className="mt-5">
            {data.allMdx.nodes.map(({frontmatter: {title, summary}}) => (
              <li className="my-2 cursor-pointer outline-none">
                <div className="px-3 pt-3 pb-5 max-w-xl rounded-md shadow-sm hover:shadow-md transition-transform bg-nord-10 hover:bg-gradient-to-r hover:from-nord-9 hover:via-nord-7 hover:to-nord-8">
                  <h1 className="font-family-secondary text-xl font-semibold text-nord-6">{title}</h1>
                  <h2 className="font-family-tertiary text-lg font-light text-nord-4">{summary}</h2>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
};

export default Essays;

{/* <DefaultLayout title="Essays">
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
    </DefaultLayout> */}

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
