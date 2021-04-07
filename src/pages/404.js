import React from "react";
import { Link } from "gatsby";

import { SEO } from "../organisms";

const errorMessages = [
  "1080P_MULTI_BYTE_ONLINE_RSS",
  "1080P_REDUNDANT_MOBILE_XSS",
  "SOLID_STATE_PRIMARY_REDUNDANT_COM",
  "BLUETOOTH_DIGITAL_XML",
];

const NotFound = () => {
  let errorMessage = errorMessages[(errorMessages.length * Math.random()) << 0];

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
