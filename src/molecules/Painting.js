import React from "react";

import { MutableGallery } from "../atoms";

const gallery = Object.keys(MutableGallery);
const galleryLength = gallery.length;

const Painting = ({ className, canvasColor, artColor }) => {
  const RandomlyChosenPainting =
    MutableGallery[gallery[(galleryLength * Math.random()) << 0]];
  return (
    <RandomlyChosenPainting
      className={className}
      artColor={artColor}
      canvasColor={canvasColor}
    />
  );
};

export default Painting;
