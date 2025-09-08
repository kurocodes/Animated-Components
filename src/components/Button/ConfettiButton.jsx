import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const emojis = ["🎉", "✨", "💖", "🌸", "🎊", "⭐"];

export default function ConfettiButton() {
  const [particles, setParticles] = useState([]);

  const spawnParticles = () => {
    const newParticles = Array.from({ length: 10 }, () => ({
      id: Date.now() + Math.random(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 300,
      rotate: (Math.random() - 0.5) * 360,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // auto-remove after animation
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id))
      );
    }, 1500);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        className="relative z-10 px-6 py-3 rounded-xl font-bold uppercase tracking-wide 
                 bg-pink-500 text-white cursor-pointer select-none shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={spawnParticles}
      >
        Celebrate 🎉
      </motion.button>

      {/* Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute z-[9] top-1/2 left-1/2 pointer-events-none select-none text-xl"
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              rotate: particle.rotate,
              opacity: 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            {particle.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
