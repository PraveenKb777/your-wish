"use client";

import React from "react";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import Logo from "../Logo/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PATHNAMES = ["/", "/courses", "/about-us", "/contact-us", "/consider-us"];

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="text-white sticky w-[100vw] top-0 left-0 bg-[#0b0b0b] pt-3  z-50 h-[78px] flex flex-col">
      <div className="flex justify-center w-full max-w-[1100px] self-center">
        <Link className=" mr-auto " href={pathname[0]}>
          <Logo isTooltip />
        </Link>
        <div className="flex justify-between text-sm mb-4">
          <HeaderButton
            number={1}
            lable="Course"
            isSelected={pathname === PATHNAMES[1]}
            href={PATHNAMES[1]}
          />
          <HeaderButton
            number={2}
            lable="About us"
            isSelected={pathname === PATHNAMES[2]}
            href={PATHNAMES[2]}
          />
          <HeaderButton
            number={3}
            lable="Contact us"
            isSelected={pathname === PATHNAMES[3]}
            href={PATHNAMES[3]}
          />
        </div>
        <HeaderButton
          number={4}
          lable="Consider Us"
          className="ml-auto mb-4"
          isSelected={pathname === PATHNAMES[4]}
          href={PATHNAMES[4]}
        />
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
