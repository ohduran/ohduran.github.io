import React from "react"

import { Link } from "gatsby"

const HeaderLink = ({ className, text, to, imgSrc }) => {
  return (
    <Link className={`${className ? className : ""} no-underline`} to={to}>
      <figure className="py-1 sm:pt-2 px-2 sm:px-3 m-1">
        <img className="h-6 sm:h-8" src={imgSrc} alt={`Link to ${text}`} />
        <figcaption className="my-1 text-center text-xs">{text}</figcaption>
      </figure>
    </Link>
  )
}

export default HeaderLink
