import React from "react";
import { Link } from "gatsby";
import { RSS, Mail } from "../icons";

const NavBar = ({ className }) => {
  return (
    <nav
      className={`
        mt-2 md:mt-5 mx-auto grid grid-cols-3 gap-4 py-2 md:py-4
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
      <div className="flex justify-around md:justify-end align-middle">
        <a href="mailto:alvaro.duran.barata@gmail.com" className="md:mr-5">
          <Mail className="h-5 md:h-8 text-nord-3" />
        </a>
        <Link to="/rss.xml">
          <RSS className="h-5 md:h-8 text-nord-3" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
