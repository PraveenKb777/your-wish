"use client";

import React from "react";
import "./index.css";

interface IHeaderButton {
  number: number;
  lable: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const HeaderButton: React.FC<IHeaderButton> = ({
  lable,
  number,
  isSelected = false,
  onClick = () => {},
  className = "",
}) => {
  const buttonClass = isSelected
    ? "rounded-lg border-[#eeeeee1a] border-[1px]  bg-gradient-to-r from-[#ffffff17]"
    : "";

  return (
    <button
      onClick={onClick}
      className={
        `flex items-center justify-center ${
          !isSelected ? "text-gray-500 " : " text-white "
        }p-2 mx-3 ` +
        buttonClass +
        className
      }
    >
      <div className="rounded-md border-[1px] flex-shrink-0 mr-2 border-[#eeeeee1a]">
        <p className="mx-2 my-1 text-xs">{number}</p>
      </div>
      <p className="header-button-content">{lable}</p>
    </button>
  );
};
