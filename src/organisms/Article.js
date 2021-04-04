import React, { useEffect } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "../contrib";
import * as defaultEssayStyles from "../styles/defaultEssay.module.css";

const Article = ({ className, body }) => {
  useEffect(() => {
    const footNotesSection = document.getElementsByClassName("footnotes")[0];
    if (footNotesSection) {
      const footNotesOrderedList = [...footNotesSection.children[1].childNodes];
      const superscriptsOrderedList = [...document.getElementsByTagName("SUP")];

      superscriptsOrderedList.map((superscript, index) => {
        let footnote = footNotesOrderedList[index];
        if (footnote) {
          let actualFootNoteIndex = parseInt(index + 1); // start at 1 instead of 0.

          superscript.outerHTML +=
            "<div id='fn-" + // footnote redirects here.
            actualFootNoteIndex +
            "' class='sidenote' />" + // adds the sidenote class that does the CSS trick.
            "<sup>" +
            actualFootNoteIndex +
            " " +
            "</sup>" +
            footnote.outerHTML + // remove the ↩ that appears on every footnote
            "</div>";
        }
        return null;
      });

      const removeChildren = (parent) => {
        while (parent.lastChild) {
          parent.removeChild(parent.lastChild);
        }
      };
      removeChildren(footNotesSection);
      const backRefOrderedList = [
        ...document.getElementsByClassName("footnote-backref"),
      ];
      backRefOrderedList.map((item) => item.remove());
    }
  }, []);
  return (
    <article
      className={`mx-2 text-justify ${defaultEssayStyles.essay} ${
        className ? className : ""
      }`}
    >
      <MDXProvider
        components={{
          pre: CodeBlock,
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </article>
  );
};

export default Article;
