import { motion } from "motion/react";

const btnStyle =
  "px-6 py-2 rounded-full font-semibold uppercase tracking-wider text-cyan-400 border-2 border-cyan-400 bg-black cursor-pointer";

export default function NeonButton() {
  return (
    <motion.button
      className={btnStyle}
      whileHover={{
        boxShadow: [
          "0 0 0px cyan",
          "0 0 15px cyan",
          "0 0 5px cyan",
          "0 0 20px cyan",
          "0 0 25px cyan",
        ],
        textShadow: [
          "0 0 0px cyan",
          "0 0 15px cyan",
          "0 0 5px cyan",
          "0 0 20px cyan",
          "0 0 25px cyan",
        ],
        opacity: [1, 0.6, 1, 0.8, 1],
        transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 1] },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0 0 10px cyan",
        textShadow: "0 0 10px cyan",
      }}
    >
      Neon Button
    </motion.button>
  );
}
