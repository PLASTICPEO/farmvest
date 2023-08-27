import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import TitleDescriptionBlock from "../titleDescriptionBlock";
import Button from "../button";

import realtTime from "../../assets/photos/real-time.svg";
import List from "./list";

const WhyChoosen = () => {
  const { scrollY } = useContext(AppContext);

  const screenSize = window.innerWidth;

  const SlideScreenSize = screenSize > 550 ? 1400 : 2100;
  const desktopSoftSize = screenSize > 550 ? 1550 : 2400;

  const slidingSide = `transition-transform duration-1000 ${
    scrollY > SlideScreenSize ? "translate-x-0" : "translate-x-[-150%]"
  }`;
  const softSpeech = `transition-opacity duration-1000 ${
    scrollY > desktopSoftSize ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div className="mt-20 mb-10 grid xl:grid-cols-2 grid-cols-1 xl:gap-4 gap-2">
      <div className={`${slidingSide}`}>
        <TitleDescriptionBlock
          title="Why choose FarmVest"
          specialWord="FarmVest"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
          titleAdditionalStyle="w-96 text-start"
          descripAddStyle="w-96"
        />
        <div>
          <List number={1} title="Real-time Checkup" />
          <List number={2} title="Flexibility in Investment" />
          <List number={3} title="Encrypted and Secured" />
          <List number={4} title="Withdraw Anytime" />
        </div>
        <div className="xl:mt-14 mt-6 ml-5">
          <Button title="Learn More" />
        </div>
      </div>

      <div className={`px-2 ${softSpeech} xl:mt-0 mt-6`}>
        <img src={realtTime} alt="realt time" />
      </div>
    </div>
  );
};
export default WhyChoosen;
