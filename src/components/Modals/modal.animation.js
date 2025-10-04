export const animations = {
  scale: {
    initial: { scale: 0.75, y: 20, opacity: 0 },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
  },
  slide: {
    initial: { y: -50, scale: 0.95, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 300 },
    },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  },
  bounce: {
    initial: { scale: 0.3, rotate: -10 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", damping: 15, stiffness: 400, bounce: 0.6 },
    },
  },
};
