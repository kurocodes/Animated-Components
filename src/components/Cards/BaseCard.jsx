// Future updates:
// - Add more layouts

import { motion } from "motion/react";
import { mai_san_images } from "../../assets/assets";

const verticalCardStyle =
  "p-2 bg-[#2c2c2c] w-60 rounded-4xl shadow-md flex flex-col overflow-hidden cursor-pointer";

export default function BaseCard({
  children,
  className = "",
  img = mai_san_images[0],
  imgStyle,
  title = "Mai Sakurajima",
  description = "This is some placeholder description.",
  ...props
}) {
  return (
    <motion.div
      className={`${verticalCardStyle} ${className}`}
      {...props} // so you can directly add motion props (whileHover, whileTap, etc.)
    >
      {children || (
        <>
          {img && (
            <motion.div className=" rounded-3xl w-full h-auto" style={imgStyle}>
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          )}
          {(title || description) && (
            <div className="p-4 flex flex-col gap-1">
              {title && (
                <h3 className="font-semibold text-lg text-white">{title}</h3>
              )}
              {description && (
                <p className="text-sm text-white/50">{description}</p>
              )}
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
