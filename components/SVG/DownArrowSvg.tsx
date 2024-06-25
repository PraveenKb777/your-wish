import { FC } from "react";

const DownArrow: FC = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    color="rgb(255, 255, 255)"
    style={{
      userSelect: "none",
      width: "100%",
      height: "100%",
      display: "inline-block",
      fill: "rgb(255, 255, 255)",
      color: "rgb(255, 255, 255)",
      flexShrink: 0,
    }}
    {...props}
  >
    <g color="rgb(255, 255, 255)">
      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
    </g>
  </svg>
);

export default DownArrow;
