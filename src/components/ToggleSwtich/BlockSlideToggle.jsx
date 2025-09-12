import BaseToggle from "./BaseToggle";
import { motion } from "motion/react";

export default function BlockSlideToggle() {
  return (
    <BaseToggle
      containerClassName="p-2"
      renderSwtich={(isOn) => (
        <motion.div
          className="w-5 h-5 bg-white rounded-md shadow-md"
          animate={{
            x: isOn ? 22 : 0,
            rotate: isOn ? 15 : -15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      )}
    />
  );
}
