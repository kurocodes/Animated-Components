import BaseToggle from "./BaseToggle";
import { motion } from "motion/react";

export default function GlowToggle() {
  return (
    <BaseToggle
      renderSwtich={(isOn) => (
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-md"
          animate={{
            x: isOn ? 24 : 0,
            boxShadow: isOn
              ? ["0 0 5px #00ffff", "0 0 20px #00ffff", "0 0 5px #00ffff"]
              : "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 20 },
            boxShadow: {
              duration: 2,
              repeat: isOn ? Infinity : 0,
              repeatType: "loop",
            },
          }}
        ></motion.div>
      )}
    />
  );
}
