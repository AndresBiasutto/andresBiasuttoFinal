import PortfolioCard from "../molecules/PortfolioCard";
import portfolioData from "../../data/portfolioData";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { t } = useTranslation();
  const sml = t("portfolio.sml.description");
  const campus = t("portfolio.campus.description");
  const lds = t("portfolio.lds.description");
  const shami = t("portfolio.shami.description");
  const descriptions = [sml, campus, lds, shami];
  return (
    <div
      id="portfolio"
      className=" h-[200vh] w-full bg-light-background dark:bg-dark-background"
    >
      <div className=" h-full w-full mt-10 grid grid-cols-6 grid-rows-6 gap-2">
        <div className="w-full h-full flex justify-center items-center col-span-6 row-span-1">
          <h3>{t("portfolio.sectionTitle")} </h3>
        </div>
        <div className=" col-span-6 row-span-5">
          <div className="grid grid-cols-1 w-full h-full gap-1 overflow-hidden p-2 ">
            {portfolioData.map((data, i) => (
              <PortfolioCard
                key={i}
                name={data.name}
                img={data.img}
                type={data.type}
                description={descriptions[i + 1]}
                technologies={data.technologies}
                links={data.links}
                state={data.state}
              />
            ))}
            <div className="w-full overflow-hidden rounded-md h-64 border border-light-accent dark:border-dark-accent p-1">
              <h3>{t("Some academic works")} </h3>
              <div className="w-full h-full grid grid-cols-2 gap-2">
                <div className="w-full h-52 rounded-md border border-light-accent dark:border-dark-accent overflow-hidden flex flex-col justify-start items-center">
                  <h4>Sistema de gestión academica</h4>
                  <img
                    className=" rounded-md p-2 h-24 object-cover border-light-accent dark:border-dark-accent"
                    src="https://raw.githubusercontent.com/AndresBiasutto/TP_1_programacion/main/tpheader.jpg"
                  ></img>
                  <p>{"Trabajo final para primer año de Analisis de Sistemas (c#)"}</p>
                  <div className="flex justify-center items-center">
                    <Link
                      className="link"
                      to="https://github.com/AndresBiasutto/TP_1_programacion"
                      target="_blank"
                    >
                      repo
                    </Link>
                  </div>
                </div>
                <div className="w-full h-52 rounded-md border border-light-accent dark:border-dark-accent overflow-hidden flex flex-col justify-start items-center">
                  <h4>Maquetación web</h4>
                  <img
                    className=" rounded-md p-2 h-24 object-cover border-light-accent dark:border-dark-accent"
                    src="https://raw.githubusercontent.com/AndresBiasutto/porfolio/refs/heads/main/client/src/assets/portadaPorfolio.jpg?token=GHSAT0AAAAAADYPMKLEHBS7UQINXSLRMG222PVJSIA"
                  ></img>
                  <p>{"Trabajo práctco para segundo año de Analisis de Sistemas (maquetación, html, css, java script)"}</p>
                  <div className="flex justify-center items-center">
                    <Link
                      className="link"
                      to="https://github.com/AndresBiasutto/tp2-programacion"
                      target="_blank"
                    >
                      repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
