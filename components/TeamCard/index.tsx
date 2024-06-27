import Image from "next/image";
import image1 from "../../assets/images/cardImg1.jpg";
import Button from "../Button/Button";
import GradientText from "../GradientText/GradientText";
import StyledText from "../StyledText/StyledText";
import "./index.css";
import TeamButton from "../TeamButton";

type TeamCardProps = {
  title: string;
  name: string;
  description: string;
  buttonLabel: string;
  animationDuration: number;
};

export default function TeamCard({
  title,
  name,
  description,
  buttonLabel,
  animationDuration,
}: TeamCardProps) {

  return (
    <div className="bg-[#0b0b0b] card_main-cont">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg cardContainer"
      >
        <Image
          sizes="calc(min(350px, 100vw) - 30px)"
          className="w-full rounded-lg border border-[#eeeeee1a]"
          src={image1}
          alt="Course Image"
        />
        <div className="py-4">

          <GradientText className="text-2xl font-medium my-2" element="p">
            {title}
          </GradientText>

          <div className='GreenText'>our team</div>

          <StyledText fontSize="15px">
            {description}
          </StyledText>
        </div>

        <TeamButton
          label="Back Home"
        />
            
      </div>
    </div>
  );
}
