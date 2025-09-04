import { useState } from "react";
import { mai_san_images } from "../../assets/assets";
import BaseCard from "./BaseCard";
import { AnimatePresence, motion } from "motion/react";

export default function GlassShineCard() {
  const [shine, setShine] = useState(false);

  return (
    <div>
      <BaseCard
        className="bg-white/10 border border-white/20 backdrop-blur-lg relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShine(true)}
        onHoverEnd={() => setShine(false)}
      >
        <motion.div className="bg-gray-200 rounded-3xl w-full h-auto">
          <img
            src={mai_san_images[4]}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
        <div className="p-4 flex flex-col gap-1">
          <h3 className="font-extrabold text-lg text-black/60">
            Mai Sakurajima
          </h3>
          <p className="text-sm font-semibold text-black/40">
            This is some placeholder description.
          </p>
        </div>

        <AnimatePresence>
          {shine && (
            <motion.div
              key="shine"
              className="absolute top-0 left-0 h-[150%] w-[80px] shine-strip"
              initial={{ x: "-150%", opacity: 0, skewX: 12 }}
              animate={{ x: "350%", opacity: [0, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </BaseCard>
    </div>
  );
}
