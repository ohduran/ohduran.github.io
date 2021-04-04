import React from "react";

const ArtDirectionHeader = ({ children }) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
      </style>
      <h1
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-right md:text-center mr-2"
        style={{
          fontFamily: "Train One, cursive",
        }}
      >
        {children}
      </h1>
    </>
  );
};

export default ArtDirectionHeader;
