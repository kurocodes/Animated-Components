import { useState } from "react";
import { motion } from "motion/react";

const btnStyle =
  "relative min-w-40 h-12 px-8 bg-black text-orange-400 font-semibold rounded-full shadow-lg overflow-hidden cursor-pointer border-2 border-orange-500";

export default function FireTrailButton() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // relative X
    const y = e.clientY - rect.top; // relative Y
    setCoords({ x, y });
  };

  return (
    <motion.button
      className={btnStyle}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
    >
      {/* 🔥 Fire trail glow */}
      <motion.div
        className="absolute -translate-x-1/2 w-20 h-20 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,0,0.7), rgba(255,69,0,0.3), transparent)",
          filter: "blur(20px)",
        }}
        animate={{
          x: coords.x - 40, // offset center of glow
          y: coords.y - 40,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Button text */}
      <span className="relative z-10">Fire Trail 🔥</span>
    </motion.button>
  );
}
