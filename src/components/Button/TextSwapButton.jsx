import { motion } from "motion/react";
import { useState } from "react";

export default function TextSwapButton() {
  const [swap, setSwap] = useState(false);

  return (
    <motion.button
      className="relative z-0 overflow-hidden min-w-32 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full shadow-md cursor-pointer perspective-normal font-dobidoo"
      onMouseEnter={() => setSwap(true)}
      onMouseLeave={() => setSwap(false)}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: 600 }}
    >
      {/* Front text */}
      <motion.span
        className="absolute top-1/2 -translate-y-[45%] inset-0 flex items-center justify-center origin-bottom"
        initial={{ rotateX: 0, opacity: 1 }}
        animate={{ rotateX: swap ? "-90deg" : 0, opacity: swap ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: swap ? 0 : 0.15 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        Click Me
      </motion.span>

      {/* Back text */}
      <motion.span
        className="absolute top-1/2 -translate-y-[45%] inset-0 flex items-center justify-center origin-bottom"
        initial={{ rotateX: "-90deg", opacity: 0 }}
        animate={{ rotateX: swap ? 0 : "-90deg", opacity: swap ? 1 : 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: swap ? 0.15 : 0,
        }}
        style={{ backfaceVisibility: "hidden" }}
      >
        Let’s Go!
      </motion.span>
    </motion.button>
  );
}
