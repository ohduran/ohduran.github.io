import React from "react"

const PageTitle = ({ title }) => {
  return (
    <h1 className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 mb-3 sm:mb-4 md:mb-5 lg:mb-8 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-family-clearface-bold">
      {title}
    </h1>
  )
}

export default PageTitle
