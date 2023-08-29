import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import TitleDescriptionBlock from "../titleDescriptionBlock";
import CustomButton from "../button";

import realtTime from "../../assets/photos/real-time.svg";
import List from "./list";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const slideCotainerVariant = {
  hidden: {
    opacity: 0,
    x: "-200vw",
    transition: {
      duration: 2,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const opacityCotainerVariant = {
  hidden: {
    opacity: 0,
    x: "400vw",
    transition: {
      duration: 2,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
    },
  },
};

const listItems = [
  { number: 1, title: "Real-time Checkup" },
  { number: 2, title: "Flexibility in Investment" },
  { number: 3, title: "Encrypted and Secured" },
  { number: 4, title: "Withdraw Anytime" },
];

const WhyChoose: React.FC = () => {
  const { scrollY } = useContext(AppContext);

  const slideScreenSize = window.innerWidth > 550 ? 1350 : 2100;
  const opacityScreenSize = window.innerWidth > 550 ? 1350 : 2600;

  /* 
  Initially, I tried to introduce animations in the project in this way.
  Then I discovered former motion and tested how effective it was.
  I think so many animated movements for the project should not be a good decision for various reasons,
  but for demonstration I think it will not be alarming.
  */

  // const slidingSide = `transition-transform duration-1000 ${
  //   scrollY > slideScreenSize ? "translate-x-0" : "translate-x-[-150%]"
  // }`;
  // const softSpeech = `transition-opacity duration-1000 ${
  //   scrollY > opacityScreenSize ? "opacity-100" : "opacity-0"
  // }`;

  return (
    <div className="mt-20 mb-10 grid xl:grid-cols-2 grid-cols-1 xl:gap-4 gap-2">
      <motion.div
        variants={slideCotainerVariant}
        animate={scrollY > slideScreenSize ? "visible" : "hidden"}
        transition={{ duration: 1.4 }}
      >
        <div>
          <TitleDescriptionBlock
            title="Why choose FarmVest"
            specialWord="FarmVest"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
            titleAdditionalStyle="w-96 text-start"
            descripAddStyle="w-96"
          />
          <div>
            {listItems.map((item: any, index: number) => {
              let baseDuration = 1.2;
              let durationIncrement = 0.4;
              let duration = baseDuration + index * durationIncrement;
              return (
                <motion.div
                  key={index}
                  variants={slideCotainerVariant}
                  animate={scrollY > slideScreenSize ? "visible" : "hidden"}
                  transition={{ duration }}
                >
                  <List number={item.number} title={item.title} />
                </motion.div>
              );
            })}
          </div>
          <div className="xl:mt-14 mt-6 ml-5">
            <Link to="/why-farmvest">
              <CustomButton title="Learn More" />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={opacityCotainerVariant}
        animate={scrollY > opacityScreenSize ? "visible" : "hidden"}
      >
        <div className="px-2 xl:mt-0 mt-6">
          <img src={realtTime} alt="realt time" />
        </div>
      </motion.div>
    </div>
  );
};
export default WhyChoose;
