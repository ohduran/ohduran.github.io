import React from "react";
import { InternalLink } from "../atoms";
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
    <InternalLink
      to={to}
      className={`flex justify-between items-center ${className}`}
    >
      <figure className="flex items-center w-full">
        {children}
        <figcaption className="ml-1 md:ml-5 w-10/12">
          <main
            id="special-link"
            className="pl-1 md:pl-2 rounded-md text-lg md:text-3xl"
          >
            {title}
          </main>
          <aside className="overflow-clip opacity-90 text-xs md:text-base">
            {subtitle}
          </aside>
        </figcaption>
      </figure>
      <aside className="text-xs md:text-sm opacity-80">
        {/* <Moment format="ddd, Do MMM YYYY">{date}</Moment>
        <p className="text-right">{wordCount} words</p> */}
      </aside>
    </InternalLink>
  );
};

export default Frame;
