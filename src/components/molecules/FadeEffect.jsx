import { motion } from "framer-motion";
import { pageTransition, defaultTransition } from "../../utils/animations";

const FadeEffect = ({ children }) => {
  return (
    <motion.div
      className="overflow-hidden w-full h-full"
      initial={pageTransition.initial}
      whileInView={pageTransition.animate}
      transition={defaultTransition}
      viewport={{
        margin: "-200px",
        amount: "all",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeEffect;