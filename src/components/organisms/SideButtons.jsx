import { useTranslation } from "react-i18next";
import ContactButton from "../atoms/ContactButton"
import CvDownloadButton from "../atoms/CvDownloadButton"

const SideButtons = () => {
  const { t } = useTranslation();

  return (
    <div className=" w-24 h-52 fixed top-24 right-0 flex flex-col justify-center items-center gap-2">
        <CvDownloadButton lang={t("lang")} message={t("linkBtns.cvLink")} />
        <ContactButton message={t("linkBtns.contactLink")} />
    </div>
  )
}

export default SideButtons