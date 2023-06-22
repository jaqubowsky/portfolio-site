import clsx from "clsx";
import { FC, ReactNode } from "react";

interface Nav {
  className?: string;
  children: ReactNode;
}

const Nav: FC<Nav> = ({ className, children }) => {
  return (
    <nav
      className={clsx(
        "z-50 top-0 items-center left-0 w-full flex sticky justify-center bg-gray-900 p-4 border-b-2 border-b-red-600",
        className
      )}
    >
      <div className="flex items-center flex-shrink-0">{children}</div>
    </nav>
  );
};

export default Nav;
