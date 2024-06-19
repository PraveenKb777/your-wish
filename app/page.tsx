import { HeroSection } from "@/components/Home/HeroSection/HeroSection";
import FeaturedCourse from "@/components/Home/FeaturedCourse/FeaturedCourse";
import UserReview from "@/components/Home/UserReview/UserReview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourse id="home-screen-feature-course" />
      <UserReview id="home-screen-user-review" />
    </>
  );
}
