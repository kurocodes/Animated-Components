import BaseToggle from "./BaseToggle";
import { motion } from "motion/react";

export default function MorphToggle() {
  return (
    <BaseToggle
    containerClassName="rounded-md"
      renderSwtich={(isOn) => (
        <motion.div
          className="w-6 h-6 bg-white shadow-md"
          animate={{ x: isOn ? 24 : 0, borderRadius: isOn ? 5 : 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        ></motion.div>
      )}
    />
  );
}
