import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { useEffect } from "react";
import { handleFootNotes } from "../functions";

import { DefaultLayout } from "../layouts";
import "../styles/pages.css";

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        summary
        date(formatString: "YYYY MMMM Do")
      }
      wordCount {
        words
      }
    }
  }
`;

const DefaultEssay = ({ data }) => {
  const { frontmatter, body, wordCount } = data.mdx;
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement("script");
    const theme = "github-dark-orange";
    commentScript.async = true;
    commentScript.src = "https://utteranc.es/client.js";
    commentScript.setAttribute("repo", "ohduran/comments"); // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
    commentScript.setAttribute("issue-term", "pathname");
    commentScript.setAttribute("id", "utterances");
    commentScript.setAttribute("theme", theme);
    commentScript.setAttribute("crossorigin", "anonymous");
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }

    handleFootNotes();
  }, []); // eslint-disable-line

  return (
    <DefaultLayout
      title={frontmatter.title}
      description={frontmatter.summary}
      article={true}
    >
      <header>
        <h1
          className="font-bold font-family-secondary
          text-3xl md:text-5xl
          ml-3
          "
        >
          {frontmatter.title}
        </h1>
        <p className="mt-2 ml-3 italic text-sm md:text-base">
          {frontmatter.summary}
          <br className="block md:hidden" /> ({wordCount.words} words)
        </p>
        <hr className="mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
      </header>
      <article className="mt-5 md:mt-20 md:ml-10 md:w-5/12 text-justify hyphens-auto">
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <div className="mt-5 md:mt-20 md:ml-10 md:w-5/12">
        <div id="comments">
          <div ref={commentBox} className="comments" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DefaultEssay;
