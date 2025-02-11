'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MaskText = ({ children }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({ y: "0", transition: { duration: 2, ease: [0.33, 1, 0.68, 1], delay: 1 * i } }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div variants={animation} initial="initial" animate={inView ? "enter" : ""}>
        {children}
      </motion.div>
    </div>
  );
}

export default MaskText;
