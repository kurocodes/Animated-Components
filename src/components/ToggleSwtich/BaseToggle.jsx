import { useState } from "react";
import { motion } from "motion/react";

export default function BaseToggle({  }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-14 h-8 flex items-center p-1 rounded-full cursor-pointer ${
        isOn ? "bg-green-400" : "bg-gray-300"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        className="bg-white w-6 h-6 rounded-full shadow-md"
        animate={{ x: isOn ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}
