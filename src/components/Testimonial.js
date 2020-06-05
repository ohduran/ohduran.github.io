import React from "react"
import "../global.css"

const Testimonial = ({ className, author, children }) => {
  return (
    <div className={className}>
      <blockquote
        className="blockquote pl-5 mx-8 text-sm"
        style={{
          borderLeft: "4px solid #ebcb8b",
        }}
      >
        <div className="text-sm sm:text-base">{children}</div>
        <footer className="mt-1 lg:mt-2">
          <small className="text-nord-9 text-xs sm:text-sm">{author}</small>
        </footer>
      </blockquote>
    </div>
  )
}

export default Testimonial
