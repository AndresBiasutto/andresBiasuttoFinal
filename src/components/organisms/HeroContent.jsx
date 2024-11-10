import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Title from "../molecules/HeroTitle";

import { motion } from "framer-motion";
import UseViewPortSize from "../../hooks/UseViewPortSize";

import imgUrls from "../../data/imgUrls";
import { useTranslation } from "react-i18next";
import ImageInMotion from "../atoms/ImageInMotion";

const HeroContent = () => {
  const {background, ball, defender1, defender2, player}= imgUrls.hero
  const { scrollYProgress } = useScroll();
  const stadiumYLg = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const stadiumYSm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const stadiumScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -999]);
  const playerYLg = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const playerYSm = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const ballYLg = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const ballYSm = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const def1xLg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const def1xSm = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const def2Lg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const def2Sm = useTransform(scrollYProgress, [0, 1], [0, -25]);

  const [skillName, setSkillName] = useState("");
  const backgoundTransform = UseViewPortSize(stadiumYSm, stadiumYLg);
  const playerTransform = UseViewPortSize(playerYSm, playerYLg);
  const ballTransform = UseViewPortSize(ballYSm, ballYLg);
  const def1Transform = UseViewPortSize(def1xSm, def1xLg);
  const def2Transform = UseViewPortSize(def2Sm, def2Lg);

  const { t } = useTranslation();

  useEffect(() => {
    const aboutMe = [t("hero.title1"),t("hero.title2"), t("hero.title3"), t("hero.title4")];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setSkillName(aboutMe[currentIndex]);
      currentIndex = (currentIndex + 1) % aboutMe.length;
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      id="inicio"

    >
      <ImageInMotion
        src={background}
        style={{ y: backgoundTransform, scale: stadiumScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 lg:-bottom-36 left-0 w-full"
      />
      <ImageInMotion
        src={defender2}
        style={{ y: def2Transform, x: def1Transform, scale: stadiumScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 lg:-bottom-36 left-0 w-full"
      />
      <Title
        style={{ y: titleY }}
        skillName={skillName}
      />
      <ImageInMotion
        src={player}
        style={{ y: playerTransform, scale: stadiumScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 lg:-bottom-36 left-0 w-full"
      />
      <ImageInMotion
        src={ball}
        style={{ y: ballTransform, scale: stadiumScale }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 lg:-bottom-36 left-0 w-full"
      />
      <ImageInMotion
        src={defender1}
        style={{ y: def1Transform }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 lg:-bottom-36 left-0 w-full"
      />
    </motion.section>
  );
};

export default HeroContent;
