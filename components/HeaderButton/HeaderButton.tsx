import React from "react";
import "./index.css";

interface IHeaderButton {
  number: number;
  lable: string;
}

export const HeaderButton: React.FC<IHeaderButton> = ({ lable, number }) => {
  return (
    <button className="flex items-center justify-center border-[1px] p-2 rounded-lg border-[#eeeeee1a] bg-gradient-to-r from-[#ffffff17]">
      <div className="rounded-md border-[1px] flex-shrink-0 mr-2 border-[#eeeeee1a]">
        <p className="mx-2 my-1 text-xs">{number}</p>
      </div>
      <p className="header-button-content">{lable}</p>
    </button>
  );
};
