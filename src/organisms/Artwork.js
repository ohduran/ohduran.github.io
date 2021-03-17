import React from "react";
import { Frame, Painting } from "../molecules";

const ArtWork = ({ to, title, subtitle, wordCount, date }) => {
  return (
    <Frame
      to={to}
      title={title}
      subtitle={subtitle}
      wordCount={wordCount}
      date={date}
    >
      <Painting
        className="rounded-3xl p-1"
        canvasColor="#eceff4"
        artColor="#2e3440"
      />
    </Frame>
  );
};

export default ArtWork;
