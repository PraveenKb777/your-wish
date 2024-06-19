import React from "react";
import Image from "next/image";
import image from "../../assets/images/react.png";
import image1 from "../../assets/images/cardImg1.jpg";
import "./HoverCard.css";
import Button from "../Button/Button";
import GradientText from "../GradientText/GradientText";
import StyledText from "../StyledText/StyledText";

type HoverCardProps = {
  title: string;
  name: string;
  description: string;
  buttonLabel: string;
  animationDuration: number;
};

export default function HoverCard({
  title,
  name,
  description,
  buttonLabel,
  animationDuration,
}: HoverCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cardContainer">
      <Image
        sizes="calc(min(350px, 100vw) - 30px)"
        className="w-full rounded-lg border border-[#eeeeee1a]"
        src={image1}
        alt="Course Image"
      />
      <div className="py-4">
        <div className="font-bold mb-2 text-white">{title}</div>
        <div className="flex items-center gap-[10px]">
          <Image
            className="w-10 h-10 rounded-full"
            src={image1}
            alt="User profile"
            width={40}
            height={40}
          />
          <GradientText
            element="p"
            className=" text-1.5xl font-semibold"
            style={{
              animation: `comeFromBottom ${animationDuration}ms`,
              opacity: 0,
              animationFillMode: "forwards",
              animationDelay: "0s",
            }}
          >
            {name}
          </GradientText>
        </div>

        <StyledText fontSize="14px" marginTop="15px">
          {description}
        </StyledText>
      </div>
      <Button
        style={{
          animation: `comeFromBottom ${animationDuration}ms`,
          opacity: 0,
          animationFillMode: "forwards",
          animationDelay: ".7s",
        }}
        label={buttonLabel}
      />
    </div>
  );
}
