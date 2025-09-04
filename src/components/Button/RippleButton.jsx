import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaCheck, FaTrash, FaPaperPlane } from "react-icons/fa";

const variants = {
  primary: {
    color: "bg-blue-600",
    hover: "hover:bg-blue-700",
    text: "Send",
    icon: FaPaperPlane,
  },
  success: {
    color: "bg-emerald-500",
    hover: "hover:bg-emerald-600",
    text: "Confirm",
    icon: FaCheck,
  },
  danger: {
    color: "bg-rose-500",
    hover: "hover:bg-rose-600",
    text: "Delete",
    icon: FaTrash,
  },
};

function RippleButton({ variant = "primary", text, icon: Icon, onClick }) {
  const [ripple, setRipple] = useState({ key: 0, x: 0, y: 0, radius: 0 });
  const {
    color,
    hover,
    text: defaultText,
    icon: DefaultIcon,
  } = variants[variant] || variants.primary;

  const buttonText = text || defaultText;
  const ButtonIcon = Icon || DefaultIcon;

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
    <motion.button
      className={
        `relative overflow-hidden px-5 py-2 rounded-xl font-medium flex 
         items-center gap-2 text-white shadow-sm 
          ${color} ${hover}
        `}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      <ButtonIcon className="text-lg" />
      <span>{buttonText}</span>
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
          initial={{ opacity: 0.6, scale: 0 }}
          animate={{ opacity: 0, scale: 1.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </AnimatePresence>
    </motion.button>
  );
}

export default function RippleButtonsDemo() {
  return (
    <div className="flex gap-4">
      <RippleButton
        variant="primary"
        onClick={() => console.log("Send clicked!")}
      />
      <RippleButton
        variant="success"
        onClick={() => console.log("Confirmed!")}
      />
      <RippleButton variant="danger" onClick={() => console.log("Deleted!")} />
    </div>
  );
}
