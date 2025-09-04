import { useState } from "react";
import { mai_san_images } from "../../assets/assets";
import BaseCard from "./BaseCard";
import { motion } from "motion/react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
          boxShadow: flipped
            ? "0px 20px 40px rgba(0,0,0,0.35)"
            : "0px 10px 20px rgba(0,0,0,0.2)",
          scale: flipped ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-60 h-86 rounded-4xl preserve-3d"
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front side */}
        <div className="absolute inset-0 backface-hidden">
          <BaseCard
            img={mai_san_images[1]}
            title="Mai Sakurajima"
            description="This is some placeholder description."
          />
        </div>

        {/* Back side */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <BaseCard
            title="Mai Sakurajima"
            description="This is the description from other side."
            className="h-full place-content-center"
          />
        </div>
      </motion.div>
    </div>
  );
}
