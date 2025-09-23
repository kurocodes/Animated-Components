import { useState } from "react";
import BaseCard from "./BaseCard";
import { mai_san_images } from "../../assets/assets";

export default function TiltCard({ children, className = "", ...props }) {
  const maxTilt = 10;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = (x / rect.width) * 2 - 1;
    const yRatio = (y / rect.height) * 2 - 1;
    const rotateX = -(yRatio * maxTilt);
    const rotateY = xRatio * maxTilt;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: 1000 }}>
      <BaseCard
        img={mai_san_images[0]}
        imgStyle={{ x: tilt.y * 0.2, y: tilt.x * 0.2 }}
        title="Mai Sakurajima"
        description="Graceful & unforgettable, just like this card’s motion."
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => handleMouseLeave()}
        style={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          boxShadow: `${-tilt.y * 2}px ${tilt.x * 2}px 20px rgba(0,0,0,0.3)`,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      ></BaseCard>
    </div>
  );
}
