import Link from "next/link";
import {ChevronsUp} from "react-feather";

const FooterScrollUp = () => {
  return (
    <Link
      className="cursor-pointer bg-rose-50 text-black p-2 -top-5 absolute items-center hover:scale-[90%] transition-all rounded-full drop-shadow-lg]"
      href="#home"
    >
      <ChevronsUp />
    </Link>
  );
};

export default FooterScrollUp;