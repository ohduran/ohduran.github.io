import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DefaultLayout } from "../layouts";
import { InternalLink } from "../atoms";

const Archive = ({ data }) => {
  let totalWordCount = 0;
  for (let item of data.allMdx.nodes) {
    totalWordCount = parseInt(totalWordCount + item.wordCount.words);
  }
  return (
    <DefaultLayout title="Archive">
      <main className="mt-6 md:mt-12">
        <div className="text-center  font-normal">
          <h1 className="text-5xl">Archive</h1>
          <h2 className="mt-3 text-lg">
            <span>{totalWordCount}</span> words and counting
          </h2>
        </div>
        <ul>
          {data.allMdx.nodes.map(({ frontmatter, slug, body }) => (
            <li className="my-5">
              <header>
                <InternalLink to={`../essays/${slug}`}>
                  <h1 className="font-bold font-family-secondary text-xl md:text-3xl ml-3">
                    {frontmatter.title}
                  </h1>
                </InternalLink>
                <hr className="mt-1 h-0.5 w-11/12 bg-nord-8" />
              </header>
              <article className="mt-5 md:mb-16 md:mt-20 md:ml-10 md:w-5/12 text-justify hyphens-auto">
                <MDXRenderer>{body}</MDXRenderer>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </DefaultLayout>
  );
};

export default Archive;

export const query = graphql`
  query ARCHIVE_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
        }
        body
        wordCount {
          words
        }
      }
    }
  }
`;
