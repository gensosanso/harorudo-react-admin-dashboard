import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { cn } from '../../core/utils/common.util';

export const buttonVariants = cva(
  'flex items-center justify-center gap-2 align-middle select-none font-sans font-bold transition-all disabled:opacity-50 disabled:pointer-events-none rounded-lg text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]',
  {
    variants: {
      variant: {
        ghost: 'bg-transparent text-dark',
        primary: 'bg-primary hover:bg-primary/90',
        danger: 'bg-destructive hover:bg-danger/90',
        secondary: 'bg-secondary hover:bg-secondary/80',
      },
      size: {
        xs: 'px-3 py-1.5 text-xs icon-xs',
        sm: 'px-4 py-2 text-xs icon-sm',
        md: 'px-5 py-2.5 text-sm icon-md',
        lg: 'px-6 py-3 text-base icon-lg',
        xl: 'px-8 py-4 text-lg icon-xl',
        'icon-xs': 'p-1.5 icon-xs',
        'icon-sm': 'p-2 icon-sm',
        'icon-md': 'p-2.5 icon-md',
        'icon-lg': 'p-3 icon-lg',
        'icon-xl': 'p-4 icon-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = 'Button';

interface IButtonLinkProps extends LinkProps, VariantProps<typeof buttonVariants> {}

const ButtonLink = React.forwardRef<HTMLAnchorElement, IButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Link className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export default Button;
