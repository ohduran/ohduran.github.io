import React from "react";
import { Link } from "gatsby";
import { RSS, Mail } from "../icons";

const activeStyle = {
  borderBottomWidth: "1px",
  paddingBottom: "1px",
  borderColor: "#ebcb8b",
};

const NavBarLink = ({ className, children, to, activeStyle }) => (
  <Link
    to={to}
    activeStyle={activeStyle}
    className="transition duration-500 ease-in-out transform hover:text-nord-13"
  >
    {children}
  </Link>
);

const NavBar = ({ className }) => {
  return (
    <nav
      className={`mt-3 mx-auto md:w-5/12 flex justify-around uppercase font-semibold font-family-popping text-xl
    ${className}`}
    >
      <NavBarLink
        className="hover:text-nord-13 "
        to="/about"
        activeStyle={activeStyle}
      >
        The Writer
      </NavBarLink>
      <NavBarLink className="" to="/essays" activeStyle={activeStyle}>
        Essays
      </NavBarLink>

      <div className="flex justify-around md:justify-end items-end">
        <a href="mailto:alvaro.duran.barata@gmail.com" className="md:mr-5">
          <Mail className="h-6 md:h-8 text-nord-6" />
        </a>
        <Link to="/rss.xml">
          <RSS className="h-6 md:h-8 text-nord-6" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

// nav
//   position: relative
//   padding-bottom: 12px
//   .line
//     height: 2px
//     position: absolute
//     bottom: 0
//     margin: 10px 0 0 0
//     background: #FF1847
//   ul
//     padding: 0
//     margin: 0
//     list-style: none
//     display: flex
//     li
//       margin: 0 40px 0 0
//       opacity: .4
//       transition: all 0.4s ease
//       &:hover
//         opacity: .7
//       &.active
//         opacity: 1
//       &:last-child
//         margin-right: 0
//       a
//         text-decoration: none
//         color: #fff
//         text-transform: uppercase
//         display: block
//         font-weight: 600
//         letter-spacing: .2em
//         font-size: 14px
