import { Link } from "react-router-dom";
import howWorkimg from "../../assets/photos/howWorkImg.svg";
import CustomButton from "../../components/button";
import TitleDescriptionBlock from "../../components/titleDescriptionBlock";
import Benefits from "../../components/howWork/benefits";

import downloadIcon from "../../assets/photos/howWork/downloadIcon.svg";
import createAccIcon from "../../assets/photos/howWork/createAccIcon.svg";
import bankIcon from "../../assets/photos/howWork/bankIcon.svg";
import investIcon from "../../assets/photos/howWork/investIcon.svg";

const benefitsItems = [
  {
    imgSrc: downloadIcon,
    title: "Download FarmVest",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
  {
    imgSrc: createAccIcon,
    title: "Create account",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
  {
    imgSrc: bankIcon,
    title: "Link your bank account",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
  {
    imgSrc: investIcon,
    title: "Start Investing",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
];

const HowWorkFarmVest = () => {
  return (
    <div className="w-full xl:h-screen h-full bg-[#263238] py-10">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
          <div className="xl:flex bg-[#FFFFFF] bg-opacity-10 rounded-lg p-4 relative mx-4">
            <img src={howWorkimg} alt="how it work" className="rounded-lg " />
          </div>
          <div>
            <TitleDescriptionBlock
              title="How FarmVest Works"
              specialWord="Works"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
            />
            {benefitsItems.map((item: any, index: number) => {
              return (
                <Benefits
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link to="/">
          <CustomButton title="Back to home" />
        </Link>
      </div>
    </div>
  );
};

export default HowWorkFarmVest;
