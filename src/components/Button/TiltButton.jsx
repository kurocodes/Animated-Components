import { useState } from "react";
import { motion } from "motion/react";

export default function TiltButton() {
  const maxTilt = 10;

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseOver = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = (x / rect.width) * 2 - 1;
    const yRatio = (y / rect.height) * 2 - 1;
    const rotateX = -(yRatio * maxTilt);
    const rotateY = xRatio * maxTilt;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-distant">
      <motion.button
        className="px-6 py-3 rounded-xl font-extrabold tracking-widest uppercase text-white border border-cyan-400 
             bg-gradient-to-r from-cyan-500 to-blue-600 
             shadow-[0_8px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(0,200,255,0.6)] 
             cursor-pointer select-none"
        onMouseMove={(e) => handleMouseOver(e)}
        onMouseLeave={() => handleMouseLeave()}
        style={{ rotateX: tilt.x, rotateY: tilt.y }}
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.95,
          rotateX: 0,
          rotateY: 0,
          boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        3D Tilt Button
      </motion.button>
    </div>
  );
}
