import { useState } from "react";
import BaseNavbar from "./BaseNavbar";
import { motion } from "motion/react";

export default function ActiveIndicatorNavbar({ defaultActive = 0 }) {
  const [active, setActive] = useState(defaultActive);

  const handlesetActive = (i) => setActive(i);

  return (
    <BaseNavbar
      renderLink={(link, i, linkClassName) => (
        <motion.a
          key={i}
          aria-current={active === i ? "page" : undefined}
          className={`${linkClassName} relative group px-3 py-2 font-medium`}
          onClick={() => handlesetActive(i)}
        >
          <motion.span className="group-hover:text-purple-500">
            {link}
          </motion.span>

          {/* active indicator */}
          {active === i && (
            <motion.span
              layoutId="indicator"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute left-0 bottom-0 h-[2px] w-full 
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            ></motion.span>
          )}
        </motion.a>
      )}
    />
  );
}
