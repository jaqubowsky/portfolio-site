import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

interface Textarea extends InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: FC<Textarea> = ({ className, ...props }) => {
  return (
    <textarea
      rows={10}
      className={clsx(
        "drop-shadow-md border-gray border-2 px-6 py-2 text-lg rounded-sm bg-gray-950 outline-none border-none w-3/4",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
