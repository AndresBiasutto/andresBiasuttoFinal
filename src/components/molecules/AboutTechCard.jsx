import PropTypes from "prop-types";
import LogoIcon from "../atoms/AboutLogoIcon";

const TechCard = ({ title, technologies }) => (
  <div className="w-auto h-full flex flex-col justify-start items-center">
    <h4>{title}</h4>
    <div className="w-full flex flex-col justify-start items-center gap-2">
      {technologies.map((tech) => (
        <LogoIcon key={tech.label} src={tech.src} label={tech.label} />
      ))}
    </div>
  </div>
);

TechCard.propTypes = {
    title: PropTypes.string,
    technologies: PropTypes.number,
  };

export default TechCard;
