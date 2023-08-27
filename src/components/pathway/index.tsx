import TitleDescriptionBlock from "../titleDescriptionBlock";
import pathWay from "../../assets/photos/pathway.svg";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const Pathway = () => {
  const { scrollY } = useContext(AppContext);

  const screenSize = window.innerWidth;

  const SlideScreenSize = screenSize > 390 ? 900 : 1300;
  const desktopSoftSize = screenSize > 390 ? 900 : 1900;

  const slidingSide = `transition-transform duration-1000 ${
    scrollY > SlideScreenSize ? "translate-x-0" : "translate-x-[-150%]"
  }`;
  const softSpeech = `transition-opacity duration-1000 ${
    scrollY > desktopSoftSize ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-24 mt-20 mb-10">
      <div
        className={`bg-[white] bg-opacity-10 rounded-lg p-10 mt-5 ${slidingSide}`}
      >
        <div>
          <img src={pathWay} alt="how it work" className="rounded-lg" />
        </div>
      </div>
      <div className={`${softSpeech}`}>
        <TitleDescriptionBlock
          title="Your pathway to Future Investment"
          specialWord="pathway"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
        />
      </div>
    </div>
  );
};
export default Pathway;
