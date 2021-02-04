import React from "react";
import { Link } from "gatsby";

const NavBar = ({ className }) => {
  return (
    <nav
      className={`
        mt-2 md:mt-5 mx-auto grid grid-cols-2 gap-4 py-2 md:py-4
        divide-x-2 divide-double divide-nord-8
        text-center text-sm md:text-xl uppercase
        ${className}
    `}
    >
      <Link className="hover:text-nord-10" to="/about">
        The Writer
      </Link>
      <Link className="hover:text-nord-10" to="/essays">
        Essays
      </Link>
    </nav>
  );
};

export default NavBar;
