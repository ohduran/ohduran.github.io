import React, { useEffect } from "react";

const CommentBox = ({ theme, className }) => {
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement("script");
    commentScript.async = true;
    commentScript.src = "https://utteranc.es/client.js";
    commentScript.setAttribute("repo", "ohduran/comments"); // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
    commentScript.setAttribute("issue-term", "pathname");
    commentScript.setAttribute("id", "utterances");
    commentScript.setAttribute("theme", theme ? theme : "boxy-light");
    commentScript.setAttribute("crossorigin", "anonymous");
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []); // eslint-disable-line

  return (
    <div
      className={`mt-5 md:mt-20 md:ml-10 md:w-5/12 ${
        className ? className : ""
      }`}
    >
      <div id="comments">
        <div ref={commentBox} className="comments" />
      </div>
    </div>
  );
};

export default CommentBox;
