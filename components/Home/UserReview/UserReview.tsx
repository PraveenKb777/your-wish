import GradientText from "@/components/GradientText/GradientText";
import { StackedCards } from "@/components/StackedCards/StackedCards";
import React, { FC } from "react";

interface IUserReview {
  id?: string;
}

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

const UserReview: FC<IUserReview> = ({ id = "" }) => {
  return (
    <section
      id={id}
      className="h-[100vh] w-full flex flex-col justify-center items-center text-white"
    >
      <GradientText element="h2" className="text-5xl">
        Don't Just Take Our Word, Take theirs!
      </GradientText>
      <p className="font-thin my-3">
        Our Students Love Our Courses, so you won't regret spending on our
        Courses.
      </p>
      <StackedCards list={imgList} />
    </section>
  );
};

export default UserReview;
