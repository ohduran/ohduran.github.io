import React from "react";
import { graphql } from "gatsby";
import "../styles/pages.css";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Moment from "react-moment";

import { NavBar } from "../components";

const Home = ({ data }) => {
  return (
    <main className="pt-20 pb-5 container mx-auto">
      <section className="text-center container mx-auto">
        <img className="mx-auto w-48" src="/BeagleOutline.png" alt="Beagle" />
        <h1 className="mx-auto mt-10 text-5xl">Álvaro Durán Studio</h1>
        <p className="mt-5">
          The primary source for my writing.
          <br />
          For inquiries please contact{" "}
          <a
            id="special-link"
            className="font-semibold"
            href="mailto:alvaro.duran.barata@gmail.com"
          >
            alvaro.duran.barata@gmail.com
          </a>
          .
        </p>
      </section>
      <NavBar className="border-t border-b border-nord-8" />
      <section
        className="
        mt-5 mx-auto
        pb-1
        border-b border-nord-8
      "
      >
        <h2 className="text-3xl">Now</h2>
        <h6 className="text-xs">
          (This is{" "}
          <a
            className="text-nord-8 hover:text-nord-10"
            href="https://nownownow.com/about"
          >
            a now page
          </a>
          , and if you have your own site,{" "}
          <a
            className="text-nord-8 hover:text-nord-10"
            href="https://nownownow.com/about"
          >
            you should make one
          </a>
          , too.)
        </h6>
        <br className="my-2" />
        <article className="w-11/12 mx-auto text-lg">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
        <footer className="text-xs mt-5">
          Last updated on:{" "}
          <Moment format="Do MMMM YYYY">{data.mdx.frontmatter.date}</Moment>
        </footer>
      </section>
    </main>
  );
};

export default Home;

export const pageQuery = graphql`
  {
    mdx(frontmatter: { title: { eq: "Now" } }) {
      body
      frontmatter {
        date
      }
    }
  }
`;
