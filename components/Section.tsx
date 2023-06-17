import clsx from "clsx";
import { FC, ReactNode } from "react";

interface Section {
  children: ReactNode;
  id: string;
  className?: string;
}

const Section: FC<Section> = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={clsx(" flex-container flex-col w-full", className)}
    >
      <div className="max-w-4xl text-center">{children}</div>
    </section>
  );
};

export default Section;
