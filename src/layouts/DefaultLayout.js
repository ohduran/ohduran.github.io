import React from "react";

import { Link } from "gatsby";
import { Penguin } from "../icons";
import { NavBar, SEO } from "../components";

const DefaultLayout = ({ children, title, description, article }) => {
  return (
    <div className="pt-10 md:pt-20 pb-5 mb-5 container mx-auto border-b border-nord-8">
      <SEO title={title} description={description} article={article} />
      <header className="mb-10 md:mb-20 text-center container mx-auto">
        <Link to="/">
          <Penguin className="mx-auto w-36 md:w-48" />
          <h1 className="mx-auto text-2xl md:text-5xl">Álvaro Durán Studio</h1>
        </Link>

        <h2 className="mt-3 md:mt-5 text-base md:text-2xl">
          Blurring the lines between{" "}
          <span className="text-nord-7">business strategy</span>
          <br />
          and <span className="text-nord-10">software engineering</span>.
        </h2>
        <NavBar className="mt-3 md:mt-5 " />
      </header>
      {children}
    </div>
  );
};

export default DefaultLayout;
