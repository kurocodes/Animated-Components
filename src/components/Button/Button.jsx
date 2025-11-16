import { AnimatePresence, motion } from "motion/react";
import { button } from "./button.style";
import { useState } from "react";

export default function Button({
  variant,
  size,
  disabled,
  loading,
  IconLeft,
  IconRight,
  onClick,
  className,
  type,
  ripple = true,
  animationProps = {},
  children,
  ...props
}) {
  const isDisabled = disabled || loading;

  const isIconOnly =
    !children && ((IconLeft && !IconRight) || (!IconLeft && IconRight));

  const [rippleState, setRippleState] = useState({
    key: 0,
    x: 0,
    y: 0,
    radius: 0,
  });

  const handleRipple = (e) => {
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const topLeft = Math.hypot(0 - x, 0 - y);
      const topRight = Math.hypot(rect.width - x, 0 - y);
      const bottomLeft = Math.hypot(0 - x, rect.height - y);
      const bottomRight = Math.hypot(rect.width - x, rect.height - y);
      const radius = Math.max(topLeft, topRight, bottomLeft, bottomRight);
      setRippleState({ key: Date.now(), x, y, radius });
    }
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      {...animationProps}
      whileTap={
        !isDisabled ? { scale: 0.95, ...(animationProps.whileTap || {}) } : {}
      }
      type={type || "button"}
      aria-busy={loading}
      aria-disabled={isDisabled}
      className={button({
        size,
        variant,
        class: className,
        loading,
        iconOnly: isIconOnly,
      })}
      disabled={isDisabled}
      onClick={
        !isDisabled
          ? (e) => {
              if (ripple) handleRipple(e);
              else if (onClick) onClick();
            }
          : undefined
      }
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin h-4 w-4"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
          </svg>
          {children}
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          {IconLeft && <IconLeft className="" />}
          {children && <span className="">{children}</span>}
          {IconRight && <IconRight className="" />}
        </span>
      )}
      {ripple && (
        <AnimatePresence initial={false}>
          <motion.div
            key={rippleState.key}
            className="absolute -translate-1/2 rounded-full bg-gray-400"
            style={{
              top: rippleState.y,
              left: rippleState.x,
              width: rippleState.radius * 2,
              height: rippleState.radius * 2,
            }}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </AnimatePresence>
      )}
    </motion.button>
  );
}
