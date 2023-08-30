import { Link } from "react-router-dom";

import TitleDescriptionBlock from "../../components/titleDescriptionBlock";
import CustomButton from "../../components/button";
import pathway from "../../assets/photos/pathway.svg";

const Features = () => {
  return (
    <div className="w-full h-screen bg-[#263238] pt-10 px-4">
      <div className="xl:flex xl:space-x-4 bg-[white] bg-opacity-10 rounded-lg xl:p-10">
        <img src={pathway} alt="how it work" className="rounded-lg w-96" />

        <div>
          <TitleDescriptionBlock
            title="Your pathway to Future Investment"
            specialWord="Investment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link to="/">
          <CustomButton title="Back to home" />
        </Link>
      </div>
    </div>
  );
};

export default Features;
