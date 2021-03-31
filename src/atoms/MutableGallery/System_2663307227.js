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
        <circle cx="151" cy="515" r="75.5" fill="none" strokeWidth="2"></circle>
        <circle cx="151" cy="515" r="16" fill={artColor}></circle>

        <circle cx="390" cy="67" r="33.5" fill="none" strokeWidth="2"></circle>
        <circle cx="390" cy="67" r="28" fill={artColor}></circle>

        <circle
          cx="423"
          cy="324"
          r="68.09452783776078"
          fill="none"
          strokeWidth="1"
        ></circle>
        <circle cx="423" cy="324" r="13" fill={artColor}></circle>

        <circle
          cx="536"
          cy="439"
          r="11.59452783776078"
          fill="none"
          strokeWidth="1"
        ></circle>
        <circle cx="536" cy="439" r="5" fill="none"></circle>

        <circle cx="80" cy="597" r="40" fill="none" strokeWidth="2"></circle>
        <circle cx="80" cy="597" r="34" fill={artColor}></circle>

        <circle
          cx="375"
          cy="392"
          r="92.09452783776078"
          fill="none"
          strokeWidth="2"
        ></circle>
        <circle cx="375" cy="392" r="63" fill={artColor}></circle>

        <circle cx="291" cy="56" r="28" fill="none" strokeWidth="1"></circle>
        <circle cx="291" cy="56" r="11" fill="none"></circle>

        <circle cx="74" cy="564" r="37" fill="none" strokeWidth="1"></circle>
        <circle cx="74" cy="564" r="10" fill="none"></circle>
        <polyline
          fill="url(#circles)"
          points="151,515 390,67 423,324 536,439 80,597 375,392 291,56 74,564"
        ></polyline>
      </g>
    </svg>
  );
};

export default System_3427227453;
