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
      className="bg-nord-4 pt-48"
    >
      <div
        className="grid-wrapper max-w-xl grid m-auto grid-cols-7 md:grid-cols-8 grid-rows-6 gap-1 transform md:-rotate-45 text-nord-0 font-family-tertiary"
        style={{
          maxHeight: "40rem",
          width: "50vw",
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
        <b class="red-bar-1 block min-w-min w-full h-full bg-nord-11 col-start-1 row-start-3 row-span-4"></b>
        <b class="red-bar-2 block w-full h-2 bg-nord-11 col-start-1 md:col-start-3 col-span-8 md:col-span-6 row-start-7 md:row-start-6 self-end z-0"></b>
        <b
          class="red-circle block w-52 red-circle rounded-full bg-nord-11 col-start-4 col-span-3 row-start-1 row-span-3 self-center z-0"
          style={{
            height: "13rem",
          }}
        ></b>
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
