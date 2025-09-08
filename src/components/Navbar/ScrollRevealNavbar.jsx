import { useMotionValueEvent, useScroll } from "motion/react";
import BaseNavbar from "./BaseNavbar";
import { useState } from "react";

export default function ScrollRevealNavbar() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    const diff = current - previous;

    if (diff > 0) {
      // scrolling down → hide
      setShow(false);
    } else if (diff < 0) {
      // scrolling up → show
      setShow(true);
    }
  });

  return (
    <div className="w-full">
      <BaseNavbar
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />
      <div className="w-full h-screen"></div>
    </div>
  );
}
