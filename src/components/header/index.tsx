import { useContext, useState, useEffect } from "react";
import Button from "../button";
import Menu from "../menu";
import { AppContext } from "../../context/AppContext";

const menuItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "How it works", path: "/how-it-works" },
];

const Header = () => {
  const { scrollY } = useContext(AppContext);
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    // Show/hide the header based on scroll position
    setHeaderVisible(scrollY <= 400);
  }, [scrollY]);

  const headerClassName = `transition-transform duration-1000 ${
    isHeaderVisible ? "translate-y-0" : "-translate-y-full"
  } bg-[#263238] w-full xl:h-20 h-28 px-4 pt-10 xl:pt-4 z-40`;
  return (
    <div className={`${headerClassName} fixed`}>
      <Menu items={menuItems} />
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="flex items-center text-[#FFFFFF] text-3xl font-Lato font-thin">
              FarmVest
            </p>
          </div>
          <div className="xl:flex hidden flex items-center space-x-8 text-[#FFFFFF] font-Lato text-lg font-thin">
            <p>Home</p>
            <p>About</p>
            <p>Features</p>
            <p>How it works</p>
          </div>
          <div className="flex items-center space-x-4 text-[#FFFFFF] font-Lato font-thin ">
            <Button title="Sign In" border />
            <Button title="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
