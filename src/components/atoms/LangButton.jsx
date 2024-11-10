import { useState } from "react";
import { useTranslation } from "react-i18next";
import img from "../../data/imgUrls"


const LangButton = () => {
    const flagEn= img.icons.enFlag;
    const flagEs= img.icons.esFlag;
    const [toggle, setToggle] = useState(false)
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

const handleClick= (lang)=>{
    changeLanguage(lang)
    setToggle(!toggle)
}
  return (
    <div className="flex space-x-2">
    <button className="h-6 w-6" onClick={() => handleClick(toggle? "en": "es")}>
      { toggle ? (
        <img className="h-6 w-6" src={flagEn} />
      ) : (
        <img className="h-6 w-6" src={flagEs} />
      )}
    </button>
  </div>
  )
}

export default LangButton