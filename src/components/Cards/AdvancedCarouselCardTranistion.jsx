import { useRef, useState } from "react";
import { mai_san_images } from "../../assets/assets";
import BaseCard from "./BaseCard";
import { motion, AnimatePresence, wrap } from "motion/react";

const cardVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 100 : -100,
    opacity: 0,
    rotate: dir > 0 ? 10 : -10,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    zIndex: 1,
    transition: { type: "spring", stiffness: 300, damping: 28 },
  },
  exit: (dir) => ({
    x: dir > 0 ? -100 : 100,
    opacity: 0,
    rotate: dir > 0 ? -10 : 10,
    zIndex: 0,
    transition: { type: "spring", stiffness: 300, damping: 28 },
  }),
};

export default function AdvancedCarouselCardTranistion() {
//   const [activeCard, setActiveCard] = useState(0);
//   const [direction, setDirection] = useState(0);

  const [[index, direction], setPage] = useState([0, 0]);

  const wrapIndex = (i) =>
    (i + mai_san_images.length) % mai_san_images.length;

  const constraintRef = useRef(null);

  const paginate = (dir) => {
    setPage(([i]) => [wrapIndex(i + dir), dir]);
  }


  return (
    <motion.div className="relative w-60 h-60" ref={constraintRef}>
      <AnimatePresence initial={false} custom={direction}>
        <BaseCard
          key={index}
          className="absolute inset-0"
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          // dragConstraints={constraintRef}
          dragMomentum={false}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            const threshold = 120; // ~pixels: prevents accidental paginations
            if (info.offset.x > threshold) paginate(-1);
            else if (info.offset.x < -threshold) paginate(1);
          }}
        >
          <motion.div className=" rounded-3xl w-full h-auto pointer-events-none">
            <img
              src={mai_san_images[index]}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </BaseCard>
      </AnimatePresence>
    </motion.div>
  );
}
