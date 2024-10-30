import { useState, useEffect } from "react";

const UseViewPortSize = (smallTransform, largeTransform) => {
  const [transform, setTransform] = useState(largeTransform);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTransform(smallTransform);
      } else {
        setTransform(largeTransform);
      }
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [smallTransform, largeTransform]);

  return transform;
};

export default UseViewPortSize;
