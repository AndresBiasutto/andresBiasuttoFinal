// src/components/molecules/Title.js
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import SkillText from "./HeroSkills";

const HeroTitle = ({ style, skillName }) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 20,
      transform: "skew(0deg, -8deg)",
      filter: "blur(6px)",
    }}
    animate={{
      opacity: 1,
      filter: ["blur(5px)", "blur(0)", "blur(5px)", "blur(0)"],
      transform: ["skew(0deg, -8deg) translateY(40px)"],
    }}
    style={style}
    transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
    whileInView={{
      opacity: 1,
      y: -50,
      transform: "translateY(-50px)",
    }}
    viewport={{
      margin: "-300px",
      amount: "all",
    }}
    className="absolute top-52 left-0 h-min w-full flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-light-lightBackground/80 from-10% via-light-secondary/80 via-30% to-light-lightBackground/80 to-90% dark:bg-dark-background rounded-md border-2 border-double border-gray-800 dark:border-gray-200 shadow-lg"
  >
    <div className="flex flex-col justify-center items-start">
      <motion.h1 className=" p-2 lg:scale-100 ">Andrés Biasutto</motion.h1>
      <div className=" w-full flex flex-col justify-center items-start">
        <SkillText skillName={skillName} />
      </div>
    </div>
  </motion.div>
);

HeroTitle.propTypes = {
  style: PropTypes.string,
  skillName: PropTypes.string,
  transition: PropTypes.any,
  variants: PropTypes.any,
};

export default HeroTitle;
