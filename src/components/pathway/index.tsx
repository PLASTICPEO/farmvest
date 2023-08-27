import TitleDescriptionBlock from "../titleDescriptionBlock";
import pathWay from "../../assets/photos/pathway.svg";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import DropDown from "../dropDown";

const items: { text: string; id: number }[] = [
  { text: "How safe is FarmVest", id: 1 },
  { text: "What using FarmVest?", id: 2 },
];

const Pathway = () => {
  const { scrollY } = useContext(AppContext);

  const screenSize = window.innerWidth;

  const SlideScreenSize = screenSize > 550 ? 900 : 1300;
  const desktopSoftSize = screenSize > 550 ? 900 : 1900;

  const slidingSide = `transition-transform duration-1000 ${
    scrollY > SlideScreenSize ? "translate-x-0" : "translate-x-[-150%]"
  }`;
  const softSpeech = `transition-opacity duration-1000 ${
    scrollY > desktopSoftSize ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div className="mt-10 mb-10 grid xl:grid-cols-2 grid-cols-1 xl:gap-4 gap-2">
      <div
        className={`bg-[white] bg-opacity-10 rounded-lg p-10 mt-5 mx-2  ${slidingSide}`}
      >
        <div>
          <img src={pathWay} alt="how it work" className="rounded-lg" />
        </div>
      </div>
      <div className={`${softSpeech} max-w-96`}>
        <TitleDescriptionBlock
          title="Your pathway to Future Investment"
          specialWord="pathway"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
        />
        <DropDown dropDownItems={items} />
      </div>
    </div>
  );
};
export default Pathway;
