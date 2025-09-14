import { motion, AnimatePresence } from "motion/react";

export default function BaseModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose()}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed top-1/2 left-1/2 max-w-lg w-full bg-white rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {children || <p>This is a modal content area.</p>}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
