import React, { FC } from "react";
import "./index.css";
import GradientText from "@/components/GradientText/GradientText";
import CONTENT from "@/content";
import HoverCard from "@/components/HoverCard/HoverCard";

interface IFeatureCoursed {
  id?: string;
}

const FeaturedCourse: FC<IFeatureCoursed> = ({ id = "" }) => {
  const ANIMATION_DURATION = 500;
  const { home } = CONTENT;

  return (
    <section
      className="mt-12 flex justify-center items-center flex-col"
      id={id}
      style={{ height: "calc(100vh - 78px)" }}
    >
      <div className="self-start">
        <GradientText
          element="h6"
          className="text-4xl font-medium"
          style={{
            animation: `comeFromBottom ${ANIMATION_DURATION}ms`,
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: "0s",
          }}
        >
          {home.featuredCourse.title}
        </GradientText>
      </div>

      <div className="grid grid-cols-3 gap-[30px] mt-9">
        {home.featuredCourse.cardContent.map((course, index) => (
          <HoverCard
            key={index}
            title={course.title}
            name={course.name}
            description={course.description}
            buttonLabel={home.featuredCourse.buttonLabel}
            animationDuration={ANIMATION_DURATION}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourse;
