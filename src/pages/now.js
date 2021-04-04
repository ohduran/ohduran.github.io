import React from "react";
import { graphql } from "gatsby";
import * as defaultEssayStyles from "../styles/defaultEssay.module.css";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Moment from "react-moment";
import { DefaultLayout } from "../layouts";

const Now = ({ data }) => {
  return (
    <DefaultLayout title="Now">
      <main className="container mx-auto">
        <section className="mt-10">
          <article className={`${defaultEssayStyles.essay}`}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </article>
          <footer className="text-xs mt-5">
            Last updated on:{" "}
            <Moment format="Do MMMM YYYY">{data.mdx.frontmatter.date}</Moment>
          </footer>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Now;

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
