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
        transform="translate(97.85808474321627 122.5) scale(0.65)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        stroke="#2d3340"
      >
        <circle cx="8" cy="613" r="4" fill="none" strokeWidth="2"></circle>
        <circle cx="8" cy="613" r="2" fill={artColor}></circle>

        <circle cx="45" cy="137" r="22.5" fill="none" strokeWidth="1"></circle>
        <circle cx="45" cy="137" r="18" fill="none"></circle>

        <circle cx="225" cy="115" r="57.5" fill="none" strokeWidth="1"></circle>
        <circle cx="225" cy="115" r="11" fill={artColor}></circle>

        <circle cx="143" cy="233" r="71.5" fill="none" strokeWidth="1"></circle>
        <circle cx="143" cy="233" r="68" fill="none"></circle>

        <circle
          cx="472"
          cy="189"
          r="43.59452783776078"
          fill="none"
          strokeWidth="1"
        ></circle>
        <circle cx="472" cy="189" r="33" fill={artColor}></circle>

        <circle cx="77" cy="98" r="38.5" fill="none" strokeWidth="2"></circle>
        <circle cx="77" cy="98" r="35" fill="none"></circle>
        <polyline
          fill="url(#circles)"
          points="8,613 45,137 225,115 143,233 472,189 77,98"
        ></polyline>
      </g>
    </svg>
  );
};

export default System_3427227453;
