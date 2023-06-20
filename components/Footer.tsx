import { FC } from "react";
import FooterIcons from "./FooterIcons";
import FooterScrollUp from "./FooterScrollUp";

const Footer: FC = () => {
  return (
    <footer className="bg-rose-950 w-full p-12 flex-container flex-col relative">
      <FooterScrollUp />
      <FooterIcons />
      <small className="text-white">
        Jakub Nalewajk{" "}
        <span className="text-red-500 saturate-200 drop-shadow-lg">@2023</span>
      </small>
    </footer>
  );
};

export default Footer;
