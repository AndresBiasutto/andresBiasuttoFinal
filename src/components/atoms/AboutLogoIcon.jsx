import PropTypes from "prop-types";

const LogoIcon = ({ src, label }) => (
  <div className="flex flex-col items-center justify-center">
    <img src={src} className="w-12" alt={label} />
    <span>{label}</span>
  </div>
);

LogoIcon.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
};

export default LogoIcon;
