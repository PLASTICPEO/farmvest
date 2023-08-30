import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import TitleDescriptionBlock from "../../components/titleDescriptionBlock";
import CustomButton from "../../components/button";

const containerVariant = {
  hidden: {
    opacity: 0,
    x: 100,
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
    transition: { duration: 2 },
  },
};

const WhyFarmVest = () => {
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
                title="Why choose FarmVest"
                specialWord="Why"
                description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque neque quae sed itaque facere est atque iste eos dolore
                  praesentium voluptatibus veritatis velit, vitae officiis
                  dolorum fuga a modi. Obcaecati?"
                descripAddStyle="text-center"
              />
            </div>

            <motion.div variants={childVariant}>
              <div className="text-[#FFFFFF] grid xl:grid-cols-2 grid-cols-1 xl:gap-15 gap-10 px-6">
                <p className="border-r-[1px] border-[#FFFFF]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque neque quae sed itaque facere est atque iste eos dolore
                  praesentium voluptatibus veritatis velit, vitae officiis
                  dolorum fuga a modi. Obcaecati?
                </p>
                <p className="border-r-[1px] border-[#FFFFF]">
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
                <p className="border-b-[1px] border-[#FFFFF] pb-4">
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
