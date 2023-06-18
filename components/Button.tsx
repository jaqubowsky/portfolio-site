import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

const buttonClasses = cva(
  [
    "border",
    "py-2",
    "px-6",
    "hover:no-underline",
    "transition",
    "ease-in-out",
    "duration-700",
    "delay-75",
    "cursor-pointer",
  ],
  {
    variants: {
      intent: {
        greeting: ["text-white", "hover:bg-red-500", "hover:border-red-500"],
        projects: [
          "text-red-500",
          "hover:text-white",
          "border-red-500",
          "hover:bg-red-500",
          "hover:border-red-500",
        ],
        contact: [
          "text-white",
          "bg-transparent",
          "border-white",
          "hover:bg-red-500",
          "hover:border-red-500",
        ],
      },
      size: {
        small: ["text-md", "px-2", "py-1"],
        medium: ["text-lg", "px-6", "py-2"],
        large: ["text-xlg", "px-8", "py-4"],
      },
    },
    defaultVariants: {
      intent: "greeting",
      size: "medium",
    },
  }
);

interface Button extends LinkProps, VariantProps<typeof buttonClasses> {
  children: ReactNode;
  className?: string;
}

const Button: FC<Button> = ({
  children,
  className,
  href,
  intent,
  size,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={buttonClasses({ intent, size, className })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
