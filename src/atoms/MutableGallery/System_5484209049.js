import React from "react";

const System_5484209049 = ({ className, canvasColor, artColor }) => {
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
        transform="translate(87.71967154979907 109.8086049103398) scale(0.6862611288276006)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        stroke={artColor}
      >
        <circle cx="237" cy="566" r="67" fill="none" strokeWidth="2"></circle>
        <circle cx="237" cy="566" r="48" fill={artColor}></circle>

        <circle
          cx="492"
          cy="145"
          r="33.59452783776078"
          fill="none"
          strokeWidth="1"
        ></circle>
        <circle cx="492" cy="145" r="17" fill="none"></circle>

        <circle cx="386" cy="69" r="34.5" fill="none" strokeWidth="1"></circle>
        <circle cx="386" cy="69" r="27" fill="none"></circle>

        <circle cx="266" cy="137" r="68.5" fill="none" strokeWidth="1"></circle>
        <circle cx="266" cy="137" r="23" fill={artColor}></circle>

        <circle cx="328" cy="654" r="23" fill="none" strokeWidth="2"></circle>
        <circle cx="328" cy="654" r="0" fill={artColor}></circle>

        <circle cx="230" cy="164" r="82" fill="none" strokeWidth="2"></circle>
        <circle cx="230" cy="164" r="19" fill={artColor}></circle>

        <circle cx="41" cy="64" r="20.5" fill="none" strokeWidth="1"></circle>
        <circle cx="41" cy="64" r="17" fill={artColor}></circle>
        <polyline
          fill="url(#circles)"
          points="237,566 492,145 386,69 266,137 328,654 230,164 41,64"
        ></polyline>
      </g>
    </svg>
  );
};

export default System_5484209049;
