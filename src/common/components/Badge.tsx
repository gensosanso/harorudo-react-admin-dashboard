import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../core/utils/common.util';

const badgeVariants = cva(
  'text-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-transparent',
        primary: 'border-transparent bg-primary hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: IBadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export default Badge;
