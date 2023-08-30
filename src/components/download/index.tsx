import TitleDescriptionBlock from "../titleDescriptionBlock";
import CustomEllipse from "../ellipse";

import googlePlay from "../../assets/photos/download icons/icon/Group.svg";
import appleStore from "../../assets/photos/download icons/icon/appstore.svg";

const DownloadApp = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 xl:gap-24 gap-2 relative ">
      <div className="mx-auto bg-[#FFFFFF] bg-opacity-10 rounded-lg p-10">
        <TitleDescriptionBlock
          title="Download FarmVest app and invest in your future"
          specialWord="FarmVest app"
        />

        <CustomEllipse firstPosition="top-[10%] left-[65%] rotate-45" />
        <CustomEllipse firstPosition="top-[10%] left-[0]" />
        <div className="flex items-center justify-center gap-2 m-4">
          <a href="https://play.google.com/store/games">
            <img
              src={googlePlay}
              alt="Google Play"
              className="cursor-pointer"
            />
          </a>
          <a href="https://developer.apple.com/app-store/">
            <img src={appleStore} alt="App Store" className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
