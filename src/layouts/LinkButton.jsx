import smoothScroll from "../libs/smoothScroll";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const LinkButton = ({ scrollTo, download, icon }) => {
  return (
    <motion.a
      onClick={() => smoothScroll(scrollTo)}
      href={download}
      target={`${download && "_blank"}`}
      className="relative group rounded-full border-4 border-double bg-light-lightBackground hover:bg-light-background dark:bg-dark-darkBackground dark:hover:bg-dark-darkBackground hover:scale-110 border-light-accent dark:border-dark-accent transition overflow-hidden  "
      initial={{
        x: "200px",
        opacity: 1,
        rotate: "720deg",
      }}
      animate={{
        x: "0",
        opacity: 1,
        rotate: "0",
      }}
      transition={{
        duration: 2,
        delay: 1,
      }}
    >
      <img
        alt="Curriculum Vitae Andrés Biasutto"
        className="w-10 h-10 cursor-pointer hover:scale-95"
        src={icon}
      />
    </motion.a>
  );
};

LinkButton.propTypes = {
  scrollTo: PropTypes.string,
  download: PropTypes.string,
  icon: PropTypes.string,
};

export default LinkButton;
