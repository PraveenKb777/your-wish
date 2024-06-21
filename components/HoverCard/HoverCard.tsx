import Image from "next/image";
import image1 from "../../assets/images/cardImg1.jpg";
import Button from "../Button/Button";
import GradientText from "../GradientText/GradientText";
import StyledText from "../StyledText/StyledText";
import "./HoverCard.css";

type HoverCardProps = {
  title: string;
  name: string;
  description: string;
  buttonLabel: string;
  animationDuration: number;
};
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("in-view");
//       return;
//     }
//     entry.target.classList.remove("in-view");
//   });
// });

export default function HoverCard({
  title,
  name,
  description,
  buttonLabel,
  animationDuration,
}: HoverCardProps) {
  // const cardRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   for (let i = 0; i < cardRef.current?.childElementCount!; i++) {
  //     observer.observe(cardRef.current?.children.item(i)!);
  //   }
  // }, [cardRef.current?.children]);

  return (
    <div className="bg-[#0b0b0b] card_main-cont">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg cardContainer "
        // ref={cardRef}
      >
        <Image
          sizes="calc(min(350px, 100vw) - 30px)"
          className="w-full rounded-lg border border-[#eeeeee1a]"
          src={image1}
          alt="Course Image"
        />
        <div className="py-4">
          <div className="font-bold mb-2 text-white">{title}</div>
          <div className="flex items-center gap-[10px]">
            <Image
              className="w-10 h-10 rounded-full"
              src={image1}
              alt="User profile"
              width={40}
              height={40}
            />
            <GradientText
              element="p"
              className=" text-1.5xl font-semibold"
              style={{
                animation: `comeFromBottom ${animationDuration}ms`,
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "0s",
              }}
            >
              {name}
            </GradientText>
          </div>

          <StyledText fontSize="14px" marginTop="15px">
            {description}
          </StyledText>
        </div>
        <Button style={{}} label={buttonLabel} />
      </div>
    </div>
  );
}
