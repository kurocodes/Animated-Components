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

export default function UnderlineNavbar({ variant = ["center", "center"] }) {
  const [from = "center", to = "center"] = variant || [];

  const underlineVariants = {
    rest: { scaleX: 0, transformOrigin: from },
    hover: { scaleX: 1, transformOrigin: to },
  };

  return (
    <BaseNavbar
      renderLink={(link, i, linkClassName) => (
        <motion.a
          key={i}
          className={`${linkClassName} relative px-3 py-2 font-medium cursor-pointer`}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {link}

          {/* underline */}
          <motion.span
            className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            variants={underlineVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.a>
      )}
    />
  );
}
