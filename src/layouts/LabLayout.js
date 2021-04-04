import React from "react";

import { InternalLink } from "../atoms";
import { IceBreaker } from "../icons";
import { Footer, NavBar, SEO } from "../organisms";

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
    <main
      className=""
      style={{
        background: `${background ? background : ""}`,
        color: `${textColor ? textColor : ""}`,
      }}
    >
      <div className="container mx-auto">
        <SEO title={title} description={description} article={article} />
        <header className="flex justify-center">
          <h1>ÁD Labs</h1>
        </header>
        <div className={className}>{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default LabLayout;
