import MariqueeCarousal from "@/components/MariqueeCarousal/MariqueeCarousal";
import React from "react";
import CONTENT from "@/content";
import GradientText from "@/components/GradientText/GradientText";
import Button from "@/components/Button/Button";
import { StackedCards } from "@/components/StackedCards/StackedCards";
import "./index.css";
import StyledText from "@/components/StyledText/StyledText";
interface IImgList {
  url: string;
  id?: string;
}

const imgList: Array<IImgList> = [
  { url: "/Imgs/Cloudflare_Logo.png" },
  { url: "/Imgs/css.webp" },
  { url: "/Imgs/nextjs.png" },
  { url: "/Imgs/React.webp" },
];

const ANIMATION_DURATION = 500;

export const HeroSection = () => {
  const { home } = CONTENT;

  return (
    <>
      <div
        id="home-hero-section"
        style={{
          display: "flex",
          height: "calc(100vh - 78px)",
        }}
        className="justify-between overflow-hidden "
      >
        <div className="flex flex-col text-white self-center max-w-[50%]">
          <GradientText
            element="h1"
            className=" text-5xl font-semibold "
            style={{
              animation: `comeFromBottom ${ANIMATION_DURATION}ms`,
              opacity: 0,
              animationFillMode: "forwards",
              animationDelay: "0s",
            }}
          >
            {home.heroSection.title}
          </GradientText>
          <GradientText
            element="h1"
            className="text-5xl font-semibold"
            style={{
              animation: `comeFromBottom ${ANIMATION_DURATION}ms`,
              opacity: 0,
              animationFillMode: "forwards",
              animationDelay: ".2s",
            }}
          >
            {home.heroSection.subTitle}
          </GradientText>

          <StyledText
           fontSize="17px"
           marginTop="10px"
           style={{
            animation: `comeFromBottom ${ANIMATION_DURATION}ms`,
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: ".2s",
          }}>
            {home.heroSection.content}
          </StyledText>
          
          <div className="self-start w-[50%] mt-5">
            <Button
              style={{
                animation: `comeFromBottom ${ANIMATION_DURATION}ms`,
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: ".7s",
              }}
              label={home.heroSection.actionButtonLabel}
            />
          </div>
        </div>
        <div className="flex">
          <MariqueeCarousal
            marqueeDirection="vertical"
            duration={30}
            list={imgList}
            imageClassName="hero_section_carousal"
            imageHeight={400}
            imageWidth={250}
          />
          <div className="w-3" />
          <MariqueeCarousal
            marqueeDirection="vertical"
            duration={30}
            list={imgList}
            imageClassName="hero_section_carousal "
            imageHeight={400}
            imageWidth={250}
            reverse
          />
        </div>
      </div>
      {/* <StackedCards list={imgList} /> */}
    </>
  );
};
