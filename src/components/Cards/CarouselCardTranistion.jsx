import { useRef, useState } from "react";
import { mai_san_images } from "../../assets/assets";
import BaseCard from "./BaseCard";
import { motion, AnimatePresence, wrap } from "motion/react";

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    rotate: direction > 0 ? -10 : 10,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    zIndex: 1,
    transition: { type: "spring", stiffness: 300, damping: 28 },
  },
  exit: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    rotate: direction > 0 ? 10 : -10,
    zIndex: 0,
    transition: { type: "spring", stiffness: 300, damping: 28 },
  }),
};

export default function CarouselCardTranistion() {
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(0);

  const constraintRef = useRef(null);

  const wrapIndex = (index) =>
    (index + mai_san_images.length) % mai_san_images.length;

  return (
    <motion.div className="relative  w-60 h-60" initial={false} ref={constraintRef}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <BaseCard
          key={activeCard}
          drag="x"
          variants={cardVariants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          onDragEnd={(e, info) => {
            if (info.offset.x > 10) {
              setDirection(1);
              setActiveCard(wrapIndex(activeCard + 1));
            } else if (info.offset.x < -10) {
              setDirection(-1);
              setActiveCard(wrapIndex(activeCard - 1));
            }
          }}
        >
          <motion.div className=" rounded-3xl w-full h-auto pointer-events-none">
            <img
              src={mai_san_images[activeCard]}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </BaseCard>
      </AnimatePresence>
    </motion.div>
  );
}
