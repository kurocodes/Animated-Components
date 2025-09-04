import { motion } from "motion/react";
import BaseCard from "./BaseCard";
import { useState } from "react";
import { mai_san_images } from "../../assets/assets";

export default function AuraParticleCard() {
  const [hovered, setHovered] = useState(false);

  const colors = [
  "radial-gradient(circle, rgba(255,182,193,0.9) 0%, rgba(255,182,193,0) 70%)", // pink
  "radial-gradient(circle, rgba(186,85,211,0.9) 0%, rgba(186,85,211,0) 70%)",   // purple
  "radial-gradient(circle, rgba(135,206,250,0.9) 0%, rgba(135,206,250,0) 70%)"  // blue
];


  return (
    <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
      <BaseCard
        img={mai_san_images[0]}
        // whileHover={{ scale: 1.05 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      />
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none rounded-4xl"
        animate={{ opacity: hovered ? 1 : 0 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${10 + Math.random() * 10}px`,
              height: `${10 + Math.random() * 10}px`,
              background: colors[Math.floor(Math.random() * colors.length)],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            //   filter: "blur(2px)",
            }}
             animate={{
              x: [0, (Math.random() - 0.5) * 40, 0],
              y: [0, (Math.random() - 0.5) * 40, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
