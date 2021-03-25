import React, { useEffect } from "react";
import faker from "faker";
import { Link } from "gatsby";

import { SEO } from "../components";

const errorMessageArray = [
  "CLOCK_WATCHDOG_TIMEOUT",
  "HAIL_INITIALIZATION_FAILED",
];

const NotFound = ({ data }) => {
  let errorMessage = `${faker.hacker
    .adjective()
    .toUpperCase()
    .replace("-", "_")}_${faker.hacker
    .adjective()
    .toUpperCase()
    .replace("-", "_")}_${faker.hacker
    .adjective()
    .toUpperCase()
    .replace("-", "_")}_${faker.hacker.abbreviation()}`;

  return (
    <div className="bg-nord-10 text-nord-4 w-screen h-screen m-auto flex justify-center items-center">
      <SEO title="404" description="Not Found" article={false} />
      <main className="ml-5 md:ml-0 md:w-6/12 grid gap-2 md:gap-4 grid-cols-3 grid-rows-6">
        <div className="text-7xl md:text-9xl col-start-1 col-span-2 row-start-1 row-span-2 self-center md:self-end">
          ( ._.)
        </div>
        <h1 className="col-start-1 col-span-3 row-start-3 font-family-secondary text-base md:text-3xl font-normal">
          Your curiosity ran into a problem that this site couldn't handle.
        </h1>
        <div className="col-start-1 col-span-3 row-start-4 text-sm md:text-base">
          <p>Good luck searching for it online.</p>
          <p>
            Error code:{" "}
            <span className="text-nord-7 font-bold">{errorMessage}</span>
          </p>
        </div>
        <p className="row-start-6 col-span-2 text-xs md:text-sm font-family-tertiary justify-self-center self-end">
          Go back to{" "}
          <Link to="/" className="hover:text-nord-15">
            alvaroduran.com
          </Link>
        </p>
      </main>
    </div>
  );
};

export default NotFound;
