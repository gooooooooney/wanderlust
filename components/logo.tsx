import { cn } from "@/lib/utils";
import { VariantProps, tv } from "tailwind-variants";
import { Lilita_One } from "next/font/google";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});

const logoSizes = tv({
  base: "text-orange-400",

  variants: {
    size: {
      default: "text-2xl",
      lg: "text-4xl",
      md: "text-3xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Logo = ({ size, className }: VariantProps<typeof logoSizes> & {className?: string}) => {
  return (
    <p
      className={cn(
        logoSizes({
          size,
        }),
        className,
        lilitaOne.className
      )}
    >
      Wander<span className="text-sky-500">lust</span>
    </p>
  );
};
