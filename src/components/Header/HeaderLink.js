import React from "react"

import { Link } from "gatsby"

const HeaderLink = ({ className, text, to, imgSrc }) => {
  return (
    <Link className={`${className ? className : ""} no-underline`} to={to}>
      <figure className="py-1 lg:py-2 sm:pt-2 lg:pt-3 px-2 sm:px-3 lg:px-4 m-1">
        <img
          className="h-8 lg:h-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          src={imgSrc}
          alt={`Link to ${text}`}
        />
        <figcaption className="mb-1 -mt-3 text-center text-xs lg:text-base transform hover:text-nord-13 hover:scale-110">
          {text}
        </figcaption>
      </figure>
    </Link>
  )
}

export default HeaderLink
