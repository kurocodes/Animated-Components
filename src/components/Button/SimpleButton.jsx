import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function SimpleButtons() {
  const [rippleKey, setRippleKey] = useState(0);

  const btnBase =
    "font-medium shadow-sm transition-colors cursor-pointer focus:outline-none";

  return (
    <div className="flex flex-wrap gap-4">
      {/* Primary Button */}
      <motion.button
        className={`${btnBase} bg-blue-600 text-white hover:bg-blue-700 px-5 py-1.5 rounded-xl`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        Primary
      </motion.button>

      {/* Success Button */}
      <motion.button
        className={`${btnBase} bg-emerald-500 text-white hover:bg-emerald-600 px-5 py-1.5 rounded-xl`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Success
      </motion.button>

      {/* Danger Button */}
      <motion.button
        className={`${btnBase} bg-rose-500 text-white hover:bg-rose-600 px-5 py-1.5 rounded-xl`}
        whileHover={{ boxShadow: "0px 4px 14px rgba(244, 63, 94, 0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        Danger
      </motion.button>

      {/* Outline Button */}
      <motion.button
        className={`${btnBase} border border-emerald-500 text-emerald-600 bg-white hover:bg-emerald-50 px-5 py-1.5 rounded-xl`}
        initial={{ x: 0, rotate: 0 }}
        whileHover={{ opacity: 0.9 }}
        whileTap={{
          x: [0, -2, 2, 0],
          rotate: [0, -1, 1, 0],
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        Outline
      </motion.button>

      {/* Pulse Ripple Button */}
      {/* <motion.button
        className="relative overflow-hidden px-5 py-2 rounded-xl font-medium bg-emerald-500 hover:bg-emerald-600 text-white"
        onClick={() => setRippleKey(Date.now())}
        whileTap={{ scale: 0.95 }}
      >
        <span>Ripple</span>
        <AnimatePresence initial={false}>
          <motion.div
            key={rippleKey}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/40"
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </AnimatePresence>
      </motion.button> */}
    </div>
  );
}
