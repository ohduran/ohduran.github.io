import React from "react";
import { Link } from "gatsby";
import Moment from "react-moment";

const Frame = ({
  className,
  title,
  subtitle,
  wordCount,
  to,
  date,
  children,
}) => {
  return (
    <Link to={to} className={`flex justify-between ${className}`}>
      <figure className="flex items-center w-full md:w-10/12">
        {children}
        <figcaption className="ml-1 md:ml-5 w-10/12">
          <main
            id="special-link"
            className="pl-1 md:pl-2 rounded-md text-lg md:text-3xl"
          >
            {title}
          </main>
          <side className="overflow-clip opacity-90 text-xs md:text-base">
            {subtitle}
            <br className="block md:hidden" />{" "}
            <span className="opacity-80">({wordCount} words)</span>
          </side>
        </figcaption>
      </figure>
      <side>
        <Moment
          className="text-xs md:text-sm opacity-80"
          format="ddd, Do MMM YYYY"
        >
          {date}
        </Moment>
      </side>
    </Link>
  );
};

export default Frame;