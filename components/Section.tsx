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
      className={clsx("flex-container flex-col w-full text-center", className)}
    >
      <div className="max-w-6xl p-6 w-full">{children}</div>
    </section>
  );
};

export default Section;
