import React from "react";

import { Link } from "gatsby";
import { NavBar } from "../components";

const DefaultLayout = ({ children }) => {
  return (
    <div className="pt-10 md:pt-20 pb-5 container mx-auto">
      <header>
        <Link to="/">
          <h1 className="mx-auto mt-5 md:mt-10 text-3xl md:text-6xl text-center">
            Álvaro Durán Studio
          </h1>
        </Link>
        <NavBar />
      </header>
      {children}
    </div>
  );
};

export default DefaultLayout;
