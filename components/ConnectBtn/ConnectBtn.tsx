import React, { FC } from "react";
import mail from "../../public/svgs/mail.svg";
import Image from "next/image";
import MailSVG, { CustomSvgProps } from "../SVG/Mail";

interface IConnectBtnProps {
  Svg?: FC<CustomSvgProps>;
  head?: string;
  subHead?: string;
  className?: string;
  href?: string;
}

const ConnectBtn: FC<IConnectBtnProps> = ({
  Svg = MailSVG,
  head = "None",
  subHead = "none",
  className = "",
  href = "",
}) => {
  return (
    <a
      className={
        "text-white flex hover:translate-x-1  transition  duration-500 cursor-pointer " +
        className
      }
      href={href}
    >
      <div
        className="border border-[#eeeeee1a] rounded-lg p-2 w-fit "
        style={{
          background:
            "linear-gradient(129deg, rgb(31, 31, 31) 0%, rgb(16, 16, 16) 132.836%)",
        }}
      >
        <Svg strokeColor="white" height={30} width={30} />
      </div>
      <div className="ml-3">
        <p className="font-semibold">{head}</p>
        <p className="text-gray-400 font-light text-xs text-wrap max-w-[20ch] ">
          {subHead}
        </p>
      </div>
    </a>
  );
};

export default ConnectBtn;
