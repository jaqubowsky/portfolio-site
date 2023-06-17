import { FC } from "react";

type SectionName = {
  name: string;
};

const SectionName: FC<SectionName> = ({ name }) => {
  return (
    <h2 className="section-name">
      <span className="border-b border-b-gray-600 text-gray-600 font-bold">{name}</span>
    </h2>
  );
};

export default SectionName;
