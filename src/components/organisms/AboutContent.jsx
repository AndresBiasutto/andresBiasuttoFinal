// src/components/organisms/AboutContent.js
import { useScroll, useTransform } from "framer-motion";
import ImageMotion from "../atoms/AboutImageMotion";
import Cloud from "../molecules/AboutCloud";
import TechCard from "../molecules/AboutTechCard";
import UseViewPortSize from "../../hooks/UseViewPortSize";
import { motion } from "framer-motion";
import { languages, frameworks, databases, orm } from "../../data/aboutData.js";
import imgUrls from "../../data/imgUrls.js";

const AboutContent = () => {
  const {cloud1, cloud2, airship, atomicMan}=imgUrls.about;
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

  return (
    <motion.div
      id="about"
      style={{ backgroundColor: skyColor }}
      className="relative w-full h-[170vh] overflow-hidden"
    >
      <Cloud src={cloud1} yTransform={cloud1Y} scaleTransform={cloudScale} />
      <Cloud src={cloud2} yTransform={cloud2Y} scaleTransform={cloudScale} />
      <ImageMotion
        src={airship}
        style={{ x: airshipX, y: airshipY, scale: airshipScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 lg:-bottom-20 left-0 w-full"
      />
      <ImageMotion
        src={atomicMan}
        style={{ y: atomicYTransform, scale: atomicScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute -bottom-24 lg:-bottom-52 left-0 w-full"
      />
      <motion.div  className=" absolute top-1/2 left-1/2 bottom-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-min w-full lg:w-2/4 p-4 my-5 bg-light-background/80 dark:bg-dark-darkBackground/80 border-4 border-double border-orange-950">
        
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <img
            className="w-32 h-32 rounded-full border-4 border-double border-orange-950 object-cover"
            src="https://avatars.githubusercontent.com/u/70040532?v=4"
          />
          <p className=" bg-dark-primary/45 dark:bg-dark-background/45 px-1">
          Soy desarrollador web full stack freelancer con un enfoque en el front end y una sólida base en UX/UI. Apasionado por la creación de experiencias visuales atractivas, combino habilidades en ilustración y diseño para construir interfaces intuitivas que destacan tanto en funcionalidad como en estética.
          </p>
          <div className="w-full h-full flex flex-col items-center justify-start gap-2">
            <h3>Tecnologías</h3>
            <div className=" z-10 w-full h-full grid grid-cols-4 gap-4 p-4">
              <TechCard title="Lenguajes" technologies={languages} />
              <TechCard title="Frameworks" technologies={frameworks} />
              <TechCard title="Datos" technologies={databases} />
              <TechCard title="Orm" technologies={orm} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
