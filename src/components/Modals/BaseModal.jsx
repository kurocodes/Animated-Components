/**
 * BaseModal component
 *
 * @description A reusable modal component with animation, theming, and accessibility.
 * @component
 *
 * @param {boolean} isOpen - Controls whether the modal is visible.
 * @param {Function} onClose - Callback triggered when the modal requests to close.
 * @param {ReactNode} [children] - Custom content. If provided, header/footer won’t render.
 * @param {string} [title="Base Modal"] - Title text in the header (if shown).
 * @param {string | ReactNode} [content=""] - Content in the modal body (if shown).
 * @param {boolean} [showHeader=true] - Show the default modal header.
 * @param {boolean} [showCloseInHeader=true] - Show close button in the header.
 * @param {boolean} [showCloseInFooter=true] - Show close button in the footer.
 * @param {string} [className=""] - Extra classes for modal styling.
 * @param {string} [backdropClassName=""] - Extra classes for backdrop styling.
 * @param {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} [size="lg"] - Modal size.
 * @param {"light"|"dark"|"custom"} [theme="light"] - Modal theme.
 * @param {boolean} [backdropBlur=true] - Apply blur to the backdrop.
 * @param {boolean} [closeOnBackdropClick=true] - Allow closing by clicking backdrop.
 * @param {boolean} [closeOnEscape=true] - Allow closing with Escape key.
 * @param {"fadeScale"|"slideUp"|"bounce"} [animation="slideUp"] - Animation preset.
 * @param {object} [animationProps={}] - Custom animation overrides.
 */
import { motion, AnimatePresence } from "motion/react";
import { modal, backdrop, header, button } from "./modal.style";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { animations } from "./modal.animation.js";
import { useTheme } from "../../context/ThemeContext.jsx";

function Portal({ children }) {
  if (typeof window === "undefined") return null;
  return createPortal(children, document.body);
}

export default function BaseModal({
  // Control
  isOpen,
  onClose,

  // Content
  children,
  title = "Base Modal",
  content,

  // Layout/UI
  showHeader = true,
  showCloseInHeader = true,
  showCloseInFooter = true,

  // Styling
  className = "",
  backdropClassName = "",
  size = "md",
  theme,
  backdropBlur = true,

  // Behavior
  closeOnBackdropClick = true,
  closeOnEscape = true,

  // Animation
  animation = "scale",
  animationProps = {},
}) {
  const { theme: globalTheme } = useTheme();
  const resolvedTheme = theme || globalTheme || "light";

  const anim = animations[animation] || animations.scale;
  const {
    initial = anim.initial,
    animate = anim.animate,
    ...rest
  } = animationProps;

  const footerCloseRef = useRef(null);

  // Focus footer close button on open
  useEffect(() => {
    if (isOpen && footerCloseRef.current) {
      footerCloseRef.current.focus();
    }
  }, [isOpen]);

  // Handle Escape key close
  useEffect(() => {
    if (!closeOnEscape) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Portal>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            className={backdrop({
              blur: backdropBlur,
              class: backdropClassName,
            })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeOnBackdropClick ? onClose : undefined}
          />

          {/* Modal Content */}
          <motion.div
            key="modal-content"
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal={true}
            className={modal({ size, theme: resolvedTheme, class: className })}
            initial={initial}
            animate={animate}
            onClick={(e) => e.stopPropagation()}
            {...rest}
          >
            {showHeader && (
              <div className={header({ theme: resolvedTheme })}>
                {/* Modal Title */}
                <h2 id="modal-title" className="text-lg font-semibold">
                  {title}
                </h2>

                {/* Modal Header Close Button */}
                {showCloseInHeader && (
                  <button
                    className={button({
                      theme: resolvedTheme,
                      class: "p-1 bg-transparent",
                    })}
                    onClick={onClose}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            )}
            <div className="p-4 max-h-[85vh] overflow-y-auto">
              {children || (
                <div className="space-y-4">
                  {/* Modal Content */}
                  <p className="text-gray-600 dark:text-gray-400">
                    {content ||
                      "This is a basic modal example. You can put any content here. The modal will close when you click the X button, press ESC, or click outside the modal."}
                  </p>

                  {/* Modal Footer Close Button */}
                  {showCloseInFooter && (
                    <div className="w-full flex justify-end">
                      <button
                        ref={footerCloseRef}
                        className={button({ theme: resolvedTheme })}
                        onClick={onClose}
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
}
