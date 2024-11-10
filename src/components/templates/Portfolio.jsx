import PortfolioCard from "../molecules/PortfolioCard";
import portfolioData from "../../data/portfolioData";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
   const sml= t("portfolio.sml.description")
   const campus= t("portfolio.campus.description")
   const lds= t("portfolio.lds.description")
   const shami= t("portfolio.shami.description")
   const descriptions= [sml, campus, lds, shami]
  return (
    <div id="portfolio" className=" h-[200vh] w-full bg-light-background dark:bg-dark-background">
      <div className=" h-full w-full mt-10 grid grid-cols-6 grid-rows-6 gap-2">
        <div className="w-full h-full flex justify-center items-center col-span-6 row-span-1">
          <h2>{t("portfolio.sectionTitle")} </h2>
        </div>
        <div className=" col-span-6 row-span-5">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-full gap-1 overflow-hidden ">
            {portfolioData.map((data, i) => (
              <PortfolioCard
               key={i} 
               name={data.name} 
               img={data.img}  
               type={data.type}
               description={descriptions[i]}
               technologies={data.technologies}
               links={data.links}
               state={data.state}
               />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
