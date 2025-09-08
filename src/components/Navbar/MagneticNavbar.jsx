import { useState } from "react";
import BaseNavbar from "./BaseNavbar";
import { motion } from "motion/react";

export default function MagneticNavbar() {
  return (
    <BaseNavbar
      renderLink={(link, i, linkClassName) => (
        <MagneticLink key={i} link={link} linkClassName={linkClassName} />
      )}
    />
  );
}

function MagneticLink({ link, linkClassName }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = x - centerX;
    const offsetY = y - centerY;

    const strength =
      0.15 * (1 - Math.min(Math.hypot(offsetX, offsetY) / 100, 1));
    const moveX = offsetX * strength;
    const moveY = offsetY * strength;

    setOffset({ x: moveX, y: moveY });
  };

  return (
    <motion.a
      className={`${linkClassName} px-3 py-2 font-medium text-gray-700 hover:text-violet-500 transition-colors duration-200`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileHover={{ scale: 1.05 }}
      animate={{ x: offset.x, y: offset.y, rotate: offset.x * 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {link}
    </motion.a>
  );
}
