import React from "react";
import { Link } from "gatsby";
import Moment from "react-moment";

import { MutableGallery } from "../atoms";

const ArtWork = ({
  className,
  canvasColor,
  artColor,
  title,
  subtitle,
  wordCount,
  to,
  date,
}) => {
  const gallery = Object.keys(MutableGallery);

  const Painting =
    MutableGallery[gallery[(gallery.length * Math.random()) << 0]];
  return (
    <Link to={to} className={`flex justify-between ${className}`}>
      <figure className="flex items-center w-full md:w-10/12">
        <Painting
          className="rounded-2xl p-1"
          canvasColor={canvasColor}
          artColor={artColor}
        />
        <figcaption className="ml-1 md:ml-5 w-10/12">
          <main id="special-link" className="text-lg md:text-3xl">
            {title}
          </main>
          <side className="overflow-clip opacity-90 text-xs md:text-base">
            {subtitle}
            <br className="block md:hidden" /> ({wordCount} words)
          </side>
        </figcaption>
      </figure>
      <side>
        <Moment className="text-xs md:text-sm" format="ddd, Do MMM YYYY">
          {date}
        </Moment>
      </side>
    </Link>
  );
};

export default ArtWork;

// <div className="items-center">
//                       <Link id="special-link" to={slug}>
//                         <h1 className="text-3xl md:text-4xl">
//                           {frontmatter.title}
//                         </h1>
//                       </Link>
//                       <article className="mt-3 text-sm md:text-base">
//                         {frontmatter.summary}
//                         <br className="block md:hidden" /> ({wordCount.words}{" "}
//                         words)
//                       </article>
//                     </div>
