import React from "react";
import "./index.css";
const Comet = () => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <span
            className="absolute  h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[200deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent opacity-0"
            style={{
              top: `${20 * i * Math.random() * 5}px`,
              left: `${20 * i * Math.random() * 5}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: "10s",
              animationName: "cometAnimation",
              animationIterationCount: "infinite",
              animationFillMode: "forwards",
            }}
          />
        ))}
    </>
  );
};

export default Comet;
