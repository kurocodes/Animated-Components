import { useState } from "react";
import { motion } from "motion/react";
import BaseModal from "./BaseModal";

export default function AnimationModalView() {
  const [activeModal, setActiveModal] = useState(null);

  const animations = [
    {
      type: "scale",
      name: "Scale",
      description: "Smooth scale-in with spring physics",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      type: "slide",
      name: "Slide",
      description: "Slide down from top with a gentle bounce",
      color: "",
    },
    {
      type: "fade",
      name: "Fade",
      description: "Simple fade-in animation",
      color: "",
    },
    {
      type: "bounce",
      name: "Bounce",
      description: "Playful bounce with rotation",
      color: "",
    },
  ];

  const openModal = (type) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {animations.map((animation) => (
        <div key={animation.type} className="space-y-2">
          <motion.button
            className="bg-white px-2 py-1 w-full border border-gray-300 rounded cursor-pointer focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(animation.type)}
          >
            {animation.name} Animation
          </motion.button>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {animation.description}
          </p>
        </div>
      ))}

      {/* Scale Animation Modal */}
      <BaseModal
        isOpen={activeModal === "scale"}
        onClose={closeModal}
        title={`${animations[0].name} Animation`}
        animation="scale"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            This modal uses the <span className="font-semibold">scale</span>{" "}
            animation with spring physics. It scales from 75% to 100% with a
            gentle bounce effect and moves up slightly during the entrance.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
              Animation Properties:
            </h3>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Scale: 0.75 → 1.0</li>
              <li>• Y movement: 20px up</li>
              <li>• Spring damping: 25</li>
              <li>• Spring Stiffness: 300</li>
            </ul>
          </div>
        </div>
      </BaseModal>

      {/* Slide Animation Modal */}
      <BaseModal
        isOpen={activeModal === "slide"}
        onClose={closeModal}
        animation="slide"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            This modal uses the <span className="font-semibold">slide</span>{" "}
            animation. It slides down from above the viewport with a spring
            effect and slight scaling.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">
              Animation Properties:
            </h3>
            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>• Y movement: -50px → 0px</li>
              <li>• Scale: 0.95 → 1.0</li>
              <li>• Spring damping: 20</li>
              <li>• Spring stiffness: 300</li>
            </ul>
          </div>
        </div>
      </BaseModal>

      {/* Fade Animation Modal */}
      <BaseModal
        isOpen={activeModal === "fade"}
        onClose={closeModal}
        animation="fade"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            This modal uses the <span className="font-semibold">fade</span>{" "}
            animation. It's a simple, elegant opacity transition without any
            scaling or movement.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
              Animation Properties:
            </h3>
            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
              <li>• Opacity: 0 → 1</li>
              <li>• Duration: 0.3s</li>
              <li>• Easing: easeOut</li>
              <li>• No scaling or movement</li>
            </ul>
          </div>
        </div>
      </BaseModal>

      {/* Bounce Animation Modal */}
      <BaseModal
        isOpen={activeModal === "bounce"}
        onClose={closeModal}
        animation="bounce"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            This modal uses the <span className="font-semibold">bounce</span>{" "}
            animation. It's a playful entrance with rotation, scaling, and
            enhanced bounce effect.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <h3 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
              Animation Properties:
            </h3>
            <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
              <li>• Scale: 0.3 → 1.0</li>
              <li>• Rotation: -10° → 0°</li>
              <li>• Spring damping: 15</li>
              <li>• Spring stiffness: 400</li>
              <li>• Bounce: 0.6</li>
            </ul>
          </div>
        </div>
      </BaseModal>
    </div>
  );
}
