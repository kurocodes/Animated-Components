import { useState } from "react";
import BaseCard from "./BaseCard";
import { motion } from "motion/react";
import { mai_san_images } from "../../assets/assets";

export default function MagnetoCard() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const clamp = (value, max) => {
    return Math.max(Math.min(value, max), -max);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = x - centerX;
    const offsetY = y - centerY;

    const moveX = clamp(offsetX, 20);
    const moveY = clamp(offsetY, 20);

    setOffset({ x: moveX, y: moveY });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <BaseCard
        img={mai_san_images[3]}
        animate={{ x: offset.x, y: offset.y }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        style={{ cursor: "none" }}
      />
    </motion.div>
  );
}
