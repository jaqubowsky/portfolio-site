import { FC, ReactNode } from "react";

interface AboutMeSection {
  children: ReactNode;
}

const AboutMeSection: FC<AboutMeSection> = ({ children }) => {
  return (
    <div className="group">
      <h3 className="text-2xl mb-4 cursor-pointer">
        Who{" "}
        <span className="group-hover:text-red-500 transition-color">am</span> I?
      </h3>
      {children}
    </div>
  );
};

export default AboutMeSection;