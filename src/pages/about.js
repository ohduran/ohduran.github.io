import React from "react";
import "../styles/pages.css";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DefaultLayout } from "../layouts";

const About = ({ data }) => {
  return (
    <DefaultLayout title="The Writer">
      <main
        className="mt-5 mx-auto md:grid md:gap-1 md:gap-2 md:grid-cols-2"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <header className="row-start-1 col-span-2">
          <h1
            className="
          font-clearface-bold font-semibold
          text-lg md:text-xl text-center
          uppercase
          "
          >
            The Writer
          </h1>
          <hr className="mt-1 md:mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
        </header>
        <side className="hidden md:block md:mt-5 flex md:items-center md:justify-center">
          <figure>
            <img
              className="md:h-216 mx-auto shadow-lg border-1 md:border-4 border-nord-9"
              src="./WriterPic.png"
              alt="Writer"
            />
            <figcaption className="mt-3 text-xs md:text-sm text-center">
              <span className="font-semibold">
                The Writer and 'La Jacqueline'
              </span>
              . Sitges, 2019.
            </figcaption>
          </figure>
        </side>
        <div className="mt-5 flex items-center text-justify">
          <article className="md:inline md:w-11/12 mx-auto">
            <figure className="block md:hidden mb-5 md:mb-0">
              <img
                className="h-72 mx-auto shadow-lg border-1 border-nord-9"
                src="./WriterPic.png"
                alt="Writer"
              />
              <figcaption className="mt-3 text-xs text-center">
                <span className="font-semibold">
                  The Writer and 'La Jacqueline'
                </span>
                . Sitges, 2019.
              </figcaption>
            </figure>
            <MDXRenderer>{data.allMdx.edges[1].node.body}</MDXRenderer>
            <h2 className="mt-10 text-right mr-5">Á.</h2>
          </article>
        </div>
      </main>
      <article className="mt-16 text-justify md:w-9/12 mx-auto">
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
