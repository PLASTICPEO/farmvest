import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import CustomButton from "../../components/button";
import github from "../../assets/photos/github-mark.svg";
import me from "../../assets/photos/aboutme.jpeg";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#FFFFFF]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex">
            <motion.div
              animate={{
                x: 0,
                y: 0,
                scale: 0.8,
                rotate: 0,
              }}
            >
              <div className="ml-8 space-y-4">
                <img src={me} alt="me" className="rounded-full h-40 w-40" />
                <div className="flex items-center space-x-2">
                  <img src={github} alt="github" className="w-8 h-8" />
                  <a href="https://github.com/PLASTICPEO">PLASTICPEO</a>
                </div>
              </div>
            </motion.div>

            <div className="m-4"></div>
          </div>
        </div>
        <Link to="/" className="flex items-center justify-center">
          <CustomButton title="Back to home" border />
        </Link>
      </div>
    </div>
  );
};
export default About;
