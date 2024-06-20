import FeaturedCourse from "@/components/Home/FeaturedCourse/FeaturedCourse";
import ParticalsEffects from "@/components/Particals/Particals";
import React from "react";

const Courses = () => {
  return (
    <main>
      <FeaturedCourse />
      <ParticalsEffects top={1} />
    </main>
  );
};

export default Courses;
