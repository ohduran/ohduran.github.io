import { graphql } from "gatsby";
import React, { useEffect } from "react";
import { DefaultLayout } from "../layouts";

import "../styles/tschischold.css";

export const query = graphql`
  query stackedBarIconsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        summary
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

const TschischoldQuote = ({ data }) => {
  const { frontmatter } = data.mdx;
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement("script");
    const theme = "boxy-light";
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
  }, []); // eslint-disable-line

  return (
    <DefaultLayout
      title={frontmatter.title}
      description={frontmatter.summary}
      article={true}
    >
      <main className="bg-gray-900 px-2 py-20 sm:py-32 md:py-48 shadow-2xl rounded-lg border-8 border-nord-1">
        <div
          className="grid h-48 sm:h-52 md:h-64 lg:h-96 w-full mx-auto"
          style={{
            gridTemplateRows: "repeat(8, minmax(min-content, 1fr))",
            gridTemplateCols: "repeat(24, minmax(0, 1fr))",
          }}
        >
          <b className="bg-purple-700 col-start-7 col-span-10 row-start-1 z-0" />
          <b
            id="opacity-purple"
            className="bg-purple-900 col-start-17 row-start-1 z-0"
          />
          <b className="bg-red-700 col-start-2 col-span-12 row-start-2 z-0" />
          <b
            id="opacity-green"
            className="bg-green-600 col-start-11 row-start-3 z-0"
          />
          <b className="bg-green-400 col-start-12 col-span-8 row-start-3 z-0" />
          <b className="bg-yellow-200 col-start-8 col-span-9 row-start-4 z-0" />
          <b className="bg-teal-500 col-start-1 col-span-8 row-start-5 z-0" />
          <b
            id="opacity-teal-dark"
            className="bg-teal-700 col-start-9 row-start-5 z-0"
          />
          <b className="bg-orange-400 col-start-15 col-span-4 row-start-5 z-0" />
          <b
            id="opacity-orange"
            className="bg-orange-600 col-start-19 row-start-5 z-0"
          />
          <b className="bg-pink-500 col-start-5 col-span-13 row-start-6 z-0" />
          <b
            id="opacity-teal-light"
            className="bg-teal-500 col-start-13 row-start-7 z-0"
          />
          <b className="bg-teal-300 col-start-14 col-span-10 row-start-7 z-0" />

          <b className="bg-orange-800 col-start-8 col-span-11 row-start-16 z-0" />
          <span className="bg-gray-900 text-white text-xl lg:text-5xl font-family-tertiary row-start-5 row-span-2 col-start-15 col-span-3 z-10 self-center justify-self-center py-1 px-2">
            Álvaro Durán
          </span>
          <span className="bg-gray-900 text-teal-300 text-sm lg:text-xl font-family-secondary font-bold row-start-7 col-start-16 col-span-3 z-10 self-center justify-self-center px-5">
            In the Studio
          </span>
        </div>
      </main>
      <side className="mt-5 md:ml-10 md:w-5/12">
        <div id="comments">
          <div ref={commentBox} className="comments" />
        </div>
      </side>
    </DefaultLayout>
  );
};

export default TschischoldQuote;
