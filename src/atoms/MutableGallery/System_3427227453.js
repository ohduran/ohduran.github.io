import React from "react";

const System_3427227453 = ({ className, canvasColor, artColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 700 700"
      width="100"
      height="100"
    >
      <defs>
        <pattern
          id="circles"
          patternUnits="userSpaceOnUse"
          width="4"
          height="4"
        >
          <circle fill={artColor} cx="1" cy="1" r="0.5"></circle>
        </pattern>
      </defs>
      <rect x="0" y="0" width="700" height="700" fill={canvasColor} />
      <g
        transform="translate(52.5 52.5) scale(0.85)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        stroke={artColor}
      >
        <circle cx="366" cy="58" r="29" fill="none" strokeWidth="1"></circle>
        <circle cx="366" cy="58" r="21" fill="none"></circle>

        <circle cx="188" cy="109" r="54.5" fill="none" strokeWidth="2"></circle>
        <circle cx="188" cy="109" r="2" fill="none"></circle>

        <circle cx="505" cy="270" r="97.5" fill="none" strokeWidth="1"></circle>
        <circle cx="505" cy="270" r="58" fill="none"></circle>

        <circle cx="133" cy="599" r="50.5" fill="none" strokeWidth="1"></circle>
        <circle cx="133" cy="599" r="3" fill="none"></circle>

        <circle cx="358" cy="320" r="160" fill="none" strokeWidth="2"></circle>
        <circle cx="358" cy="320" r="159" fill="none"></circle>

        <circle cx="272" cy="51" r="25.5" fill="none" strokeWidth="1"></circle>
        <circle cx="272" cy="51" r="2" fill={canvasColor}></circle>
        <polyline
          fill="url(#circles)"
          points="366,58 188,109 505,270 133,599 358,320 272,51"
        ></polyline>
      </g>
    </svg>
  );
};

export default System_3427227453;
