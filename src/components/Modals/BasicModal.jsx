import { useState } from "react";
import BaseModal from "./BaseModal";
import { motion } from "motion/react";

export default function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        className="bg-white px-2 py-1 border border-gray-300 rounded cursor-pointer focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClose}
      >
        Basic Model
      </motion.button>

      <BaseModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
