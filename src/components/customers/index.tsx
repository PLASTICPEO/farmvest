import TitleDescriptionBlock from "../titleDescriptionBlock";
import CardPhoto1 from "../../assets/photos/card/cardImg1.svg";
import CardPhoto2 from "../../assets/photos/card/cardImgSecond.svg";
import Card from "./card";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Button from "../button";
import { Link } from "react-router-dom";

const cardItem = [
  {
    img: CardPhoto1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac",
    title: "Tonia Smart",
  },
  {
    img: CardPhoto2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac",
    title: "Grace Obi",
  },
];

const Customers = () => {
  const { scrollY } = useContext(AppContext);

  const screenSize = window.innerWidth;

  const desktopSoftSize = screenSize > 550 ? 2770 : 3050;
  const desktopSoftSizeRight = screenSize > 550 ? 3000 : 3300;

  const softSpeech = `transition-opacity duration-1000 ${
    scrollY > desktopSoftSize ? "opacity-100" : "opacity-0"
  }`;
  const softSpeechRight = `transition-opacity duration-1000 ${
    scrollY > desktopSoftSizeRight ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div>
      <div className={`${softSpeech}`}>
        <TitleDescriptionBlock
          title="What Customers have to say"
          specialWord="Customers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
          titleAdditionalStyle="text-center"
          descripAddStyle="w-[400px] mx-auto"
        />
      </div>

      <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
        {cardItem.map(
          (
            item: { img: string; description: string; title: string },
            index
          ) => (
            <div key={index} className={softSpeechRight}>
              <Card
                img={item.img}
                description={item.description}
                title={item.title}
              />
            </div>
          )
        )}
      </div>
      <div className="flex items-center justify-center my-5">
        <Link to="/customers">
          <Button title="View All" />
        </Link>
      </div>
    </div>
  );
};
export default Customers;
