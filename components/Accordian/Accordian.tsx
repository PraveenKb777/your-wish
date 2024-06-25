"use client";

import React, { FC, ReactNode, useState } from "react";
import "./index.css";
import DownArrow from "../SVG/DownArrowSvg";

interface AccordianProps {
  children: ReactNode;
}

const Accordian: FC<AccordianProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-[#eeeeee1a] rounded-lg text-white w-full"
      onClick={() => setOpen((e) => !e)}
      style={{
        background:
          "linear-gradient(129deg, rgb(31, 31, 31) 0%, rgb(0, 0, 0) 132.836%)",
      }}
    >
      <div className="p-4 flex justify-between">
        <p>Can i access courses on multiple devices?</p>
        <div
          className="aspect-square h-5 transition-all duration-300"
          style={{
            rotate: open ? "180deg" : "0deg",
          }}
        >
          <DownArrow />
        </div>
      </div>
      <div
        className="transition-all duration-300 overflow-hidden ease-[cubic-bezier(0.79, 0.33, 0.14, 0.53)]"
        style={{
          maxHeight: open ? "800px" : "0px",
        }}
      >
        <div
          className="mx-4"
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.2) 19.767%, rgba(225, 225, 225, 0.5) 49.7917%, rgba(171, 171, 171, 0.2) 80.3431%)",
            opacity: 1,
            height: 1,
          }}
        ></div>
        <div className="p-4 ">{children}</div>
      </div>
    </div>
  );
};

export default Accordian;
