import images from "../../data/imgUrls";
import cv from "../../assets/CV Andrés Biasutto.pdf";
import SideButton from "../../layouts/LinkButton";

const CvDownloadButton = () => {
  const cvIcon = images.icons.cv;
  return (
    <SideButton icon={cvIcon} download={cv} />
  );
};

export default CvDownloadButton;
