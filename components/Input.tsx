import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<Input> = ({ className, ...props }) => {
  return (
      <input
        className={clsx(
          "drop-shadow-md border-gray border-2 px-6 py-2 text-lg rounded-sm bg-gray-950 outline-none border-none w-3/4",
          className
        )}
        {...props}
      />
  );
};

export default Input;
