import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AboutImageMotion = ({ src, style, className, transition }) => (
  <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    style={style}
    transition={transition}
    className={className}
    src={src}
  />
);

AboutImageMotion.propTypes= {
    src: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    transition: PropTypes.string
}

export default AboutImageMotion;
