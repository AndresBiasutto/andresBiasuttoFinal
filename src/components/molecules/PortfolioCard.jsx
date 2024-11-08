/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import imgUrls from "../../data/imgUrls";

const PortfolioCard = ({
  name,
  img,
  description,
  technologies,
  links,
  // state,
}) => {
  const sBackground= imgUrls.sBackground;
  const {link, github}= imgUrls.icons;
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
          className="  absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-2 opacity-70 -translate-x-full group-hover:translate-x-0 transition-transform duration-200"
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
                <ul className=" grid grid-cols-3 grid-rows-4 gap-4">
                  {technologies.map((tech, i) => (
                    <span key={i}>{tech} </span>
                  ))}
                </ul>
              </div>
              <div className="w-full h-full flex items-end justify-center gap-2">
                <Link  className=" hover:scale-105" to={links[1]} target="_blank" > <img className="h-9 w-9" src={github} /> </Link>
                <Link  className=" hover:scale-105" to={links[0]} target="_blank" > <img className="h-9 w-9" src={link} /> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PortfolioCard;

//
