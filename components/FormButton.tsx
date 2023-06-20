import { FC, HTMLAttributes, ReactNode } from "react";

interface FormButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const FormButton: FC<FormButton> = ({ children, ...props }) => {
  return (
    <button
      type="submit"
      className="self-end border px-6 py-2 transition-color hover:no-underline text-white bg-transparent border-white hover:bg-red-500 hover:border-red-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default FormButton;
