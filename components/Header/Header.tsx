import React from "react";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import Logo from "../Logo/Logo";

export const Header = () => {
  return (
    <nav className="text-white sticky w-[100vw] top-0 left-0 bg-[#0b0b0b] pt-3  z-50 h-[78px] flex flex-col">
      <div className="flex justify-center w-full max-w-[1100px] self-center">
        <Logo isTooltip />
        <div className="flex justify-between text-sm mb-4">
          <HeaderButton number={1} lable="Course" isSelected />
          <HeaderButton number={2} lable="About us" />
          <HeaderButton number={3} lable="Contact us" />
        </div>
        <HeaderButton number={4} lable="Consider Us" className="mb-4 ml-auto" />
      </div>
      <div
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.2) 19.767%, rgba(225, 225, 225, 0.5) 49.7917%, rgba(171, 171, 171, 0.2) 80.3431%)",
          opacity: 1,
          height: 1,
        }}
      ></div>
    </nav>
  );
};
