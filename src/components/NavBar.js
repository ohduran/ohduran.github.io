import React from "react";
import { Link } from "gatsby";

const NavBar = ({ className }) => {
  return (
    <nav
      className={`
        mt-5 mx-auto grid grid-cols-3 gap-4 py-4
        divide-x-2 divide-double divide-nord-8
        text-center text-xl uppercase
        ${className}
    `}
    >
      <Link to="/about">The Writer</Link>
      <Link to="/essays">Essays</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};

export default NavBar;
