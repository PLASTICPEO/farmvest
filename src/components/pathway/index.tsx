import TitleDescriptionBlock from "../titleDescriptionBlock";
import pathWay from "../../assets/photos/pathway.svg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import DropDown from "../dropDown";
import { motion } from "framer-motion";

const items: { text: string; id: number }[] = [
  { text: "How safe is FarmVest", id: 1 },
  { text: "What using FarmVest?", id: 2 },
];

const slideCotainerVariant = {
  hidden: {
    opacity: 0,
    y: 200,
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

const Pathway = () => {
  const { scrollY } = useContext(AppContext);

  const slideScreenSize = window.innerWidth > 550 ? 900 : 1900;
  const opacityScreenSize = window.innerWidth > 550 ? 900 : 1300;

  return (
    <div className="mt-10 mb-10 grid xl:grid-cols-2 grid-cols-1 xl:gap-4 gap-2">
      <motion.div
        variants={opacityCotainerVariant}
        animate={scrollY > opacityScreenSize ? "visible" : "hidden"}
      >
        <div className={`bg-[white] bg-opacity-10 rounded-lg p-10 mt-5 mx-2`}>
          <div>
            <img src={pathWay} alt="how it work" className="rounded-lg" />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideCotainerVariant}
        animate={scrollY > slideScreenSize ? "visible" : "hidden"}
      >
        <div className="max-w-96">
          <TitleDescriptionBlock
            title="Your pathway to Future Investment"
            specialWord="pathway"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
          />
          <DropDown dropDownItems={items} />
        </div>
      </motion.div>
    </div>
  );
};
export default Pathway;
