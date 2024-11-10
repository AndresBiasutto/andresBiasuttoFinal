// src/components/organisms/AboutContent.js
import { useScroll, useTransform } from "framer-motion";
import ImageInMotion from "../atoms/ImageInMotion.jsx";
import Cloud from "../molecules/AboutCloud";
import TechCard from "../molecules/AboutTechCard";
import UseViewPortSize from "../../hooks/UseViewPortSize";
import { motion } from "framer-motion";
import { languages, frameworks, databases, orm } from "../../data/aboutData.js";
import imgUrls from "../../data/imgUrls.js";
import { useTranslation } from "react-i18next";

const AboutContent = () => {
  const { cloud1, cloud2, airship, atomicMan, img } = imgUrls.about;
  const { scrollYProgress } = useScroll();
  const cloud1Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cloudScale = useTransform(scrollYProgress, [0, 1], [2, 0.4]);
  const atomicYSm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const atomicYLg = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const atomicScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const airshipY = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const airshipX = useTransform(scrollYProgress, [0.2, 1], [-500, 2000]);
  const airshipScale = useTransform(scrollYProgress, [0, 1], [0.2, 1.3]);
  const skyColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    ["#8C8881", "#000000", "#D9D1C7"]
  );

  const atomicYTransform = UseViewPortSize(atomicYSm, atomicYLg);
  const { t } = useTranslation();
  return (
    <motion.div
      id="about"
      style={{ backgroundColor: skyColor }}
      className="relative w-full h-[170vh] overflow-hidden"
    >
      <Cloud src={cloud1} yTransform={cloud1Y} scaleTransform={cloudScale} />
      <Cloud src={cloud2} yTransform={cloud2Y} scaleTransform={cloudScale} />
      <ImageInMotion
        src={airship}
        style={{ x: airshipX, y: airshipY, scale: airshipScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 lg:-bottom-20 left-0 w-full"
      />
      <ImageInMotion
        src={atomicMan}
        style={{ y: atomicYTransform, scale: atomicScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute -bottom-24 lg:-bottom-52 left-0 w-full"
      />
      <motion.div className=" absolute top-1/2 left-1/2 bottom-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-min w-full lg:w-2/4 p-4 my-5 bg-light-background/80 dark:bg-dark-darkBackground/80 border-4 border-double border-light-accent dark:border-dark-accent">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <img
            className="w-32 h-32 rounded-full border-4 border-double border-light-accent dark:border-dark-accent object-cover"
            src={img}
          />
          <p className=" bg-dark-primary/45 dark:bg-dark-background/45 px-1">
            {t("about.aboutMe")}
          </p>
          <div className="w-full h-full flex flex-col items-center justify-start gap-2">
            <h3>{t("about.techTitle")}</h3>
            <div className=" z-10 w-full h-full grid grid-cols-4 gap-4 p-4">
              <TechCard title={t("about.techTypeTitles.lang")} technologies={languages} />
              <TechCard title={t("about.techTypeTitles.frame")} technologies={frameworks} />
              <TechCard title={t("about.techTypeTitles.data")} technologies={databases} />
              <TechCard title={t("about.techTypeTitles.orm")} technologies={orm} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
