import { useState } from "react";
import { useTranslation } from "react-i18next";


const LangButton = () => {
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
    <button className="h-6 w-6  flex items-center justify-center" onClick={() => handleClick(toggle? "en": "es")}>
      { toggle ? (
        <h4 className=" font-bold italic ">es</h4>
      ) : (
        <h4 className=" font-bold italic ">en</h4>
      )}
    </button>
  </div>
  )
}

export default LangButton