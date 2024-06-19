import MariqueeCarousal from "@/components/MariqueeCarousal/MariqueeCarousal";
import HoverCard from "@/components/HoverCard/HoverCard";
import Image from "next/image";
import GradientText from "@/components/GradientText/GradientText";
import { StackedCards } from "@/components/StackedCards/StackedCards";
import { HeroSection } from "@/components/Home/HeroSection/HeroSection";
import FeaturedCourse from "@/components/Home/FeaturedCourse/FeaturedCourse";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourse/>
    </>
  );
}
