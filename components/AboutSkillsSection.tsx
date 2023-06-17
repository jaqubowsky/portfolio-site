import { FC, ReactNode } from "react";

interface AboutSection {
  children: ReactNode;
}

const AboutSection: FC<AboutSection> = ({ children }) => {
  return (
    <div className="mt-20 group">
      <h3 className="text-2xl mb-4 cursor-pointer">
        What can I{" "}
        <span className="transition-color group-hover:text-red-500">do?</span>
      </h3>
      {children}
    </div>
  );
};

export default AboutSection;