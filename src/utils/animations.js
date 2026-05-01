export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInUp = {
  hidden: { y: 100 },
  visible: { y: 0 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, x: 300, filter: "blur(6px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0)" },
  exit: { opacity: 0, x: -300, filter: "blur(6px)" },
};

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

export const buttonTap = {
  scale: 0.95,
};

export const defaultTransition = {
  duration: 0.5,
  ease: "easeOut",
};

export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const parallaxConfigs = {
  hero: {
    stadiumY: { lg: -200, sm: -50 },
    stadiumScale: { from: 1, to: 1.4 },
    titleY: { from: 0, to: -999 },
    playerY: { lg: -500, sm: -70 },
    ballY: { lg: -450, sm: -75 },
    def1X: { lg: -100, sm: -25 },
    def2Y: { lg: -150, sm: -25 },
  },
};

export const scrollAnimationDefaults = {
  duration: 2,
  delay: 1,
};