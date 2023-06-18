import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";

const nameClasses = cva(["font-bold, border-b"], {
  variants: {
    color: {
      white: ["text-white", "border-white"],
      gray: ["text-gray-600", "border-gray-600"],
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

interface SectionName extends VariantProps<typeof nameClasses> {
  children: ReactNode;
}

const SectionName: FC<SectionName> = ({ children, color }) => {
  return (
    <h2 className="section-name">
      <span className={nameClasses({ color })}>{children}</span>
    </h2>
  );
};

export default SectionName;
