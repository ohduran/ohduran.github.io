import React from "react";
import "../styles/pages.css";

import { DefaultLayout } from "../layouts";

const NotFound = ({ data }) => {
  return (
    <DefaultLayout title="Not Found">
      <h1 className="mt-5 md:mt-10 text-xl md:text-3xl text-center">
        The page that you requested was not found!
      </h1>
      <h2 className="mt-1 text-sm md:text-base text-center">
        Here's a picture from{" "}
        <a id="special-link" href="https://absurd.design">
          Absurd Design
        </a>
        .
      </h2>
      <figure className="mt-5">
        <img
          className="w-11/12 md:w-8/12 lg:w-5/12 mx-auto"
          src="/NotFound.png"
          alt="Not Found"
        />
      </figure>
    </DefaultLayout>
  );
};

export default NotFound;
