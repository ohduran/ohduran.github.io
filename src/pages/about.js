import React from "react";
import * as defaultEssayStyles from "../styles/defaultEssay.module.css";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DefaultLayout } from "../layouts";
import { SideQuote } from "../atoms";

const About = ({ data }) => {
  return (
    <DefaultLayout title="The Writer">
      <main
        className="mt-5 md:w-9/12 mx-auto md:grid md:gap-2 md:grid-cols-2"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <aside className="md:mt-5 flex md:items-center md:justify-center">
          <figure className="hidden md:block">
            <img
              className="md:h-216 mx-auto shadow-lg border-1 md:border-2 border-nord-13 rounded-lg"
              src="./WriterPic.jpg"
              alt="Writer"
            />
            <figcaption className="mt-3 text-xs md:text-sm text-center">
              <span className="font-semibold">
                The Writer and 'La Jacqueline'
              </span>
              . Sitges, 2019.
            </figcaption>
          </figure>
        </aside>
        <div className="mt-5 flex items-center text-justify">
          <SideQuote className="self-start hidden md:block" />
          <article
            className={`md:inline md:w-11/12 mx-auto ${defaultEssayStyles.essay}`}
          >
            <figure className="block md:hidden mb-5 md:mb-0">
              <img
                className="h-72 mx-auto shadow-lg border-1 border-nord-13"
                src="./WriterPic.jpg"
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
          </article>
          <SideQuote isEnd={true} className="self-end hidden md:block" />
        </div>
      </main>
      <article
        className={` ${defaultEssayStyles.essay} mt-16 text-justify hyphens-auto md:w-6/12 mx-auto `}
      >
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
