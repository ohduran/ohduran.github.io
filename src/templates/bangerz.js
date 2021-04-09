import { graphql } from "gatsby";
import React from "react";
import { InternalLink } from "../atoms";
import { Penguin } from "../icons";
import { Footer, NavBar, SEO } from "../organisms";
import { Article, CommentBox } from "../organisms";

import * as bangerzStyles from "../styles/bangerz.module.css";

import goldCoast from "../../static/gold-coast-daniel-sturgess.jpg";

export const query = graphql`
  query BangerzSites($id: String!) {
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

const BangerzSitesEssay = ({ data }) => {
  const {
    frontmatter: { title, summary },
    body,
  } = data.mdx;

  return (
    <main
      className="text-nord-6 font-family-primary;"
      style={{
        background: "linear-gradient(#e8bda4, #3a44a2)",
      }}
    >
      <div className="container mx-auto">
        <SEO title={title} description={summary} article={true} />
        <header className="pt-5 flex items-center">
          <InternalLink className="justify-self-start outline-none" to="/">
            <Penguin
              className="mx-auto h-auto w-10 md:w-16"
              primaryColor="#3a44a2"
              secondaryColor="#88c0d0"
              tertiaryColor="#5e81ac"
            />
          </InternalLink>
          <NavBar className="justify-self-end mt-3 md:mt-5 text-purple-800" />
        </header>
        <div className="container mx-auto mt-8">
          <header
            className="w-9/12 h-9/12 mx-auto grid"
            style={{
              gridTemplateRows: "max-content 1fr max-content",
              background: "linear-gradient(#e8bda4, #3a44a2)",
            }}
          >
            <h1 className="row-start-1 col-start-1 z-10 flex justify-around text-2xl text-yellow-400 font-secondary">
              <span>Á</span>
              <span>L</span>
              <span>V</span>
              <span>A</span>
              <span>R</span>
              <span>O</span>
            </h1>
            <h1 className="row-start-3 col-start-1 z-10 flex justify-around text-2xl text-blue-500 font-secondary">
              <span>D</span>
              <span>U</span>
              <span>R</span>
              <span>Á</span>
              <span>N</span>
            </h1>
            <img
              className="h-144 w-full row-start-1 row-span-3 col-start-1 z-0 object-cover object-center opacity-90 rounded-lg shadow-3xl"
              src={goldCoast}
            />
            <h1
              className={`text-10xl transform -rotate-30 text-pink-600 font-black col-start-1 row-start-2 self-center justify-self-center z-10 ${bangerzStyles.neon}`}
              style={{
                fontFamily: "Hastron",
              }}
            >
              {title}
            </h1>
          </header>
          <Article className="mt-5 md:mt-20" body={body} />
          <p className="pt-5 text-xs md:text-sm font-light text-nord-13">
            Photograph by{" "}
            <a id="special-link" href="https://unsplash.com/@daniel_sturgess">
              Daniel Sturgess
            </a>
            .
          </p>
          <CommentBox theme="github-dark-orange" />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default BangerzSitesEssay;
