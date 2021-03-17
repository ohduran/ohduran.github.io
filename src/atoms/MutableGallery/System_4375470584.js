import React from "react";

const System_4375470584 = ({ className, canvasColor, artColor }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      class="artwork"
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        stroke={artColor}
      >
        <circle cx="317" cy="636" r="32" fill="none" stroke-width="1"></circle>
        <circle cx="317" cy="636" r="29" fill={artColor}></circle>

        <circle
          cx="125"
          cy="413"
          r="62.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="125" cy="413" r="18" fill="none"></circle>

        <circle
          cx="463"
          cy="317"
          r="118.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="463" cy="317" r="116" fill="none"></circle>

        <circle cx="225" cy="47" r="23.5" fill="none" stroke-width="1"></circle>
        <circle cx="225" cy="47" r="6" fill="none"></circle>

        <circle
          cx="213"
          cy="195"
          r="97.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="213" cy="195" r="92" fill="none"></circle>

        <circle
          cx="524"
          cy="557"
          r="71.5"
          fill="none"
          stroke-width="2"
        ></circle>
        <circle cx="524" cy="557" r="35" fill="none"></circle>

        <circle
          cx="539"
          cy="262"
          r="80.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="539" cy="262" r="63" fill={artColor}></circle>
        <polyline
          fill="url(#circles)"
          points="317,636 125,413 463,317 225,47 213,195 524,557 539,262"
        ></polyline>
      </g>
    </svg>
  );
};

export default System_4375470584;
