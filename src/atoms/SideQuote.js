import React from "react";

const SideQuote = ({ className, isEnd }) => (
  <div
    className={`font-family-secondary text-9xl ${
      isEnd ? "transform rotate-180" : ""
    } ${className}`}
  >
    "
  </div>
);

export default SideQuote;
