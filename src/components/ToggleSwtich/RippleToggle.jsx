import { useState } from "react";
import BaseToggle from "./BaseToggle";
import { motion, AnimatePresence } from "motion/react";

export default function RippleToggle() {
  const [ripple, setRipple] = useState({ key: 0, x: 0, y: 0, radius: 0 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const topLeft = Math.hypot(0 - x, 0 - y);
    const topRight = Math.hypot(rect.width - x, 0 - y);
    const bottomLeft = Math.hypot(0 - x, rect.height - y);
    const bottomRight = Math.hypot(rect.width - x, rect.height - y);
    const radius = Math.max(topLeft, topRight, bottomLeft, bottomRight);
    setRipple({ key: Date.now(), x, y, radius });
    if (onClick) onClick(e);
  };

  return (
    <BaseToggle clickAction={handleClick}>
      <AnimatePresence initial={false}>
        <motion.div
          key={ripple.key}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.radius * 2,
            height: ripple.radius * 2,
          }}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 1.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </BaseToggle>
  );
}
