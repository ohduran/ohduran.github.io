import React from "react"

const PageTitle = ({ title }) => {
  return (
    <h1 className="mt-1 md:mt-3 mb-3 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-family-baloo">
      {title}
    </h1>
  )
}

export default PageTitle
