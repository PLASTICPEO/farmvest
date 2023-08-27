import { Link } from "react-router-dom";
import cardimg1 from "../../assets/photos/card/cardImg1.svg";
import cardimg2 from "../../assets/photos/card/cardImgSecond.svg";
import Button from "../../components/button";
import Card from "../../components/customers/card";

const CustomersPage: React.FC = () => {
  return (
    <div className="w-full xl:h-full h-full bg-[#263238] py-20 px-2">
      <div className="container mx-auto grid xl:grid-cols-1 grid-cols-1 xl:gap-8 gap-6">
        <Card
          img={cardimg1}
          title="Tonia Smart"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
        />
        <Card
          img={cardimg2}
          title="Grace Obi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
        />
        <Card />
        <Link to="/" className="mx-auto">
          <Button title="Back home" />
        </Link>
      </div>
    </div>
  );
};

export default CustomersPage;
