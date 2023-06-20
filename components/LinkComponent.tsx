import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

const linkClasses = cva(
  ["py-2", "px-6", "hover:no-underline", "transition-color", "cursor-pointer"],
  {
    variants: {
      intent: {
        greeting: [
          "border",
          "text-white",
          "hover:bg-red-500",
          "hover:border-red-500",
        ],
        projects: [
          "border",
          "text-red-500",
          "hover:text-white",
          "border-red-500",
          "hover:bg-red-500",
          "hover:border-red-500",
        ],
        contact: [
          "border",
          "text-white",
          "bg-transparent",
          "border-white",
          "hover:bg-red-500",
          "hover:border-red-500",
        ],
        text: [
          "text-white",
          "hover:text-red-500",
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

interface LinkComponent extends LinkProps, VariantProps<typeof linkClasses> {
  children: ReactNode;
  className?: string;
  target?: string;
}

const LinkComponent: FC<LinkComponent> = ({
  children,
  className,
  href,
  intent,
  size,
  target,
  ...props
}) => {
  return (
    <Link
    target={target}
      href={href}
              rel="noopener noreferrer"
      className={linkClasses({ intent, size, className })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
