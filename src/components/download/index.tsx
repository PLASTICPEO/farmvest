import Ellipse from "../ellipse";
import TitleDescriptionBlock from "../titleDescriptionBlock";

import googlePlay from "../../assets/photos/download icons/icon/Group.svg";
import appleStore from "../../assets/photos/download icons/icon/appstore.svg";

const DownloadApp = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 xl:gap-24 gap-2 relative">
      <div className="mx-auto bg-[#FFFFFF] bg-opacity-10 rounded-lg p-10">
        <TitleDescriptionBlock
          title="Download FarmVest app and invest in your future"
          specialWord="FarmVest app"
        />

        <Ellipse firstPosition="top-[0] left-[30%] rotate-45" />
        <Ellipse firstPosition="top-0 left-[7%]" />
        <div className="flex items-center justify-center gap-2 m-4">
          <img src={googlePlay} alt="Google Play" className="cursor-pointer" />
          <img src={appleStore} alt="App Store" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
