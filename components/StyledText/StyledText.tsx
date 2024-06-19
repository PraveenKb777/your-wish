import { CSSProperties, FunctionComponent, ReactNode } from "react";

interface IStyledText {
  children: ReactNode;
  fontSize?: string;
  marginTop?: string;
  style?: CSSProperties;
}

const StyledText: FunctionComponent<IStyledText> = ({ children, fontSize, marginTop,  style, ...props }) => {
  return (
    <div
      style={{
        fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
        fontSize: `${fontSize}`,
        marginTop: `${marginTop}`,
        lineHeight: "1.8em",
        textAlign: "left",
        color: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default StyledText;