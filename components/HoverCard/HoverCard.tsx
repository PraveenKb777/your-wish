import React from "react";
import Image from "next/image";
import image from "../../assets/images/react.png";
import "./HoverCard.css";
import Button from "../Button/Button";

export default function HoverCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cardContainer">
      <Image
        sizes="calc(min(350px, 100vw) - 30px)"
        className="w-full"
        src={image}
        alt="React logo"
      />
      <div className="py-4">
        <div className="font-bold mb-2">Web design mastery course</div>
        <div className="flex items-center">
          <Image
            className="w-10 h-10 rounded-full"
            src={image}
            alt="User profile"
            width={40}
            height={40}
          />
          <p className="ml-2 text-lg font-medium">Name</p>
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>

      <Button label="it is a lable" />
    </div>
  );
}
