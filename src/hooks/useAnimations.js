import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export const useAnimatedInView = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    amount: "all",
    ...options,
  });

  return { ref, isInView };
};

export const useScrollProgress = () => {
  const scrollY = useMotionValue(0);
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", updateScrollY);
    return () => window.removeEventListener("scroll", updateScrollY);
  }, [scrollY]);

  return smoothY;
};

export const useParallax = (offset = 50) => {
  const { scrollYProgress } = useAnimatedInView();
  return useMotionValue(scrollYProgress.get() * offset);
};