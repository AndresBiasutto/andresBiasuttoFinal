import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const FadeEffect = ({ children }) => {
  return (
    <motion.div
      className="overflow-hidden w-full h-full"
      initial={{
        opacity: 0,
        x: 300,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0,
      }}
      viewport={{
        margin: "-200px",
        amount: "all",
      }}
    //   onViewportEnter={() => console.log("entro")}
    //   onViewportLeave={() => console.log("sejué!")}
    >
      {children}
    </motion.div>
  );
};

export default FadeEffect;
