import { useState } from "react";
import { mai_san_images } from "../../assets/assets";
import BaseCard from "./BaseCard";
import { AnimatePresence, motion } from "motion/react";

export default function ExpandingCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div layout>
      <BaseCard layout onClick={() => setExpanded(!expanded)}>
        <motion.div
          layoutId="expanding-card-img"
          className=" rounded-3xl w-full h-auto"
        >
          <img
            src={mai_san_images[0]}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      </BaseCard>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-10 h-screen w-screen bg-[#212121] place-content-center place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              layoutId="expanding-card-img"
              className=" rounded-3xl w-100 h-auto"
              onClick={() => setExpanded(false)}
            >
              <img
                src={mai_san_images[0]}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
