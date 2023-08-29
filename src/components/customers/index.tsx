import TitleDescriptionBlock from "../titleDescriptionBlock";
import CardPhoto1 from "../../assets/photos/card/cardImg1.svg";
import CardPhoto2 from "../../assets/photos/card/cardImgSecond.svg";
import Card from "./card";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Button from "../button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const slideCotainerVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const opacityCotainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Customers: React.FC = () => {
  const { scrollY } = useContext(AppContext);

  const slideScreenSize = window.innerWidth > 550 ? 2400 : 3300;
  const opacityScreenSize = window.innerWidth > 550 ? 2300 : 3100;

  return (
    <div>
      <motion.div
        variants={opacityCotainerVariant}
        animate={opacityScreenSize < scrollY ? "visible" : "hidden"}
      >
        <TitleDescriptionBlock
          title="What Customers have to say"
          specialWord="Customers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
          titleAdditionalStyle="text-center"
          descripAddStyle="w-[400px] mx-auto"
        />
      </motion.div>

      <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
        {cardItem.map(
          (
            item: { img: string; description: string; title: string },
            index
          ) => (
            <motion.div
              key={index}
              variants={slideCotainerVariant}
              animate={slideScreenSize < scrollY ? "visible" : "hidden"}
            >
              <Card
                img={item.img}
                description={item.description}
                title={item.title}
              />
            </motion.div>
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
