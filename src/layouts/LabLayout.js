import React from "react";

import { InternalLink } from "../atoms";
import { Lab, Penguin } from "../icons";
import { Footer, SEO } from "../organisms";

const LabLayout = ({
  children,
  background,
  textColor,
  title,
  description,
  article,
  className,
}) => {
  return (
    <div
      className="antialiased font-primary leading-tight bg-nord-6"
      style={{
        background: `${background ? background : ""}`,
        color: `${textColor ? textColor : ""}`,
      }}
    >
      <SEO title={title} description={description} article={article} />
      <header className="bg-nord-1 text-nord-6 pb-8">
        <div className="container mx-auto px-6 border-b-2 border-nord-3">
          <div className="flex flex-wrap justify-between items-center pt-4 pb-2">
            <div className="text-xl sm:text-2xl font-family-secondary font-semibold flex items-center">
              <InternalLink
                to="/labs"
                className="bg-nord-4 rounded-full border-4 border-nord-6 hover:border-nord-13 hover:border-8"
              >
                <Lab className="h-12 w-12" />
              </InternalLink>
              <InternalLink
                to="/labs"
                className="ml-4 font-semibold  hover:text-nord-13"
                activeStyle={{}}
              >
                Álvaro Durán Labs
              </InternalLink>
            </div>
            <InternalLink
              to="/"
              className="bg-nord-2 rounded-full border-4 border-nord-1 opacity-50 hover:opacity-100"
            >
              <Penguin className="h-10 w-10" />
            </InternalLink>
          </div>
        </div>
        {article ? (
          <div className="container mx-auto px-6 py-2 mt-2">
            <div className="bg-nord-6 rounded-lg shadow-sm p-6 flex max-w-xl min-h-full">
              <div className="mx-auto">
                <h1 className="text-3xl text-nord-0 font-semibold font-family-secondary">
                  {title}
                </h1>
                <div
                  className="text-nord-3 mt-2"
                  style={{
                    maxWidth: "50ch",
                  }}
                >
                  {description}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
      <main className={`${article ? "" : "bg-nord-1"} ${className}`}>
        {children}
      </main>
      <Footer className="bg-nord-1 border-none" />
    </div>
  );
};

export default LabLayout;
