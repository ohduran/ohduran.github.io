import React from "react";

import { InternalLink } from "../atoms";
import { Penguin } from "../icons";
import { Footer, NavBar, SEO } from "../organisms";

const DefaultLayout = ({
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
      className="endless-constellation text-nord-6 font-family-primary;"
      style={{
        background: `${background ? background : ""}`,
        color: `${textColor ? textColor : ""}`,
      }}
    >
      <div className="container mx-auto">
        <SEO title={title} description={description} article={article} />
        <header className="pt-5 md:pt-20 mb-10 md:mb-20 text-center container mx-auto">
          <InternalLink className="outline-none" to="/">
            <Penguin className="mx-auto h-auto w-20 md:w-48" />
            <h1 className="mt-5 md:mt-10 mx-auto text-3xl md:text-5xl">
              ÁD Studio
            </h1>
          </InternalLink>
          <h2 className="mt-3 md:mt-5 text-sm md:text-2xl w-11/12 mx-auto">
            Blurring the lines between{" "}
            <span className={background || textColor ? "" : "text-nord-7"}>
              business strategy
            </span>
            <br />
            and{" "}
            <span className={background || textColor ? "" : "text-nord-10"}>
              software engineering
            </span>
            .
          </h2>
          <NavBar className="mt-3 md:mt-5 " />
        </header>
        <div className={className}>{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default DefaultLayout;
