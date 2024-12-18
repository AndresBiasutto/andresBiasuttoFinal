import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ImageInMotion = ({ src, style, className, transition }) => (
  <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    style={style}
    transition={transition}
    className={className}
    src={src}
  />
);

ImageInMotion.propTypes= {
    src: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    transition: PropTypes.string
}

export default ImageInMotion;