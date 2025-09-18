import { useState } from "react";
import BaseModal from "../components/Modals/BaseModal";
import { motion } from "motion/react";

export default function ModalsDemo() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        className="bg-white px-2 py-1 border border-gray-300 rounded cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClose}
      >
        Open Model
      </motion.button>

      {isOpen && (
        <BaseModal isOpen={isOpen} onClose={handleClose} />
      )}
    </>
  );
}
