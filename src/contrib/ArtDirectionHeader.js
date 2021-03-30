import React from "react";

const ArtDirectionHeader = ({ children }) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
      </style>
      <h1
        className="text-4xl sm:text-6xl lg:text-9xl text-center"
        style={{
          fontFamily: "Train One",
        }}
      >
        {children}
      </h1>
    </>
  );
};

export default ArtDirectionHeader;
