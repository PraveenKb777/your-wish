import MariqueeCarousal from "@/components/MariqueeCarousal/MariqueeCarousal";
import HoverCard from "@/components/HoverCard/HoverCard";
import Image from "next/image";
import Button from "@/components/Button/Button";
import GradientText from "@/components/GradientText/GradientText";
import { StackedCards } from "@/components/StackedCards/StackedCards";

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

export default function Home() {
  return (
    <>
      <StackedCards list={[0, 1, 2, 3, 4]} />
      <GradientText
        colors={["#eee", "#333"]}
        element="h1"
        style={{ fontSize: 100 }}
      >
        Hello world
      </GradientText>
      <Button />
      <HoverCard />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <MariqueeCarousal
          list={imgList}
          marqueeDirection="horizontal"
          imageHeight={200}
          imageWidth={200}
          imageClassName="hero_section_carousal"
          duration={100}
        />
      </div>
    </>
  );
}
