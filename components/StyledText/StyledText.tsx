import { CSSProperties, FunctionComponent, ReactNode } from "react";

interface IStyledText {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  fontSize?: string;
  marginTop?: string;
  style?: CSSProperties;
  className?: string;
}

const StyledText: FunctionComponent<IStyledText> = ({
  children,
  fontSize,
  marginTop,
  style,
  className = "",
  element,
  ...props
}) => {
  const Tag = element || "p";
  return (
    <div
      className={className}
      style={{
        fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
        fontSize: `${fontSize}`,
        marginTop: `${marginTop}`,
        lineHeight: "1.8em",
        textAlign: "left",
        color: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default StyledText;
