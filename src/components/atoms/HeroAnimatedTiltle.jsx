// src/components/atoms/TextWithAnimation.js
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HeroAnimatedTitle = ({ children, key }) => (
  <motion.span
    key={key}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2, ease: "easeIn" }}
    className=" text-3xl mb-3"
  >
    {children}
  </motion.span>
);

HeroAnimatedTitle.propTypes = {
  children: PropTypes.element,
  key: PropTypes.string,
};

export default HeroAnimatedTitle;
