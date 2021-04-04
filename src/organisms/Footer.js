import React from "react";
import { InternalLink } from "../atoms";

const FooterLinks = [
  {
    to: "/now",
    description: "What I'm up to",
  },
  {
    to: "/process",
    description: "How I work",
  },
  {
    to: "/archive",
    description: "All the words together",
  },
  {
    to: "/credit",
    description: "To Caesar what is Caesar's",
  },
  { to: "/rss.xml", description: "My open RSS reader" },
];

const Footer = ({ className }) => {
  return (
    <footer className={`sm:w-11/12 mt-5 mx-auto ${className ? className : ""}`}>
      <main
        className={`md:w-10/12 mx-auto pt-10 md:pt-20 mt-5 border-t border-nord-8 grid grid-cols-9 grid-rows-3 justify-items-center items-center text-5xl md:text-9xl ${className}`}
      >
        <span className="font-family-secondary col-start-2 col-span-2 text-nord-7">
          H
        </span>
        <span className="font-family-secondary col-start-4 text-nord-8">E</span>
        <span className="font-family-tertiary transform rotate-6 col-start-6 text-nord-13">
          L
        </span>
        <span className="text-right font-family-secondary col-start-8 row-start-2 text-nord-9">
          L
        </span>
        <span className="font-family-secondary col-start-7 row-start-3 text-nord-10">
          O
        </span>
        <div className="p-2 col-start-1 col-span-5 md:col-span-4 row-start-2 row-span-2">
          <p className="text-lg md:text-3xl text-nord-4">
            Let's work{" "}
            <span className="font-family-secondary font-semibold hover:text-nord-6">
              <a
                href="mailto:alvaro.duran.barata@gmail.com"
                className="md:mr-5"
              >
                together
              </a>
            </span>
          </p>
        </div>
      </main>
      <aside className="text-nord-6 text-center md:text-left text-sm md:text-base grid grid-cols-5 gap-2 mt-10 pb-5 md:w-11/12 mx-auto">
        {FooterLinks.map((item) => (
          <div className="" key={item.to}>
            {item.to[0] === "/" ? (
              <InternalLink
                className="no-underline font-family-tertiary text-base md:text-lg hover:text-nord-13"
                style={{
                  boxShadow: "inset 0 -3px 0 #ebcb8b",
                }}
                to={item.to}
              >
                {item.to}
              </InternalLink>
            ) : (
              <a
                href={item.to}
                target="_blank"
                rel="noreferrer"
                className="no-underline font-family-tertiary"
                style={{
                  boxShadow: "inset 0 -3px 0 #ebcb8b",
                }}
              >
                <span>/</span>
                {item.name}
              </a>
            )}
            <p className="mt-1 text-xs md:text-sm opacity-75 font-family-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </aside>
    </footer>
  );
};

export default Footer;
