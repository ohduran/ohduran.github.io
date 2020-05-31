import React from "react"

const PageSubTitle = ({ subtitle, className }) => {
  return (
    <h2
      className={`text-lg xs:text-xl sm:text-2xl ${className ? className : ""}`}
    >
      {subtitle}
    </h2>
  )
}

export default PageSubTitle
