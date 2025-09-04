import { motion } from "motion/react";
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

function MorphButton({ variant = "primary", text, icon: Icon, onClick }) {
  const {
    color,
    hover,
    text: defaultText,
    icon: DefaultIcon,
  } = variants[variant] || variants.primary;

  const buttonText = text || defaultText;
  const ButtonIcon = Icon || DefaultIcon;

  return (
    <motion.button
      className={`relative overflow-hidden px-5 py-2 font-medium flex 
                  items-center gap-2 text-white shadow-sm cursor-pointer`}
      onClick={onClick}
      initial={{ borderRadius: "50px" }}
      whileHover={{ borderRadius: "10px" }}
      whileTap={{ scale: 0.95, borderRadius: "50px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <ButtonIcon className="text-lg relative z-10" />
      <span className="relative z-10">{buttonText}</span>

      <motion.div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          backgroundSize: "200% 200%",
        }}
        initial={{ backgroundPosition: "0% 50%" }}
        whileHover={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.button>
  );
}

export default function MorphButtons() {
  return (
    <div className="flex gap-4">
      <MorphButton
        variant="primary"
        onClick={() => console.log("Send clicked!")}
      />
      <MorphButton
        variant="success"
        onClick={() => console.log("Confirmed!")}
      />
      <MorphButton variant="danger" onClick={() => console.log("Deleted!")} />
    </div>
  );
}
