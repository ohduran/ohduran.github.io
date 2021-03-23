import React from "react";
import { Link } from "gatsby";

const activeStyle = {
  borderBottomWidth: "1px",
  paddingBottom: "1px",
  borderColor: "#ebcb8b",
};

const FooterLink = ({ to }) => {
  return <Link to={to}>{to}</Link>;
};

const FooterLinks = [
  {
    to: "/now",
    description: "A record of what I'm up to at the moment.",
  },
  {
    to: "/attributions",
    description: "Give back to Caesar what is Caesar's.",
  },
  {
    to: "/archive",
    description: "The Entire Thing, in a single page.",
  },
  { to: "/rss.xml", description: "My open RSS reader." },
];

const Footer = ({ className }) => {
  return (
    <footer className="w-11/12 mx-auto">
      <main
        className={`w-9/12 mx-auto pt-20 mt-5 border-t border-nord-8 grid grid-cols-9 grid-rows-3 justify-items-center items-center ${className}`}
      >
        <span className="text-9xl font-family-tertiary col-start-2 col-span-2 text-nord-7">
          H
        </span>
        <span className="text-9xl font-family-tertiary col-start-4 text-nord-8">
          E
        </span>
        <span className="text-9xl font-family-quaternary transform rotate-6 col-start-6 text-nord-13">
          L
        </span>
        <span className="text-9xl text-right font-family-tertiary col-start-8 row-start-2 text-nord-9">
          L
        </span>
        <span className="text-9xl font-family-tertiary col-start-7 row-start-3 text-nord-10">
          O
        </span>
        <div className="p-2 col-start-1 col-span-4 row-start-2 row-span-2">
          <p className="text-3xl">
            Let's work{" "}
            <span className="font-family-tertiary hover:text-nord-3">
              <a
                href="mailto:alvaro.duran.barata@gmail.com"
                className="md:mr-5"
              >
                together
              </a>
            </span>
          </p>
          <p className="text-2xl text-center hover:text-nord-3"></p>
        </div>
      </main>
      <side className="flex justify-around mt-10 mb-5 w-11/12 mx-auto">
        {FooterLinks.map((item) => (
          <div>
            <Link
              className="no-underline font-family-quaternary"
              style={{
                boxShadow: "inset 0 -3px 0 #ebcb8b",
              }}
              to={item.to}
            >
              {item.to}
            </Link>
            <p className="mt-1 text-sm opacity-75 font-family-tertiary">
              {item.description}
            </p>
          </div>
        ))}
      </side>
    </footer>
  );
};

export default Footer;
