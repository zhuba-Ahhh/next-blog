import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/70",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 active:bg-destructive/70",
        outline:
          "text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
