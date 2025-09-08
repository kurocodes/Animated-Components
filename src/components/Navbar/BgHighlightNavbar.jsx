import { motion } from "motion/react";
import BaseNavbar from "./BaseNavbar";

export const variants = [
  ["center", "center"],
  ["center", "left"],
  ["center", "right"],
  ["left", "center"],
  ["left", "left"],
  ["left", "right"],
  ["right", "center"],
  ["right", "left"],
  ["right", "right"],
];

export default function BgHighlightNavbar ({ variant = ["left", "left"] }) {
  const [from = "center", to = "center"] = variant || [];

  const bgVariants = {
    rest: { scaleX: 0, opacity: 0, transformOrigin: from },
    hover: { scaleX: 1, opacity: 1, transformOrigin: to },
  };

  return (
    <BaseNavbar
      renderLink={(link, i, linkClassName) => (
        <motion.a
          key={i}
          className={`${linkClassName} relative group px-3 py-2 font-medium`}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">{link}</motion.span>

          {/* background */}
          <motion.span
            className="absolute z-0 left-0 bottom-0 h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            variants={bgVariants}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}

          />
        </motion.a>
      )}
    />
  );
}
