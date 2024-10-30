import PropTypes from "prop-types";
import ImageMotion from "../atoms/AboutImageMotion";

const AboutCloud = ({ src, yTransform, scaleTransform }) => (
  <ImageMotion
    src={src}
    style={{ y: yTransform, scale: scaleTransform }}
    transition={{ duration: 2, delay: 1 }}
    className="absolute bottom-0 lg:-bottom-52 left-0 w-full"
  />
);

AboutCloud.propTypes = {
    src: PropTypes.string,
    yTransform: PropTypes.number,
    scaleTransform: PropTypes.number
  };

export default AboutCloud;
