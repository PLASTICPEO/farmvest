import SiteLogo from "../../assets/photos/SiteLogo.svg";
import instagramIcon from "../../assets/photos/social.svg";
import facebookIcon from "../../assets/photos/facebook.svg";
import twitterIcon from "../../assets/photos/twitter.svg";

import Description from "./components/description";
import Subscribe from "./components/Subscribe";
import ContactDetails from "./components/contact";
import SubFooter from "./components/footer";

const socialItems = [
  {
    icon: instagramIcon,
    src: "https://www.instagram.com/",
    platform: "instagram",
  },
  {
    icon: facebookIcon,
    src: "https://www.facebook.com/gio.davlasheridze",
    platform: "facebook",
  },
  {
    icon: twitterIcon,
    src: "https://twitter.com/i/flow/login?redirect_after_login=%2Fstopachka",
    platform: "twitter",
  },
];

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-[white] bg-opacity-10 pt-10">
        <div className="xl:flex justify-between xl:mx-20 mx-10  border-b-[1px] border-[#B0B3BF] pb-10 ">
          <Description siteLogo={SiteLogo} />
          <Subscribe />
          <ContactDetails socialItems={socialItems} />
        </div>
        <SubFooter />
      </div>
    </div>
  );
};

export default Footer;
