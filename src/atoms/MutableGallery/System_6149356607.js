import React from "react";

const System_6149356607 = ({ className, canvasColor, artColor }) => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        stroke="#2d3340"
      >
        <circle
          cx="477"
          cy="514"
          r="41.09452783776078"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="477" cy="514" r="11" fill={artColor}></circle>

        <circle cx="45" cy="244" r="22.5" fill="none" stroke-width="2"></circle>
        <circle cx="45" cy="244" r="7" fill="none"></circle>

        <circle
          cx="372"
          cy="179"
          r="89.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="372" cy="179" r="84" fill="none"></circle>

        <circle
          cx="504"
          cy="418"
          r="27.59452783776078"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="504" cy="418" r="19" fill={artColor}></circle>

        <circle
          cx="429"
          cy="119"
          r="59.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="429" cy="119" r="31" fill={artColor}></circle>

        <circle
          cx="397"
          cy="180"
          r="81.09452783776078"
          fill="none"
          stroke-width="2"
        ></circle>
        <circle cx="397" cy="180" r="73" fill="none"></circle>

        <circle
          cx="509"
          cy="309"
          r="25.09452783776078"
          fill="none"
          stroke-width="2"
        ></circle>
        <circle cx="509" cy="309" r="6" fill="none"></circle>

        <circle
          cx="229"
          cy="109"
          r="54.5"
          fill="none"
          stroke-width="2"
        ></circle>
        <circle cx="229" cy="109" r="15" fill={artColor}></circle>
        <polyline
          fill="url(#circles)"
          points="477,514 45,244 372,179 504,418 429,119 397,180 509,309 229,109"
        ></polyline>
      </g>
    </svg>
  );
};

export default System_6149356607;
