import "./index.css";

import { CSSProperties, FunctionComponent, ReactNode } from "react";

interface IGradientText {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  gradientDirection?: number;
  colors?: string[];
  style?: CSSProperties;
  className?: string;
}

interface GradientCSSProperties extends CSSProperties {}

const GradientText: FunctionComponent<IGradientText> = ({
  children,
  element,
  colors = ["#eee 73%", "#333 100%"],
  gradientDirection,
  style,
  className,
}) => {
  const Tag = element || "div";
  const styleClass = `${className ? className : ""} grdient-text`;
  const gradient =
    `${gradientDirection ? gradientDirection : 70}deg,` + colors?.join(",");

  return (
    <Tag
      style={
        {
          background: `linear-gradient(${gradient})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozBackgroundClip: "text",
          MozTextFillColor: "transparent",
          msBackgroundClip: "text",
          msTextFillColor: "transparent",
          display: "inline-block",
          ...style,
        } as GradientCSSProperties
      }
      className={styleClass}
    >
      {children}
    </Tag>
  );
};

export default GradientText;
