import { motion, AnimatePresence } from "motion/react";

export default function BaseModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-1/2 max-w-lg w-full bg-white border border-gray-300 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {children || (
              <>
                <div className="px-4 py-3 flex items-center justify-between border-b border-gray-300">
                  <h2 className="text-lg font-bold">Basic Modal</h2>
                  <button className="hover:bg-gray-300 p-1 rounded-md cursor-pointer" onClick={onClose}>
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-gray-500">
                    This is a basic modal example. You can put any content here.
                    The modal will close when you click the X button, press ESC,
                    or click outside the modal.
                  </p>
                  <div className="w-full flex justify-end">
                    <button className="bg-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={onClose}>Close</button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
