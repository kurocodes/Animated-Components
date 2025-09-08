import { motion } from "motion/react";
import BaseNavbar from "./BaseNavbar";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StaggeredNavbar() {
  return (
    <BaseNavbar
      // parent animation
      as={motion.nav}
      initial="hidden"
      animate="show"
      variants={containerVariants}
      // links with stagger effect
      renderLink={(link, i, linkClassName) => (
        <motion.a
          key={i}
          className={`${linkClassName} relative px-3 py-2 font-medium text-gray-700 hover:text-black cursor-pointer`}
          variants={linkVariants}
        >
          {link}
        </motion.a>
      )}
    />
  );
}
