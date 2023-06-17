import { FC, ReactNode } from "react";

interface Footer {
  children: ReactNode;
}

const Footer: FC<Footer> = ({ children }) => {
  return <footer>{children}</footer>;
};

export default Footer;
