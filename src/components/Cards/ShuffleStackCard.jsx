import { mai_san_images } from "../../assets/assets";
import BaseCard from "./BaseCard";
import { motion } from "motion/react";

export default function ShuffleStackCard() {
//   const cardVariants = {
//     stacked: (i) => ({ x: i * 2, y: i * 2, rotate: 0 }),
//     fanned: (i) => ({ x: i * 20, y: i * -10, rotate: i * 5 }),
//   };

  const cardVariants = {
    stacked: (i) => ({
      x: i * 2,
      y: i * 2,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        // delay: i * 0.05,
      },
    }),
    fanned: (i) => ({
      x: i * 40,
      y: i * -20,
      rotate: i * 6,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        // delay: i * 0.05,
      },
    }),
  };

  return (
    <motion.div className="relative" initial="stacked" whileHover="fanned">
      {[...mai_san_images].reverse().map((image, index) => (
        <BaseCard
          img={image}
          key={index}
          className="absolute -translate-1/2"
          custom={index}
          variants={cardVariants}
        ></BaseCard>
      ))}
    </motion.div>
  );
}
