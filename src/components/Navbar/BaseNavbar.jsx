import { motion } from "motion/react";

// for showcase
const defaultNavStyle =
  "flex items-center justify-center px-6 py-4 bg-white shadow-md";

// for fixed position
// const defaultNavStyle =
//   "flex items-center justify-center px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50";

const defaultLinkStyle =
  "relative px-3 py-2 font-medium text-gray-700 hover:text-black cursor-pointer";

export default function BaseNavbar({
  navLinks = ["Home", "About", "Services", "Contact"], // default nav items
  renderLink, // optional custom renderer for links
  className = "",
  linkClassName = "cursor-pointer",
  containerClassName = "",
  children,
  ...props
}) {
  return (
    <motion.nav className={`${className} ${defaultNavStyle} `} {...props}>
      {/* Links */}
      <div className={`flex gap-6 ${containerClassName}`}>
        {navLinks.map((link, i) =>
          renderLink ? (
            renderLink(link, i, linkClassName)
          ) : (
            <motion.a
              key={link}
              className={`${defaultLinkStyle} ${linkClassName}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          )
        )}
      </div>

      {/* Extra custom content if needed */}
      {children}
    </motion.nav>
  );
}
