import Benefits from "./benefits";
import downloadIcon from "../../assets/photos/howWork/downloadIcon.svg";
import createAccIcon from "../../assets/photos/howWork/createAccIcon.svg";
import bankIcon from "../../assets/photos/howWork/bankIcon.svg";
import investIcon from "../../assets/photos/howWork/investIcon.svg";
import howWorkImg from "../../assets/photos/howWorkImg.svg";
import TitleDescriptionBlock from "../titleDescriptionBlock";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Ellipse from "../ellipse";

import { motion } from "framer-motion";

const benefitsItems = [
  {
    imgSrc: downloadIcon,
    title: "Download FarmVest",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
  {
    imgSrc: createAccIcon,
    title: "Create account",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
  {
    imgSrc: bankIcon,
    title: "Link your bank account",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
  {
    imgSrc: investIcon,
    title: "Start Investing",
    text: "Start by downloading FarmVest app on your Android or IOS",
  },
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
      duration: 1.5,
    },
  },
};

const HowWork = () => {
  const { scrollY } = useContext(AppContext);

  const SlideScreenSize = window.innerWidth > 550 ? 200 : 400;
  const desktopSoftSize = window.innerWidth > 550 ? 200 : 900;

  return (
    <div className="mt-20 mb-10 grid xl:grid-cols-2 grid-cols-1 xl:gap-4 gap-10">
      <motion.div
        variants={slideCotainerVariant}
        animate={scrollY > SlideScreenSize ? "visible" : "hidden"}
      >
        <div>
          <TitleDescriptionBlock
            title="How FarmVest Works"
            specialWord="FarmVest"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
            titleAdditionalStyle="w-96 text-start"
            descripAddStyle="w-96"
          />
          <div>
            {benefitsItems.map((item: any, index: number) => {
              return (
                <Benefits
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={opacityCotainerVariant}
        animate={scrollY > desktopSoftSize ? "visible" : "hidden"}
      >
        <div
          className={`bg-[#FFFFFF] bg-opacity-10 rounded-lg p-10 mt-5 xl:mx-0 mx-2 relative  `}
        >
          <img src={howWorkImg} alt="how it work" className="rounded-lg" />
          <Ellipse firstPosition="top-0 left-10" />
        </div>
      </motion.div>
    </div>
  );
};

export default HowWork;
