import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { useEffect } from "react";
import { DefaultLayout } from "../layouts";

import "../styles/tschischold.css";

export const query = graphql`
  query tschicholdQuotePostByID($id: String!) {
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
  const { frontmatter, body } = data.mdx;
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

    // Side Notes
    const footNotesSection = document.getElementsByClassName("footnotes")[0];
    if (footNotesSection) {
      const footNotesOrderedList = [...footNotesSection.children[1].childNodes];
      const superscriptsOrderedList = [...document.getElementsByTagName("SUP")];

      superscriptsOrderedList.map((superscript, index) => {
        let footnote = footNotesOrderedList[index];
        let actualFootNoteIndex = parseInt(index + 1); // start at 1 instead of 0.

        superscript.outerHTML +=
          "<div id='fn-" + // footnote redirects here.
          actualFootNoteIndex +
          "' class='sidenote' />" + // adds the sidenote class that does the CSS trick.
          "<sup>" +
          actualFootNoteIndex +
          " " +
          "</sup>" +
          footnote.innerText.slice(0, -1) + // remove the ↩ that appears on every footnote
          "</div>";

        return null;
      });
      footNotesSection.parentElement.removeChild(footNotesSection);
    }
    // End Side Notes
  }, []); // eslint-disable-line

  return (
    <DefaultLayout
      title={frontmatter.title}
      description={frontmatter.summary}
      article={true}
      className="bg-nord-4 pt-48 shadow-2xl rounded-lg border-8 border-nord-1"
    >
      <div
        className="grid-wrapper max-w-xl grid m-auto text-nord-0 font-family-tertiary gap-1 grid-cols-6 lg:grid-cols-8  md:transform md:-rotate-45 md:w-auto lg:w-screen"
        style={{
          maxHeight: "45rem",
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
        <b
          class="red-bar-1 block w-full h-full bg-nord-11 col-start-1 row-start-3 row-span-4"
          style={{
            minWidth: "3em",
          }}
        />
        <b class="red-bar-2 block w-full h-2 bg-nord-11 self-end z-0 col-start-1 lg:col-start-3 col-span-8 lg:col-span-6 row-start-7 lg:row-start-6" />
        <b class="red-circle block rounded-full bg-nord-11 col-start-4 col-span-3 row-start-1 row-span-3 self-center z-0 w-40 h-40 lg:w-52 lg:h-52" />
      </div>
      <div className="mt-5 md:mt-48 md:ml-10 md:w-5/12">
        <div id="comments">
          <div ref={commentBox} className="comments" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TschischoldQuote;

// max-width: 35em;
//   max-height: 45em;
//   width: 50vw;
//   display: grid;
//   margin: auto;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-gap: 1em;
//   transform: rotate(-45deg);
