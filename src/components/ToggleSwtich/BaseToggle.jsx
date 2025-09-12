import { useState } from "react";
import { motion } from "motion/react";

export default function BaseToggle({
  containerClassName,
  toggleOnStyle = "bg-green-400",
  toggleOffStyle = "bg-gray-300",
  clickAction,
  renderSwtich,
  children,
  ...props
}) {
  const [isOn, setIsOn] = useState(false);

  return (
    <motion.div
      className={`relative w-14 h-8 flex items-center p-1 rounded-full overflow-hidden cursor-pointer ${
        isOn ? toggleOnStyle : toggleOffStyle
      } ${containerClassName}`}
      onClick={(e) => {
        setIsOn(!isOn);
        if (clickAction) clickAction(e);
      }}
      {...props}
    >
      {renderSwtich ? (
        renderSwtich(isOn)
      ) : (
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-md"
          animate={{ x: isOn ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        ></motion.div>
      )}

      {children}
    </motion.div>
  );
}
