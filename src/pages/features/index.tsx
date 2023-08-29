import { Link } from "react-router-dom";
import CustomButton from "../../components/button";
import Menu from "../../components/menu";

const menuItems = [{ name: "Home", path: "/" }];

const Features = () => {
  return (
    <div className="w-full h-screen bg-[#263238] flex items-center justify-center">
      <Menu items={menuItems} />
      <Link to="/">
        <CustomButton title="Back to home" />
      </Link>
    </div>
  );
};

export default Features;
