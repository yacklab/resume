import React from "react";

interface FlagProps {
  active?: boolean;
  height?: number;
}
const svgStyle: React.CSSProperties = {
  cursor: "pointer",
  transition: "fill 600ms ease"
};

export const FrenchFlag: React.FunctionComponent<FlagProps> = ({
  active = false,
  height = 12
}) => {
  return (
    <svg
      style={svgStyle}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-fr"
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill={active ? "#00267f" : "#555"} d="M0 0h213.3v480H0z" />
        <path fill={active ? "#f31830" : "#ccc"} d="M426.7 0H640v480H426.7z" />
      </g>
    </svg>
  );
};

export const EnglishFlag: React.FunctionComponent<FlagProps> = ({
  active = false,
  height = 12
}) => {
  return (
    <svg
      style={svgStyle}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-gb"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="a">
          <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(80) scale(.94)">
        <g strokeWidth="1pt">
          <path fill={active ? "#012169" : "#555"} d="M-256 0H768v512H-256z" />
          <path
            fill="#fff"
            d="M-256 0v57.2L653.5 512H768v-57.2L-141.5 0H-256zM768 0v57.2L-141.5 512H-256v-57.2L653.5 0H768z"
          />
          <path
            fill="#fff"
            d="M170.7 0v512h170.6V0H170.7zM-256 170.7v170.6H768V170.7H-256z"
          />
          <path
            fill={active ? "#c8102e" : "#555"}
            d="M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.3 341.3h76.4L-179.7 512H-256zm0-512L85.3 170.7H9L-256 38.2V0zm606.4 170.7L691.7 0H768L426.7 170.7h-76.3zM768 512L426.7 341.3H503l265 132.5V512z"
          />
        </g>
      </g>
    </svg>
  );
};
