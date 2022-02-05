import React from "react";

import { InternalLink } from "../atoms";
import { Footer, NavBar, SEO, CommentBox } from "../organisms";

const ReligiousLayout = ({
  children,
  className,
  title,
  description,
  article,
  background,
  textColor,
}) => {
  return (
    <main
      className="text-nord-0 bg-nord-13 font-family-primary;"
    >
      <div className={`container mx-auto`}>
        <SEO title={title} description={description} article={article} />
        <header className="pt-2 flex content-center items-center">
          <InternalLink className="outline-none" to="/">
            <h1 className={`text-3xl md:text-5xl font-family-hieroglyphs text-nord-0`}>
            𓂀
            </h1>
          </InternalLink>
          <h2 className="mt-3 md:mt-5 ml-5 text-xl md:text-2xl font-extrabold font-family-secondary">
            ÁD Studio
          </h2>
          <NavBar className="mt-3 md:mt-5 " />
        </header>
        <div className="container mx-auto mt-4 md:mt-8">
          <header className="font-family-hieroglyphs grid grid-cols-3 mt-3 md:mt-12 justify-center content-center items-center"
            style={{
              gridTemplateColumns: "auto 1fr auto",
            }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Maat_mirror.svg" />
          <div className="text-center justify-self-stretch">
            <span className="tracking-widest md:text-5xl">𓀀𓁐𓏥𓃀𓈖𓌱𓅓𓎛𓅱𓀔𓈖𓌱𓅓𓎛𓇋𓇋𓏏𓁐𓐍𓂋𓋴</span>
            <h1 className="md:text-8xl font-bold mt-2 mb-5">
              {title}
            </h1>
            <span className="tracking-widest text-3xl md:text-4xl">𓏥𓃀𓈖𓌱𓅓𓎛𓅱𓀔𓈖𓌱𓅓𓎛𓇋𓇋𓏏𓁐𓐍𓂋𓋴𓂝</span>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Maat.svg" />
          </header>
        </div>
        <div className={`mx-auto md:w-7/12 ${className}`}>{children}</div>
        <CommentBox theme="boxy-light" />
        <Footer darkBackground={false} />
      </div>
    </main>
  );
};

export default ReligiousLayout;
