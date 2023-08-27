import Companies from "../../components/companies";
import Ellipse from "../../components/ellipse";
import EnterEmail from "../../components/enterEmail";
import HowWork from "../../components/howWork";
import Pathway from "../../components/pathway";

const Home = () => {
  return (
    <div className="w-full h-full pt-20">
      <Ellipse
        firstPosition="xl:top-[-20%] xl:left-[-10%] top-[-18%] left-[-43%]"
        secondPosition="xl:top-[-25%] xl:left-[-5%] top-[-15%] left-[-50%]"
      />
      <div className="container mx-auto">
        <EnterEmail />
        <Companies />
        <HowWork />
        <Pathway />
      </div>
    </div>
  );
};

export default Home;
