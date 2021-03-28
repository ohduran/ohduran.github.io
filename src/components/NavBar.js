import React from "react";
import { Link } from "gatsby";
import { InternalLink } from "../molecules";
import { RSS, Mail, LocationMarker } from "../icons";

const NavBar = ({ className }) => {
  return (
    <nav
      className={`mt-3 mx-auto md:w-7/12 lg:w-5/12 flex justify-around uppercase font-semibold font-family-popping text-xl
    ${className}`}
    >
      <InternalLink
        className="text-base md:text-lg hover:text-nord-13"
        to="/about"
      >
        The Writer
      </InternalLink>
      <InternalLink
        className="text-base md:text-lg hover:text-nord-13"
        to="/essays"
      >
        Essays
      </InternalLink>

      <div className="flex justify-around md:justify-end items-start">
        <InternalLink
          to="/now"
          className="md:mr-5 text-base md:text-lg hover:text-nord-13"
          activeStyle={{
            borderColor: "#ebcb8b",
          }}
        >
          <LocationMarker className="h-6 md:h-8 text-nord-6 outline-none transition duration-500 ease-in-out transform hover:text-nord-13" />
        </InternalLink>
        <a href="mailto:alvaro.duran.barata@gmail.com" className="md:mr-5">
          <Mail className="h-6 md:h-8 text-nord-6 outline-none transition duration-500 ease-in-out transform hover:text-nord-13" />
        </a>
        <Link to="/rss.xml">
          <RSS className="h-6 md:h-8 text-nord-6 outline-none transition duration-500 ease-in-out transform hover:text-nord-13" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
