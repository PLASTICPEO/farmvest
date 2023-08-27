import Companies from "../../components/companies";
import Customers from "../../components/customers";
import DownloadApp from "../../components/download";
import Ellipse from "../../components/ellipse";
import EnterEmail from "../../components/enterEmail";
import HowWork from "../../components/howWork";
import Pathway from "../../components/pathway";
import WhyChoosen from "../../components/whyChoosen";

const Home = () => {
  return (
    <div className="w-full h-full pt-20">
      <Ellipse firstPosition="xl:top-[-20%] xl:left-[-10%] top-[-18%] left-[-43%]" />
      <Ellipse firstPosition="xl:top-[-25%] xl:left-[-5%] top-[-15%] left-[-50%]" />
      <div className="container mx-auto overflow-hidden">
        <EnterEmail />
        <Companies />
        <div className="grid xl:grid-cols-1 grid-cols-1 xl:gap-24 gap-2">
          <HowWork />
          <Pathway />
          <WhyChoosen />
          <Customers />
          <DownloadApp />
        </div>
      </div>
    </div>
  );
};

export default Home;
