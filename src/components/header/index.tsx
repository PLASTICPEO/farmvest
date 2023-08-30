import Menu from "../menu";
import { Link } from "react-router-dom";

import CustomModal from "../modal";
import LogInContent from "./login";
import RegisterContent from "./register";
import { useHeader } from "./hooks/useHeader";
import HeaderMenu from "./menu";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "How it works", path: "/how-work" },
];

const Header = () => {
  const { isHeaderVisible, loginRef, handleLogin, handleRegister } =
    useHeader();
  const windowScreen = window.innerWidth;
  const { scrollPositionTop } = useContext(AppContext);

  const headerClassName = `transition-transform duration-1000 ${
    isHeaderVisible ? "translate-y-0" : "-translate-y-full"
  } `;
  return (
    <div
      className={`${
        windowScreen > 550 ? headerClassName : ""
      } fixed bg-[#263238] bg-opacity-90 w-full xl:h-20 h-28 px-4 pt-10 xl:pt-4 z-50`}
    >
      <Menu items={menuItems} />
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <p
                onClick={scrollPositionTop}
                className="flex items-center text-[#FFFFFF] text-3xl font-Lato font-thin"
              >
                FarmVest
              </p>
            </Link>
          </div>
          <HeaderMenu items={menuItems} />
          <div className="flex items-center space-x-4 text-[#FFFFFF] font-Lato font-thin ">
            <CustomModal
              ref={loginRef}
              title="Welcome Back."
              triggerProps={{
                title: "Sign In",
                border: true,
                isWhite: true,
              }}
            >
              <LogInContent handleLogin={handleLogin} />
            </CustomModal>
            <CustomModal
              ref={loginRef}
              title="Join Us."
              triggerProps={{
                title: "Get Started",
                border: false,
              }}
            >
              <RegisterContent handleRegister={handleRegister} />
            </CustomModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
