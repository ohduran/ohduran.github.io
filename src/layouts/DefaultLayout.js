import React from "react";

import { InternalLink } from "../atoms";
import { Penguin } from "../icons";
import { Footer, NavBar, SEO } from "../components";

const DefaultLayout = ({
  children,
  className,
  title,
  description,
  article,
}) => {
  return (
    <main className="pt-10 md:pt-20 pb-1 container mx-auto">
      <SEO title={title} description={description} article={article} />
      <header className="mb-10 md:mb-20 text-center container mx-auto">
        <InternalLink className="outline-none" to="/">
          <Penguin className="mx-auto w-36 md:w-48" />
          <h1 className="mx-auto text-2xl md:text-5xl">Álvaro Durán Studio</h1>
        </InternalLink>

        <h2 className="mt-3 md:mt-5 text-base md:text-2xl">
          Blurring the lines between{" "}
          <span className="text-nord-7">business strategy</span>
          <br />
          and <span className="text-nord-10">software engineering</span>.
        </h2>
        <NavBar className="mt-3 md:mt-5 " />
      </header>
      <div className={className}>{children}</div>
      <Footer />
    </main>
  );
};

export default DefaultLayout;
