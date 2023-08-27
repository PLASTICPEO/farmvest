import { LayoutTypes } from "./layout.Types";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";

const menuItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "How it works", path: "/how-it-works" },
];

const DefaultLayout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <div className="bg-[#263238]">
      <Menu items={menuItems} />
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
