import React from "react";
import "../styles/pages.css";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DefaultLayout } from "../layouts";

const About = ({ data }) => {
  return (
    <DefaultLayout>
      <main
        className="mt-5 mx-auto grid gap-2 grid-cols-2"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <header className="row-start-1 col-span-2">
          <h1
            className="
          font-clearface-bold font-semibold
          text-xl text-center
          uppercase
          "
          >
            The Writer
          </h1>
          <hr className="mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
        </header>
        <side>
          <figure>
            <img
              className="h-216 mx-auto shadow-lg border-4 border-nord-9"
              src="./WriterPic.png"
              alt="Writer"
            />
          </figure>
          <figcaption className="mt-3 text-xs text-center">
            <span className="font-semibold">The Writer and Jacquie</span>.
            Sitges, 2019.
          </figcaption>
        </side>
        <article>
          <MDXRenderer>{data.allMdx.edges[1].node.body}</MDXRenderer>
        </article>
      </main>
      <article>
        <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
      </article>
    </DefaultLayout>
  );
};

export default About;

export const pageQuery = graphql`
  {
    allMdx(
      filter: { frontmatter: { title: { in: ["About", "Bio"] } } }
      sort: { fields: frontmatter___title, order: DESC }
    ) {
      edges {
        node {
          body
        }
      }
    }
  }
`;
