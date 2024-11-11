import smoothScroll from "../libs/smoothScroll";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const LinkButton = ({ scrollTo, download, icon, message }) => {
  return (
    <div className="w-20 h-20 relative group overflow-hidden">
      {" "}
      {/* Tamaño del contenedor ajustado */}
      <motion.a
        onClick={() => smoothScroll(scrollTo)}
        href={download}
        target={`${download && "_blank"}`}
        className="flex items-center justify-center w-full h-full rounded-full border-4 border-double bg-light-lightBackground hover:bg-light-background dark:bg-dark-darkBackground dark:hover:bg-dark-darkBackground border-light-accent dark:border-dark-accent transition overflow-hidden"
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
          className="w-16 h-16 cursor-pointer group-hover:scale-105 transition" // Tamaño del ícono ajustado
          src={icon}
        />
      </motion.a>
      <span className=" w-full px-0 text-center absolute -bottom-14 left-0 group-hover:bottom-7 opacity-0 group-hover:opacity-100 blur-md group-hover:blur-0 transition-all text-sm">
        {message}
      </span>
    </div>
  );
};

LinkButton.propTypes = {
  scrollTo: PropTypes.string,
  download: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.string,
};

export default LinkButton;
