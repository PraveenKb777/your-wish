import Image from "next/image";
import image1 from "../../assets/images/cardImg1.jpg";
import GradientText from "../GradientText/GradientText";
import StyledText from "../StyledText/StyledText";
import "./index.css";
import TeamButton from "../TeamButton";

type TeamCardProps = {
  firstname: string;
  lastname: string;
  role: string;
  description: string;
  briefDescription: string;
  buttonLabel: string;
  animationDuration: number;
  index: number;
};

export default function TeamCard({
  firstname,
  lastname,
  role,
  description,
  briefDescription,
  buttonLabel,
  animationDuration,
  index,
}: TeamCardProps) {

  const handleToggle = (index: number) => {
    const TeamcardContainer = document.querySelectorAll('.TeamcardContainer')[index];
    TeamcardContainer?.classList.toggle('active');
  };

  return (
    <div className="bg-[#0b0b0b] card_main-cont">
      <div className="max-w-sm rounded overflow-hidden shadow-lg TeamcardContainer">
        <div className="view firstView">
          <Image
            sizes="calc(min(350px, 100vw) - 30px)"
            className="w-full rounded-lg border border-[#eeeeee1a]"
            src={image1}
            alt="Course Image"
          />
          <div className="py-4">
            <GradientText className="text-2xl font-medium my-2" element="p">
              {firstname} {lastname}
            </GradientText>
            <div className="GreenText">{role}</div>
            <StyledText fontSize="15px">{description}</StyledText>
          </div>
          <TeamButton label={buttonLabel} name={firstname} handleToggle={() => handleToggle(index)} />
        </div>

        <div className="view secondView">
          <StyledText fontSize="15px">
            {briefDescription}
          </StyledText>
          <button className="closebutton" onClick={() => handleToggle(index)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>


      </div>
    </div>
  );
}