/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import imgUrls from "../../data/imgUrls";
import LinkButton from "../../layouts/LinkButton";

const PortfolioCard = ({
  name,
  img,
  description,
  technologies,
  links,
  // state,
}) => {
  const sBackground = imgUrls.sBackground;
  const { link, github } = imgUrls.icons;
  const { t } = useTranslation();

  return (
    <div
      target="_blank"
      rel="noreferrer"
      href={links[0]}
      className="group relative w-full h-full overflow-hidden"
    >
      <img
        src={img}
        className="w-full h-full object-cover scale-125 sepia-[.25] group-hover:scale-100 group-hover:blur-md group-hover:sepia duration-150"
      />
      <div
        className="  absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-2 opacity-70 -translate-x-full group-hover:translate-x-0 transition-transform duration-200 overflow-hidden"
        style={{ backgroundImage: `url(${sBackground})` }}
      >
        <div className="w-full h-full grid grid-cols-2">
          <div className="w-full p-2 h-full overflow-y-scroll">
            <h4 className=" ">{name}</h4>
            <p className=""> {description} </p>
          </div>

          <div className="p-2 flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-start">
              <h4>Tecnologias</h4>
              <ul className=" grid grid-cols-3 grid-rows-4 gap-1 md:gap-4">
                {technologies.map((tech, i) => (
                  <span className=" text-nowrap" key={i}>{tech} </span>
                ))}
              </ul>
            </div>
            <div className="w-full h-full flex flex-row items-end justify-center gap-2">
              <LinkButton icon={github} message={t("linkBtns.gitLink")} download={links[1]} />
              <LinkButton icon={link} message={t("linkBtns.PortfolioLink")} download={links[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

//
