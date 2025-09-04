import BaseCard from "./BaseCard";
import { mai_san_images } from "../../assets/assets";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";
import { animate } from "motion";

export default function SpringyCard() {
  const constraintRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  //   const rotate = useTransform(
  //     [x, y],
  //     ([latestX, latestY]) => latestX / 10 + latestY / -10
  //   );
  const distance = useTransform([x, y], ([latestX, latestY]) =>
    Math.sqrt(latestX ** 2 + latestY ** 2)
  );

  const rotate = useTransform(x, (latestX) => latestX / 10);
  const scale = useTransform(distance, [0, 150], [1, 0.8]);
  const shadow = useTransform(
    distance,
    [0, 150],
    ["0px 10px 20px rgba(0,0,0,0.2)", "0px 20px 40px rgba(0,0,0,0.3)"]
  );

  return (
    <div
      ref={constraintRef}
      className="relative w-60 h-60 flex items-center justify-center"
    >
      <motion.div
        drag
        dragConstraints={constraintRef}
        onDragEnd={() => {
          animate(x, 0, { type: "spring", stiffness: 400, damping: 20 });
          animate(y, 0, { type: "spring", stiffness: 400, damping: 20 });
        }}
        style={{ x, y, rotate, scale, boxShadow: shadow }}
        dragElastic={0.5}
        transition={{ type: "spring", stiffness: 400, damping: 12 }}
        className="rounded-4xl w-full h-full shadow-lg active:cursor-grabbing"
      >
        <BaseCard className="active:cursor-grabbing">
          <motion.div className=" rounded-3xl w-full h-auto pointer-events-none">
            <img
              src={mai_san_images[0]}
              alt="springy card"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </BaseCard>
      </motion.div>
    </div>
  );
}
