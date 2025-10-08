import { useState } from "react";
import { motion } from "motion/react";
import BaseModal from "./BaseModal";

export default function SizeVariantsModalView() {
  const [activeModal, setActiveModal] = useState(null);

  const sizeVariants = [
    {
      size: "sm",
      name: "Small",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      size: "md",
      name: "Medium",
      color: "bg-slate-900 dark:bg-slate-200 hover:bg-slate-800 hover:dark:bg-slate-300 text-white dark:text-slate-900 font-medium",
    },
    {
      size: "lg",
      name: "Large",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      size: "xl",
      name: "Extra Large",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
  ];

  const openModal = (type) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {sizeVariants.map((variant) => (
          <motion.button
            className={`px-4 py-2 text-sm text-white rounded-md cursor-pointer focus:outline-none ${variant.color}`}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(variant.size)}
          >
            {variant.name} Modal
          </motion.button>
        ))}
      </div>

      {/* Small Modal */}
      <BaseModal
        isOpen={activeModal === "sm"}
        onClose={closeModal}
        title="Small Modal (sm)"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Perfect for confirmations and simple alerts. Max width: 448px
            (28rem).
          </p>
          <div className="flex justify-end space-x-2">
            <button
              className="bg-[hsl(220,15%,90%)] hover:bg-[hsl(220,15%,80%)] dark:bg-[hsl(220,15%,20%)] hover:dark:bg-[hsl(220,15%,30%)] px-3 py-1.5 rounded-md cursor-pointer"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className={`${sizeVariants[0].color} text-white text-sm px-3 py-1.5 rounded-md cursor-pointer`}
              onClick={closeModal}
            >
              Confirm
            </button>
          </div>
        </div>
      </BaseModal>

      {/* Medium Modal */}
      <BaseModal
        isOpen={activeModal === "md"}
        onClose={closeModal}
        title="Medium Modal (md)"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Default size, good for most content. Max width: 512px (32rem).
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Sample Content</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This is the standard modal size that works well for most use cases
              including forms, notifications, and general content.
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className={`${sizeVariants[1].color} text-white text-sm px-3 py-1.5 rounded-md cursor-pointer`}
              onClick={closeModal}
            >
              Got it
            </button>
          </div>
        </div>
      </BaseModal>

      {/* Large Modal */}
      <BaseModal
        isOpen={activeModal === "lg"}
        onClose={closeModal}
        title="Large Modal (lg)"
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Great for detailed information and forms. Max width: 672px (42rem).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Feature 1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Large modals provide more space for complex layouts and detailed
                information.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Feature 2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Perfect for multi-column layouts and comprehensive forms.
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className={`${sizeVariants[2].color} text-white text-sm px-3 py-1.5 rounded-md cursor-pointer`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </BaseModal>

      {/* Extra Large Modal */}
      <BaseModal
        isOpen={activeModal === "xl"}
        onClose={closeModal}
        title="Extra Large Modal (xl)"
        size="xl"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Best for complex layouts and extensive content. Max width: 896px
            (56rem).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Item {item}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Extra large modals can accommodate extensive content and
                  complex data presentations.
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className={`${sizeVariants[2].color} text-white text-sm px-3 py-1.5 rounded-md cursor-pointer`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </BaseModal>
    </div>
  );
}
