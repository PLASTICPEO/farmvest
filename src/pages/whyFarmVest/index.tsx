import CustomButton from "../../components/button";
import TitleDescriptionBlock from "../../components/titleDescriptionBlock";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const WhyFarmVest = () => {
  const [selectedId, setSelectedId] = useState(null);

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        straggerChildren: 2,
        duration: 2,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 5 },
    },
  };

  const secChildVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 5 },
    },
  };

  return (
    <div className="flex justify-center w-full xl:h-screen h-full bg-[#263238]">
      <div className="container mx-auto">
        <AnimatePresence>
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="w-96 mx-auto">
              <TitleDescriptionBlock
                title="About FarmVest"
                specialWord="F"
                description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque neque quae sed itaque facere est atque iste eos dolore
                  praesentium voluptatibus veritatis velit, vitae officiis
                  dolorum fuga a modi. Obcaecati?"
                descripAddStyle="text-center"
              />
            </div>

            <motion.div variants={childVariant}>
              <div className="text-[#FFFFFF] grid xl:grid-cols-2 grid-cols-1 xl:gap-15 gap-10">
                <p className="border-r-[1px] border-[#FFFFF] p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque neque quae sed itaque facere est atque iste eos dolore
                  praesentium voluptatibus veritatis velit, vitae officiis
                  dolorum fuga a modi. Obcaecati?
                </p>
                <p className="border-r-[1px] border-[#FFFFF] p-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque neque quae sed itaque facere est atque iste eos dolore
                  praesentium voluptatibus veritatis velit, vitae officiis
                  dolorum fuga a modi. Obcaecati?
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque neque quae sed itaque facere est atque iste eos
                    dolore praesentium voluptatibus veritatis velit, vitae
                    officiis dolorum fuga a modi. Obcaecati? Lorem ipsum, dolor
                  </span>
                </p>
                <p className="border-b-[1px] border-[#FFFFF] p-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque neque quae sed itaque facere est atque iste eos dolore
                  praesentium voluptatibus veritatis velit, vitae officiis
                  dolorum fuga a modi. Obcaecati?
                </p>
              </div>
              <Link to="/" className="flex items-center justify-center my-10">
                <CustomButton title="Back to home" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WhyFarmVest;
