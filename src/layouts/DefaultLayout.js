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
  backgroundColor,
  textColor,
}) => {
  return (
    <main
      className=""
      style={{
        backgroundColor: `${backgroundColor ? backgroundColor : ""}`,
        color: `${textColor ? textColor : ""}`,
      }}
    >
      <div className="container mx-auto">
        <SEO title={title} description={description} article={article} />
        <header className="mb-10 md:mb-20 text-center container mx-auto">
          <InternalLink className="outline-none" to="/">
            <Penguin className="mx-auto w-36 md:w-48" />
            <h1 className="mx-auto text-2xl md:text-5xl">ÁD Studio</h1>
          </InternalLink>
          <h2 className="mt-3 md:mt-5 text-base md:text-2xl">
            Blurring the lines between{" "}
            <span className={backgroundColor || textColor ? "" : "text-nord-7"}>
              business strategy
            </span>
            <br />
            and{" "}
            <span
              className={backgroundColor || textColor ? "" : "text-nord-10"}
            >
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
