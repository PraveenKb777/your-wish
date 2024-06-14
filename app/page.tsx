import MariqueeCarousal from "@/components/MariqueeCarousal/MariqueeCarousal";
import HoverCard from "@/components/HoverCard/HoverCard";
import Image from "next/image";

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
      <div
        style={{ height: "100vh", display: "flex", justifyContent: "flex-end" }}
      >
        {/* <MariqueeCarousal
          list={imgList}
          marqueeDirection="vertical"
          imageHeight={300}
          imageWidth={300}
          imageClassName="hero_section_carousal"
          duration={30}
        /> */}
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
