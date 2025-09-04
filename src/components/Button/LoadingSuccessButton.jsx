import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { icons } from "../../assets/assets";
import { ClipLoader } from "react-spinners";

export default function LoadingSuccessButton() {
  const [status, setStatus] = useState("idle");

  const handleClick = () => {
    if (status !== "idle") return; // prevent spam clicks
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000); // fake async complete
    setTimeout(() => setStatus("idle"), 4000); // reset after showing success
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative min-w-32 h-12 px-6 bg-green-500 text-white font-semibold rounded-full shadow-md flex items-center justify-center overflow-hidden cursor-pointer"
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {/* Idle State */}
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            Submit
          </motion.span>
        )}

        {/* Loading State */}
        {status === "loading" && (
          <motion.span className="mt-2" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
            <ClipLoader color="#fff" size={25} />
          </motion.span>
        )}

        {/* Success State */}
        {status === "success" && (
          <motion.img
            key="success"
            src={icons.check}
            alt="Check"
            className="w-6 h-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
