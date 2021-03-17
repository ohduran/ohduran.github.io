import React from "react";

const System_3820827458 = ({ className, canvasColor, artColor }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
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
        <circle
          cx="526"
          cy="113"
          r="56.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="526" cy="113" r="24" fill="none"></circle>

        <circle cx="400" cy="87" r="43.5" fill="none" stroke-width="1"></circle>
        <circle cx="400" cy="87" r="22" fill="none"></circle>

        <circle cx="612" cy="468" r="44" fill="none" stroke-width="2"></circle>
        <circle cx="612" cy="468" r="22" fill={artColor}></circle>

        <circle
          cx="295"
          cy="177"
          r="88.5"
          fill="none"
          stroke-width="2"
        ></circle>
        <circle cx="295" cy="177" r="61" fill="none"></circle>

        <circle cx="43" cy="485" r="21.5" fill="none" stroke-width="1"></circle>
        <circle cx="43" cy="485" r="7" fill={artColor}></circle>

        <circle cx="172" cy="564" r="68" fill="none" stroke-width="2"></circle>
        <circle cx="172" cy="564" r="10" fill="none"></circle>

        <circle
          cx="254"
          cy="253"
          r="126.5"
          fill="none"
          stroke-width="1"
        ></circle>
        <circle cx="254" cy="253" r="71" fill="none"></circle>
        <polyline
          fill="url(#circles)"
          points="526,113 400,87 612,468 295,177 43,485 172,564 254,253"
        ></polyline>
      </g>
    </svg>
  );
};

export default System_3820827458;
