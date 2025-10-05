import { tv } from "tailwind-variants";

export const modal = tv({
  base: "fixed top-1/2 left-1/2 -translate-1/2 w-full border rounded-xl",
  variants: {
    size: {
      xs: "max-w-sm",
      sm: "max-w-md",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
    },
    theme: {
      light: `
        bg-[hsl(0,0%,100%)]
        text-[hsl(220,20%,15%)]
        border-[hsl(220,15%,85%)]
      `,
      dark: `
        bg-[hsl(220,20%,12%)]
        text-[hsl(220,20%,95%)]
        border-[hsl(220,15%,25%)]
      `,
      custom: "",
    },
  },
  defaultVariants: { size: "lg", theme: "light" },
});

export const header = tv({
  base: "px-4 py-3 flex items-center justify-between border-b",
  variants: {
    theme: {
      light: "border-[hsl(220,15%,85%)]",
      dark: "border-[hsl(220,15%,25%)]",
      custom: "",
    },
  },
});

export const button = tv({
  base: "px-3 py-1.5 rounded-lg cursor-pointer focus:outline-none",
  variants: {
    theme: {
      light: `
        bg-[hsl(220,15%,90%)]
        hover:bg-[hsl(220,15%,85%)]
        text-[hsl(220,20%,15%)]
      `,
      dark: `
        bg-[hsl(220,15%,20%)]
        hover:bg-[hsl(220,15%,28%)]
        text-[hsl(220,20%,95%)]
      `,
      custom: "",
    },
  },
});

export const backdrop = tv({
  base: "fixed inset-0",
  variants: {
    blur: {
      true: "backdrop-blur-sm",
      false: "",
    }
  },
  defaultVariants: { blur: true },
});
