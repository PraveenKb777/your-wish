/* eslint-disable react/no-unescaped-entities */
export const runtime = "edge";
import GradientText from "../GradientText/GradientText";
import "../../app/globals.css";
import StyledText from "../StyledText/StyledText";
import Button from "../Button/Button";
import Link from "next/link";
import ParticalsEffects from "../Particals/Particals";

export default function Error404() {
  const ANIMATION_DURATION = 500;
  return (
    <>
      <div className="main-container">
        <div className="warningIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
              fill: "rgb(255, 255, 255)",
              color: "rgb(255, 255, 255)",
              flexShrink: 0,
            }}
          >
            <g color="rgb(255, 255, 255)">
              <path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path>
            </g>
            <g color="rgb(255, 255, 255)">
              <path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path>
            </g>
          </svg>
        </div>
        <h3 className="GreenText">ERROR 404 - PAGE NOT FOUND</h3>

        <GradientText
          element="h1"
          className="text-4xl font-medium"
          style={{
            animation: `comeFromBottom ${ANIMATION_DURATION}ms`,
            opacity: 1,
            animationFillMode: "forwards",
            animationDelay: "0s",
            fontSize: "45px",
            lineHeight: "3.5rem",
          }}
        >
          Hey there, Sherlock! Unfortunately, this page is not the elusive clue
          you were hunting for.
        </GradientText>

        <StyledText fontSize="22px">
          It seems to have vanished into thin air. But don't lose hope! Keep
          exploring the vast web of mysteries and you might stumble upon the
          treasure you seek.
        </StyledText>

        <Link href="/">
          <Button
            style={{
              width: "160px",
              flexDirection: "row-reverse",
            }}
            label="Back Home"
            arrowDirection="left"
          />
        </Link>

        <ParticalsEffects top={1} />
        <div className="line3" />
        <div className="line3 line4" />
      </div>
    </>
  );
}
