import React from "react";
import { Link } from "gatsby";

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
    to: "/resources",
    description: "Advice for the beginners",
  },
  {
    to: "/faq",
    description: "Questions that crop up",
  },
  {
    to: "/favourites",
    description: "My favourite stuff",
  },
  {
    to: "https://foundations.alvaroduran.com",
    description: "The bedrock of my thinking",
    name: "foundations",
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
    <footer className="w-11/12 mx-auto">
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
            <span className="font-family-secondary font-semibold hover:text-nord-3">
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
      <side className="text-nord-4 text-center md:text-left text-sm md:text-base grid grid-cols-3 gap-4 justify-around mt-10 mb-5 w-11/12 mx-auto">
        {FooterLinks.map((item) => (
          <div>
            {item.to[0] == "/" ? (
              <Link
                className="no-underline font-family-tertiary"
                style={{
                  boxShadow: "inset 0 -3px 0 #ebcb8b",
                }}
                to={item.to}
              >
                {item.to}
              </Link>
            ) : (
              <a
                href={item.to}
                target="_blank"
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
      </side>
    </footer>
  );
};

export default Footer;
