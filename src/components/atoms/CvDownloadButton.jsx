import images from "../../data/imgUrls";
import cvEs from "../../assets/CV Andrés Biasutto.pdf";
import cvEng from "../../assets/Andrés Biasutto CV eng.pdf";
import SideButton from "../../layouts/LinkButton";
import PropTypes from "prop-types";

const CvDownloadButton = ({lang, message}) => {
  const cvIcon = images.icons.cv;
  return (
    <SideButton icon={cvIcon} download={lang === "En"? cvEng :cvEs} message={message} />
  );
};

CvDownloadButton.propTypes={
  lang: PropTypes.string,
  message: PropTypes.string
}

export default CvDownloadButton;
