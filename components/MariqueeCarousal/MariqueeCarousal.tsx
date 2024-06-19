import React from "react";
import "./index.css";
import Image from "next/image";

interface IMarqueeCarousal {
  marqueeDirection: "vertical" | "horizontal";
  reverse?: boolean;
  list: Array<any>;
  imageWidth?: number;
  imageHeight?: number;
  duration?: number;
  imageClassName?: string;
}

interface CustomCssStyles extends React.CSSProperties {
  "--duration": string;
}

const MariqueeCarousal: React.FC<IMarqueeCarousal> = (props) => {
  const {
    marqueeDirection,
    reverse,
    list,
    imageHeight,
    imageWidth,
    duration,
    imageClassName,
  } = props;

  return (
    <>
      <div
        style={
          {
            "--duration": `${duration ? duration : 60}s`,
            zIndex: 2,
          } as CustomCssStyles
        }
        className={`marquee ${
          marqueeDirection === "vertical" ? "marquee--vertical" : ""
        } ${reverse ? "marquee--reverse" : ""}`}
      >
        <div className="marquee__group">
          {list.map((e, i) => {
            console.log(e, i);

            return (
              <Image
                className={imageClassName || ""}
                src={e.url}
                key={e.url + i}
                alt="anoadnf"
                width={imageWidth || 100}
                height={imageHeight || 100}
              />
            );
          })}
        </div>

        <div aria-hidden="true" className="marquee__group">
          {list.map((e, i) => {
            return (
              <Image
                className={imageClassName || ""}
                src={e.url}
                key={e.url + i}
                alt="anoadnf"
                width={imageWidth || 100}
                height={imageHeight || 100}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MariqueeCarousal;
