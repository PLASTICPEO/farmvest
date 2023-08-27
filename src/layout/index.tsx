import { LayoutTypes } from "./layout.Types";
import Header from "../components/header";
import Footer from "../components/footer";

const DefaultLayout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <div className="bg-[#263238]">
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
