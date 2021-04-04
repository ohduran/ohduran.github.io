import React from "react";

const DefaultEssayHeader = ({
  title,
  summary,
  wordCount,
  headerClassName,
  titleClassName,
  children,
}) => (
  <header className={headerClassName ? headerClassName : ""}>
    {children ? (
      children
    ) : (
      <>
        <h1
          className={`font-bold font-family-secondary
          text-3xl md:text-5xl
          ${titleClassName}
          `}
        >
          {title}
        </h1>
        <p className="mt-2 ml-3 italic text-sm md:text-base">
          {summary}
          <br className="block md:hidden" /> ({wordCount} words)
        </p>
        <hr className="mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
      </>
    )}
  </header>
);

export default DefaultEssayHeader;
