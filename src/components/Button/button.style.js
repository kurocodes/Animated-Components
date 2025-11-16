import { tv } from "tailwind-variants";

export const button = tv({
  base: "relative inline-flex items-center justfy-center rounded-lg font-medium text-sm overflow-hidden cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      default:
        "bg-slate-900 hover:bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200",
      secondary:
        "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700",
      outline:
        "bg-transparent hover:bg-gray-100 border border-gray-200 text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:border-gray-800",
      destructive:
        "bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:text-white",
      ghost:
        "bg-transparent hover:bg-gray-200 text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50",
      link: "bg-transparent underline-offset-4 hover:underline text-gray-900 dark:text-gray-50",
      elevated:
        "bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:shadow-[0_2px_4px_rgba(255,255,255,0.3)]",
      pressed:
        "bg-gray-100 hover:bg-gray-200 text-gray-900 inset-shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:inset-shadow-[0_2px_4px_rgba(255,255,255,0.3)]",
    },
    size: {
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-8 py-2.5",
    },
    loading: {
      true: "cursor-wait"
    },
    iconOnly: {
      true: "aspect-square"
    },
  },
  defaultVariants: { variant: "default", size: "md" },
});
