import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ImageInMotion = ({ src, style, className, transition, alt = "" }) => (
  <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    style={style}
    transition={transition}
    className={className}
    src={src}
    alt={alt}
  />
);

ImageInMotion.propTypes= {
    src: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    transition: PropTypes.object,
    alt: PropTypes.string
}

export default ImageInMotion;
