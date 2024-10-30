import HeroAnimatedTiltle from "../atoms/HeroAnimatedTiltle";
import PropTypes from "prop-types";


const HeroSkills = ({ skillName }) => <HeroAnimatedTiltle key={skillName}>{skillName}</HeroAnimatedTiltle>;

HeroSkills.propTypes = {
    skillName: PropTypes.string,
  };

export default HeroSkills;
