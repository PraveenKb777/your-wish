import React, { CSSProperties, FC } from "react";
import "./index.css";
interface IParticalStyles extends CSSProperties {
  "--x": string;
  "--y": string;
  "--duration": string;
  "--delay": string;
}

const Partical = () => {
  const randomTop = Math.random() * 100;
  const randomLeft = Math.random() * 100;

  const randomSize = Math.random() * 4;

  const x = Math.random() * 50 + "vw";
  const y = -Math.random() * 50 + "vh";
  const duration = Math.random() * 30 + 30 + "s";
  const delay = Math.random() * 5 + "s";
  const blinkDuration = Math.random() * 6 + 6 + "s";

  return (
    <span
      className="rounded-full animate-pulse absolute"
      style={
        {
          top: `${randomTop}%`,
          left: `${randomLeft}%`,
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(105,118,121,1) 94%)",
          height: randomSize,
          width: randomSize,
          opacity: 0,
          "--x": x,
          "--y": y,
          zIndex: -9999,
          animation: `move ${duration} linear ${delay} infinite alternate,blink ${blinkDuration} ease-in-out infinite`,
        } as IParticalStyles
      }
    />
  );
};

const ParticalsEffects: FC<{ top: number }> = ({ top }) => {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        top: `${(top - 1) * 100}vh`,
        height: "100vh",
        width: "100vw",
        zIndex: -9999,
      }}
    >
      {Array(100)
        .fill(0)
        .map((_, i) => {
          return <Partical key={i} />;
        })}
    </div>
  );
};

export default ParticalsEffects;
