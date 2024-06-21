import { HeroSection } from "@/components/Home/HeroSection/HeroSection";
import FeaturedCourse from "@/components/Home/FeaturedCourse/FeaturedCourse";
import UserReview from "@/components/Home/UserReview/UserReview";
import ParticalsEffects from "@/components/Particals/Particals";

export default function Home() {
  return (
    <>
      <div className="line" />
      <div className="line line2" />
      <ParticalsEffects top={2} />
      <HeroSection />
      <FeaturedCourse id="home-screen-feature-course" />
      <UserReview id="home-screen-user-review" />
    </>
  );
}
